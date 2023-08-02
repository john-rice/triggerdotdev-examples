import { client } from "@/trigger";
import { OpenAI } from "@trigger.dev/openai";
import { eventTrigger } from "@trigger.dev/sdk";
import { z } from "zod";

const openai = new OpenAI({
  id: "openai",
  apiKey: process.env.OPENAI_API_KEY!,
});

// tellMeAJoke
client.defineJob({
  id: "openai-tasks",
  name: "OpenAI – Tell me a joke",
  version: "0.0.1",
  trigger: eventTrigger({
    name: "openai.tasks",
    schema: z.object({
      jokePrompt: z.string(),
    }),
  }),
  integrations: {
    openai,
  },
  run: async (payload, io, ctx) => {
    await io.openai.retrieveModel("get-model", {
      model: "gpt-3.5-turbo",
    });

    const models = await io.openai.listModels("list-models");

    const jokeResult = await io.openai.backgroundCreateChatCompletion(
      "background-chat-completion",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: payload.jokePrompt,
          },
        ],
      }
    );

    return {
      joke: jokeResult.choices[0]?.message?.content,
    };
  },
});
