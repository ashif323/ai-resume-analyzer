export {}

declare global {

  /* ---------------- FILE SYSTEM ---------------- */

  interface FSItem {
    id: string
    uid: string
    name: string
    path: string
    is_dir: boolean
    parent_id: string
    parent_uid: string
    created: number
    modified: number
    accessed: number
    size: number | null
    writable: boolean
  }

  /* ---------------- USER ---------------- */

  interface PuterUser {
    uuid: string
    username: string
  }

  /* ---------------- KV STORAGE ---------------- */

  interface KVItem {
    key: string
    value: string
  }

  /* ---------------- AI CHAT ---------------- */

  interface ChatMessageContent {
    type: "file" | "text"
    puter_path?: string
    text?: string
  }

  interface ChatMessage {
    role: "user" | "assistant" | "system"
    content: string | ChatMessageContent[]
  }

  interface PuterChatOptions {
    model?: string
    stream?: boolean
    max_tokens?: number
    temperature?: number
    tools?: {
      type: "function"
      function: {
        name: string
        description: string
        parameters: {
          type: string
          properties: Record<string, any>
        }
      }
    }[]
  }

  /* ---------------- AI RESPONSE ---------------- */

  interface AIResponse {
    index: number
    message: {
      role: string
      content: string | any[]
      refusal: string | null
      annotations: any[]
    }
    logprobs: any | null
    finish_reason: string
    usage: {
      type: string
      model: string
      amount: number
      cost: number
    }[]
    via_ai_chat_service: boolean
  }

  /* ---------------- PUTER API ---------------- */

  interface Puter {

    ai: {
      chat(
        messages: ChatMessage[],
        options?: PuterChatOptions
      ): Promise<AIResponse>
    }

    auth: {
      login(): Promise<PuterUser>
      logout(): Promise<void>
      getUser(): Promise<PuterUser | null>
    }

    fs: {
      read(path: string): Promise<string>
      write(path: string, content: string): Promise<void>
      list(path: string): Promise<FSItem[]>
      delete(path: string): Promise<void>
    }

    kv: {
      get(key: string): Promise<string | null>
      set(key: string, value: string): Promise<void>
      list(): Promise<KVItem[]>
      delete(key: string): Promise<void>
    }
  }

  /* ---------------- WINDOW GLOBAL ---------------- */

  interface Window {
    puter: Puter
  }

}