import React, { useState } from 'react';
import { generateResponse } from '../api/recipeAPI';

const RecipeChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await generateResponse(input);

      // Proses respons menjadi objek terstruktur (misalnya, dengan kategori "title", "bahan", dan "langkah")
      const formattedResponse = parseResponse(result);
      setResponse(formattedResponse);

      setInput('');
    } catch (error) {
      console.error('Error:', error);
      setResponse({ title: 'Maaf, terjadi kesalahan dalam mendapatkan resep.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk memformat respons menjadi struktur yang lebih rapi
  const parseResponse = (response) => {
    const lines = response.split('\n');
    let formatted = { title: '', bahan: [], langkah: [] };
    let section = '';

    lines.forEach((line) => {
      // Pembersihan tanda bintang dan pembagian berdasarkan kategori
      line = line.trim();
      
      if (line.toLowerCase().includes('bahan')) {
        section = 'bahan';
      } else if (line.toLowerCase().includes('langkah')) {
        section = 'langkah';
      } else if (!formatted.title && line.trim()) {
        formatted.title = line.trim();
      } else if (section && line.trim()) {
        // Menghapus tanda bintang atau tanda lain dan memisahkannya ke dalam array
        if (line.startsWith('*') || line.startsWith('-')) {
          line = line.replace(/^[*-]\s*/, '');  // Menghapus bintang atau tanda minus
        }
        formatted[section].push(line.trim());
      }
    });

    return formatted;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-4">Tanyakan Resep Makanan</h1>
        <p className="text-center text-gray-300 mb-6">Silahkan ketikkan resep yang Anda cari.</p>

        <form onSubmit={handleSubmit} className="flex items-center mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan resep makanan..."
            className="flex-grow p-4 rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
          />
          <button
            type="submit"
            className="p-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-r-lg transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Mencari...' : 'Cari Resep'}
          </button>
        </form>

        {response.title && (
          <div className="mt-8 p-6 bg-gray-700 rounded-lg border border-gray-600">
            <h3 className="font-bold mb-4 text-xl text-green-400">{response.title}</h3>
            
            {response.bahan.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-lg text-green-300 mb-2">Bahan:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {response.bahan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {response.langkah.length > 0 && (
              <div>
                <h4 className="font-semibold text-lg text-green-300 mb-2">Langkah-langkah:</h4>
                <ul className="list-decimal list-inside space-y-1 text-gray-300">
                  {response.langkah.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeChat;
