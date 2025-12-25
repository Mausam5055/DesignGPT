/* eslint-disable @typescript-eslint/no-explicit-any */
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
// Cache the Chromium executable path to avoid re-downloading
let cachedExecutablePath: string | null = null;
let downloadPromise: Promise<string> | null = null;

/**
 * Gets and caches the Chromium executable path
 */
async function getChromiumPath(): Promise<string> {
  if (cachedExecutablePath) return cachedExecutablePath;

  if (!downloadPromise) {
    const chromium = (await import("@sparticuz/chromium-min")).default;
    downloadPromise = chromium
      .executablePath(
        "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar"
      )
      .then((path) => {
        cachedExecutablePath = path;
        console.log("Chromium path cached:", path);
        return path;
      })
      .catch((error) => {
        console.error("Failed to get Chromium path:", error);
        downloadPromise = null;
        throw error;
      });
  }

  return downloadPromise;
}

export async function POST(req: Request) {
  let browser;

  try {
    const { html, width = 800, height = 600, projectId } = await req.json();
    const session = await getKindeServerSession();
    const user = await session.getUser();

    if (!user) throw new Error("Unauthorized");
    const userId = user.id;

    //Detect environment
    const isProduction = process.env.NODE_ENV === "production";
    const isVercel = !!process.env.VERCEL;

    let puppeteer: any;
    let launchOptions: any = {
      headless: true,
    };

    if (isProduction && isVercel) {
      const chromium = (await import("@sparticuz/chromium-min")).default;
      puppeteer = await import("puppeteer-core");
      const executablePath = await getChromiumPath();

      launchOptions = {
        ...launchOptions,
        args: chromium.args,
        executablePath,
      };
    } else {
      puppeteer = await import("puppeteer");
    }

    browser = await puppeteer.launch(launchOptions);

    const page = await browser.newPage();

    //set View port size
    await page.setViewport({
      width: Number(width),
      height: Number(height),
      deviceScaleFactor: 2,
    });

    //Set HTML Content
    await page.setContent(html, {
      waitUntil: "domcontentloaded",
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    //Screenshot

    const buffer = await page.screenshot({
      type: "png",
      fullPage: false,
    });

    if (projectId) {
      const base64 = buffer.toString("base64");
      await prisma.project.update({
        where: {
          id: projectId,
          userId,
        },
        data: {
          thumbnail: `data:image/png;base64,${base64}`,
        },
      });

      return NextResponse.json({ base64 });
    }

    return new NextResponse(buffer as any, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to screenshot",
      },
      { status: 500 }
    );
  } finally {
    if (browser) await browser.close();
  }
}
