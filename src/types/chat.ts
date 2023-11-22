export interface Chat {
  id: string;
  title: string;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  author: "me" | "ai";
  body: string;
}
