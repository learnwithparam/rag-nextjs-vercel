# Building RAG Applications with Next.js and Vercel AI SDK

![learnwithparam.com](https://www.learnwithparam.com/ai-bootcamp/opengraph-image)

Three ways to build RAG into a Next.js 15 app: direct chat, native provider tools, and a full LangChain pipeline. Compare the tradeoffs side by side in one codebase with streaming responses powered by the Vercel AI SDK.

> Start learning at [learnwithparam.com](https://learnwithparam.com). Regional pricing available with discounts of up to 60%.

## What You'll Learn

- Stream LLM responses end to end with the Vercel AI SDK and `useChat`
- Call multiple providers (Google Gemini, Mistral) from one Next.js app with type-safe SDK adapters
- Use Google's native `urlContext` tool for zero-setup URL-based RAG
- Build a full LangChain RAG pipeline: Cheerio loader, recursive splitter, Mistral embeddings, in-memory vector store, Gemini generator
- Ship a production-quality chat UI with Radix primitives, Tailwind, and motion
- Compare native-tool vs custom-pipeline RAG in the same repo so you can pick the right one for your use case

## Tech Stack

- **Next.js 15** (App Router, Turbopack) with **TypeScript**
- **Vercel AI SDK** (`ai`, `@ai-sdk/react`, provider SDKs for Google and Mistral)
- **LangChain** (`@langchain/core`, `@langchain/langgraph`, `@langchain/textsplitters`, `@langchain/community`, `@langchain/mistralai`)
- **Cheerio** for web scraping
- **Radix UI** + **Tailwind CSS** + **lucide-react** for UI
- **pnpm** for dependency management

## Getting Started

### Prerequisites

- Node.js 20+ and `pnpm` (installed automatically by `make setup`)
- A Google Generative AI key and a Mistral API key

### Quick Start

```bash
make dev

# Or step by step:
make setup          # Install deps and create .env
# Edit .env with your GOOGLE_GENERATIVE_AI_API_KEY and MISTRAL_API_KEY
make run            # Next.js dev server at http://localhost:3000
```

### With Docker

```bash
make build
make up
make logs
make down
```

## API Routes

| Route | What it does | Best for |
|---|---|---|
| `POST /api/chat` | Direct streaming chat with `mistral-large-latest` | Baseline, no retrieval |
| `POST /api/rag` | Gemini's native `google.tools.urlContext` for URL-based Q&A | Quick wins when a provider tool already fits |
| `POST /api/rag2` | Custom LangChain pipeline (Cheerio, splitter, Mistral embeddings, Gemini) | Full control over chunking, retrieval, and prompt grounding |

## Challenges

Work through these incrementally to build the full app:

1. **Streaming Chat UI** - Wire `useChat` to `/api/chat` and stream tokens into the UI
2. **Provider Swap** - Add a selector that routes the chat to Gemini or Mistral
3. **Native Tool RAG** - Use `google.tools.urlContext` to answer questions about a URL without embeddings
4. **Custom Pipeline RAG** - Scrape with Cheerio, split, embed with Mistral, store in `MemoryVectorStore`, generate with Gemini
5. **Citation Rendering** - Show which chunks grounded each answer in the UI
6. **Error Handling** - Graceful fallbacks when a provider fails mid-stream
7. **Compare the Three** - Benchmark latency, cost, and answer quality on the same URL across all three routes

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── chat/route.ts     # Direct Mistral chat
│   │   ├── rag/route.ts      # Gemini native urlContext tool RAG
│   │   └── rag2/route.ts     # LangChain custom RAG pipeline
│   ├── page.tsx
│   └── layout.tsx
├── components/ui/            # Radix + Tailwind components
└── lib/utils.ts
```

## Makefile Targets

```
make help           Show all available commands
make setup          Install deps and create .env
make dev            Setup and run dev server
make run            Run the Next.js dev server
make build-next     Build for production
make start          Start the production server
make lint           Run ESLint
make build          Build Docker image
make up             Start Docker container
make down           Stop container
make clean          Remove node_modules and .next
```

## Learn more

- Start the course: [learnwithparam.com/courses/rag-nextjs-vercel](https://www.learnwithparam.com/courses/rag-nextjs-vercel)
- AI Bootcamp for Software Engineers: [learnwithparam.com/ai-bootcamp](https://www.learnwithparam.com/ai-bootcamp)
- All courses: [learnwithparam.com/courses](https://www.learnwithparam.com/courses)
