export const DEFAULT_CHAT_MODEL: string = "chat-model";

import { ollama } from "ollama-ai-provider-v2";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "Grok Vision",
    description: "Advanced multimodal model with vision and text capabilities",
  },
  {
    id: "chat-model-reasoning",
    name: "Grok Reasoning",
    description:
      "Uses advanced chain-of-thought reasoning for complex problems",
  },
];

export const ollamaDeepSeek = ollama("deepseek-r1:8b");
export const ollamaLlama = ollama("llama3.1:latest");
export const ollamaQwen3 = ollama("qwen3:4b");
