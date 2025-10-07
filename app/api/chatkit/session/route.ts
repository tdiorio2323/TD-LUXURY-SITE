
      import { NextResponse } from "next/server";
      import OpenAI from "openai";
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
      export async function POST() {
        const session = await openai.chatkit.sessions.create({});
        return NextResponse.json({ client_secret: session.client_secret });
      }
      