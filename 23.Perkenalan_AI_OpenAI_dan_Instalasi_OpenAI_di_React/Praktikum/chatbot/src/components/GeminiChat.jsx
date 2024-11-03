import React, { useState } from 'react';
import { generateResponse } from '../api/gemini';

const GeminiChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await generateResponse(input);
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Maaf, tidak dapat menampilkan pesan karena terjadi kesalahan.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 w-full max-w-2xl border border-gray-700">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-700">Solusi AI</h1>
        <p className="text-center text-gray-400 mb-8">Silahkan ketikkan masalah anda saat ini</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan masalah anda di sini..."
              className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Mencari...' : 'Submit'}
            </button>
          </div>
        </form>
        {response && (
          <div className="mt-8 p-6 bg-gray-700 rounded-lg border border-gray-600">
            <h3 className="font-bold mb-4 text-xl text-blue-500">Solusi Anda:</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiChat;