import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyA_919zVWZmRCQ2cRvL16KMU9JpxbdZSyg');

export async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const recipePrompt = `respon dengan memberikan resep : "${prompt}"`;
    const result = await model.generateContent(recipePrompt);
    return result.response.text();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while processing your request.');
  }
}