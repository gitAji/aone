
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { question } = await req.json();

    // Access your API key as an environment variable
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'Google API Key not configured.' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

    const prompt = `You are an AI assistant for a digital agency. Answer the following questions concisely and professionally. If the question is about services, pricing, or general information about a digital agency, use your knowledge. If the question is outside this scope, politely state that you cannot answer.

Here are some example questions and how you should respond:
- What is SEO? Search Engine Optimization (SEO) is the process of improving the visibility and ranking of a website in search engine results pages (SERPs) to attract more organic traffic.
- What is an AI agent? An AI agent is an autonomous program that uses artificial intelligence to perform tasks or make decisions on behalf of a user or another program, often interacting with its environment.
- How can I implement AI into my business? Implementing AI into your business can involve automating tasks, analyzing data for insights, enhancing customer service with chatbots, personalizing user experiences, and optimizing operations. We can help you identify opportunities and develop custom AI solutions.
- How much does it cost to build a website, logo, flyers, etc.? The cost varies significantly based on complexity, features, and design requirements. We offer custom quotes after understanding your specific needs. Contact us for a detailed consultation.
- What is the cost of domain and hosting? Domain registration typically costs around $10-20 per year, while hosting fees can range from $5 to $50+ per month, depending on the type of hosting and resources required.

Now, answer the user's question:

Question: ${question}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error('Error in FAQ AI API:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
