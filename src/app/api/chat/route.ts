import { streamText, convertToModelMessages } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { mistral } from "@ai-sdk/mistral";

export const maxDuration = 30;

const provider = process.env.CHAT_PROVIDER ?? "openrouter";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model =
    provider === "mistral" && process.env.MISTRAL_API_KEY
      ? mistral("mistral-large-latest")
      : createOpenRouter({
          apiKey: process.env.OPENROUTER_API_KEY ?? "",
        }).chat(process.env.OPENROUTER_MODEL ?? "google/gemini-2.5-flash-lite");

  const result = streamText({
    model,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
