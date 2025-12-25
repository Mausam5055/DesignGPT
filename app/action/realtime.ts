"use server";

import { inngest } from "@/inngest/client";
import { getSubscriptionToken } from "@inngest/realtime";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function fetchRealtimeSubscriptionToken() {
  const session = await getKindeServerSession();
  const user = await session.getUser();
  if (!user) throw new Error("Unauthorized");

  // This creates a token using the Inngest API that is bound to the channel and topic:
  const token = await getSubscriptionToken(inngest, {
    channel: `user:${user.id}`,
    topics: [
      "generation.start",
      "analysis.start",
      "analysis.complete",
      "frame.created",
      "generation.complete",
    ],
  });

  return token;
}
