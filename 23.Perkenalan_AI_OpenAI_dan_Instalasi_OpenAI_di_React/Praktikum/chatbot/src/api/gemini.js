import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyA_919zVWZmRCQ2cRvL16KMU9JpxbdZSyg');

export async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const harshPrompt = `respon dengan memberikan solusi : "${prompt}"`;
    const result = await model.generateContent(harshPrompt);
    return result.response.text();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while processing your request.');
  }
}