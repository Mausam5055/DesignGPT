import { tool } from "ai";
import { z } from "zod";

export const unsplashTool = tool({
  description:
    "Search for high-quality images from Unsplash.  Use this when you need to add an <img> tag.",
  inputSchema: z.object({
    query: z
      .string()
      .describe("Image search query (e.g. 'modern loft', 'finance graph')"),
    orientation: z
      .enum(["landscape", "portrait", "squarish"])
      .default("landscape"),
  }),
  execute: async ({ query, orientation }) => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&orientation=${orientation}&per_page=1&client_id=${
          process.env.UNSPLASH_ACCESS_KEY
        }`
      );
      const { results } = await res.json();
      return results?.[0]?.urls?.regular || ``;
    } catch {
      return ``;
    }
  },
});
