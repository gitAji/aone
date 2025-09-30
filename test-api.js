
require('dotenv').config({ path: '.env.local' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function run() {
  // Access your API key as an environment variable
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_API_KEY environment variable not set.");
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const models = await genAI.listModels();
    console.log(models);
  } catch (error) {
    console.error("API call failed:", error);
  }
}

run();
