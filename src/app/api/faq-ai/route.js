import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // 1️⃣ Validate Access Token
    const authToken = req.headers.get("x-ai-access-token");
    const expectedToken =
      process.env.AI_ACCESS_TOKEN ||
      "xai-lBUC5mrjJS0H9yLJUAGdJufLBXJlW8ANzwD7uBRIH596YXpcKoAwXJAWOFxPfxjt8jlDIxGHQ3JHo8W";

    if (!authToken || authToken !== expectedToken) {
      return NextResponse.json(
        { error: "Unauthorized: AI access token missing or invalid." },
        { status: 401 }
      );
    }

    // 2️⃣ Parse question from request
    const { question } = await req.json();
    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Invalid request: 'question' is required." },
        { status: 400 }
      );
    }

    // 3️⃣ Ensure Google API key exists
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Google API key not configured." },
        { status: 500 }
      );
    }

    // 4️⃣ Initialize Gemini model
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 5️⃣ Build the AI prompt
    const prompt = `
You are an AI assistant for a digital agency. 
Answer professionally and concisely. 
If a question is unrelated to digital agency services, politely decline.

Examples:
- What is SEO? → SEO (Search Engine Optimization) improves a website’s ranking in search results to increase organic traffic.
- What is an AI agent? → An AI agent is an intelligent program that performs tasks autonomously.
- How can I use AI in my business? → You can automate tasks, analyze data, and personalize user experiences. We can help with custom solutions.
- How much does a website cost? → Prices vary by complexity and design. Contact us for a quote.

Now answer the user’s question:

Question: ${question}
`;

    console.log("📨 Sending to Gemini API:", question);

    // 6️⃣ Generate response
    let result;
    try {
      result = await model.generateContent(prompt);
    } catch (apiError) {
      console.error('Error calling Google Generative AI API:', apiError);
      return NextResponse.json({ error: `Google AI API error: ${apiError.message || 'Unknown error'}` }, { status: 500 });
    }
    const response = await result.response;
    const text = await response.text();

    console.log("✅ Gemini API Response:", text);

    // 7️⃣ Send AI reply to frontend
    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("❌ Error in /api/faq-ai route:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}