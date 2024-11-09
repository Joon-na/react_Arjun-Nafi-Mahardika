import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAAALFu1cqqjhrAzcmsgGvFLvTPo72Oytk');

export async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const solutionPrompt = `respon dengan memberikan solusi : "${prompt}"`;
    const result = await model.generateContent(solutionPrompt);
    return result.response.text();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred while processing your request.');
  }
}