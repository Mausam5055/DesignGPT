# DesignGPT (xdesign-ai)

<div align="center">

![License](https://img.shields.io/github/license/mausamkar/xdesign-ai?style=for-the-badge&color=blue)
![Version](https://img.shields.io/badge/version-0.1.0-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-3.0-white?style=for-the-badge&logo=inngest&logoColor=050505)

![Gemini](https://img.shields.io/badge/Gemini_2.0_Flash-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter-API-7D55C7?style=for-the-badge&logo=openai&logoColor=white)
![Kinde](https://img.shields.io/badge/Kinde-Auth-black?style=for-the-badge&logo=kinde&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

</div>

---

**DesignGPT** is a production-ready, AI-native design platform that transforms natural language descriptions into high-fidelity, editable UI mockups. Describe your idea, and DesignGPT's autonomous agents will analyze, plan, and generate a multi-screen mobile application design in real-time.

## 📸 Interactive Previews

<div align="center">
  <img src="./public/preview1.png" alt="Dashboard Dashboard" width="48%" style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" />
  <img src="./public/preview2.png" alt="Design Canvas" width="48%" style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" />
</div>

---

## 🚀 Advanced Features

### 🧠 Intelligent Generation Engine

- **Context-Aware Design**: Utilizing `google/gemini-2.0-flash-001`, the system analyzes your request to determine consistency with existing screens.
- **Automated Planning**: The AI explicitly plans the App Structure (User Flow, Screen Purpose) before writing a single line of code.
- **Smart Remediation**: Need a change? The `regenerateFrame` function understands visual context, preserving your layout while applying specific edits.

### 🎨 Professional Design System

- **Dynamic Theming**: Automatically selects and applies visual themes (e.g., Midnight, Ocean Breeze) or extracts them from your prompt.
- **Tailwind v4 Native**: All generated code is pure, utility-first Tailwind CSS, making it instantly copy-pasteable into your own projects.
- **Unsplash Integration**: Automatically populates designs with high-quality, relevant stock imagery via tool calling.

### ⚡ Enterprise-Grade Architecture

- **Event-Driven Backend**: Heavy AI tasks are offloaded to **Inngest** serverless queues, ensuring the UI never freezes.
- **Real-Time Websockets**: Watch your designs appear component-by-component with optimistic UI updates.
- **Secure Authentication**: Fully integrated with **Kinde** for secure, passwordless authentication flows.

---

## 🛠️ System Architecture

DesignGPT employs a specialized multi-agent workflow to ensure high-quality output.

### The Generation Pipeline

```mermaid
graph TD
    User[User Request] -->|Submit| API[Next.js API]
    API -->|Event: ui/generate.screens| Inngest

    subgraph "Design Agent Workflow"
        Inngest -->|Step 1| Analyzer[Logician Agent]
        Analyzer -->|Plan Screens & Theme| Planner[JSON Schema Output]

        Planner -->|Loop for each Screen| Generator[Creative Agent]
        Generator -->|Fetch Assets| Unsplash[Unsplash API]
        Generator -->|Context| History[Previous Screens]

        History -->|Inject Consistency| Generator
        Generator -->|Stream HTML| DB[(Postgres Database)]
    end

    DB -->|Real-time Event| UI[Client Dashboard]
```

### Component Stack

| Layer             | Technology                  | Purpose                                             |
| :---------------- | :-------------------------- | :-------------------------------------------------- |
| **Frontend**      | **Next.js 16 (React 19)**   | Server Actions, RSC, and Client Components          |
| **Styling**       | **Tailwind CSS 4**          | Zero-runtime styling with CSS variables             |
| **State**         | **Tanstack Query**          | Async state management and caching                  |
| **Canvas**        | **React Zoom Pan Pinch**    | Infinite canvas interactions for design editing     |
| **AI LLM**        | **Google Gemini 2.0 Flash** | High-speed, reasoning-capable model via OpenRouter  |
| **Orchestration** | **Inngest**                 | Durable execution, retries, and step-function flows |
| **Database**      | **Prisma + PostgreSQL**     | Type-safe data access and persistance               |
| **Validation**    | **Zod**                     | Runtime schema validation for AI structured outputs |

---

## 🏁 Getting Started Guide

### Prerequisites

- Node.js 18+ established
- PostgreSQL Database URL
- Kinde Auth Account
- OpenRouter API Key

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/mausamkar/xdesign-ai.git

# Navigate to project root
cd xdesign-ai

# Install dependencies with legacy peer deps if needed
npm install
```

### 2. Configuration forms (.env)

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/designgpt"

# Authentication (Kinde)
KINDE_CLIENT_ID="your_client_id"
KINDE_CLIENT_SECRET="your_client_secret"
KINDE_ISSUER_URL="https://your-app.kinde.com"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/dashboard"

# AI & Services
OPENROUTER_API_KEY="sk-or-..."
INNGEST_EVENT_KEY="test_key"
INNGEST_SIGNING_KEY="test_signing_key"
```

### 3. Database Migration

```bash
npx prisma generate
npx prisma db push
```

### 4. Launch Development Environment

DesignGPT requires two concurrent processes to function:

**Terminal 1: The Application**

```bash
npm run dev
# Running at http://localhost:3000
```

**Terminal 2: The Worker (Inngest)**

```bash
npx inngest-cli@latest dev
# Running at http://localhost:8288
```

---

## 📂 Project Structure Map

```text
d:\DesignGPT-
├── 📂 app                  # Next.js App Router
│   ├── (dashboard)         # Protected dashboard layout
│   ├── (routes)            # Public marketing pages
│   └── api                 # Internal API endpoints
├── 📂 components           # Reusable UI library
├── 📂 inngest              # Async workflow definitions
│   └── 📂 functions        # AI Agent logic (generateScreens.ts)
├── 📂 lib                  # Core utilities (OpenRouter, Prisma)
├── 📂 prisma               # Database schema definitions
└── 📂 public               # Static assets
```

---

## 🤝 Contributing

We welcome contributions from the community!

1. **Fork** the repository
2. Create a **Feature Branch** (`git checkout -b feature/NewMagic`)
3. **Commit** your changes (`git commit -m 'Add NewMagic'`)
4. **Push** to the branch (`git push origin feature/NewMagic`)
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Author:** [Mausam Kar](https://github.com/mausamkar)
