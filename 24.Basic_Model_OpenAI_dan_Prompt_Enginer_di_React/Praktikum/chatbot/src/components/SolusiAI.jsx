import React, { useState } from 'react';
import { generateResponse } from '../api/solusiAPI';
import { Link } from 'react-router-dom';

const SolusiAI = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [qaHistory, setQaHistory] = useState([]); // State untuk menyimpan riwayat Q&A

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await generateResponse(input);
      const formattedResponse = formatResponse(result); // Format respon sebelum ditampilkan
      const newQA = { question: input, answer: formattedResponse }; // Simpan pertanyaan dan jawaban baru

      setResponse(formattedResponse);
      setQaHistory([newQA, ...qaHistory]); // Tambahkan Q&A baru ke riwayat
      setInput(''); // Bersihkan input setelah submit
    } catch (error) {
      console.error('Error:', error);
      setResponse('Maaf, tidak dapat menampilkan pesan karena terjadi kesalahan.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk memformat respon menjadi list atau paragraf
  const formatResponse = (responseText) => {
    // Ubah teks "Solusi: " menjadi kosong dan buang tanda **, jika ada
    const cleanedText = responseText.replace(/\*\*Solusi:\*\*/g, '').replace(/\*\*/g, '');
    
    // Pecah menjadi array berdasarkan pola langkah-langkah, seperti "1. ", "2. ", dll.
    const splitText = cleanedText.split(/(?=\d+\.\s+)/g);
    
    // Jika hanya ada satu elemen, maka parsing awal tidak berhasil, maka coba pecah berdasarkan baris
    const formattedText = splitText.length > 1
      ? splitText.map((item, index) => <li key={index}>{item.trim()}</li>)
      : cleanedText.split('\n').map((line, index) => <p key={index}>{line.trim()}</p>);

    // Mengembalikan list terstruktur atau paragraf, tergantung hasil
    return (
      <div className="space-y-2">
        {splitText.length > 1 ? (
          <ol className="list-decimal list-inside">{formattedText}</ol>
        ) : (
          <div>{formattedText}</div>
        )}
      </div>
    );
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
        
        {/* Menampilkan Jawaban Terbaru */}
        {response && (
          <div className="mt-8 p-6 bg-gray-700 rounded-lg border border-gray-600">
            <h3 className="font-bold mb-4 text-xl text-blue-500">Solusi Anda:</h3>
            <div className="text-gray-300 text-lg leading-relaxed">{response}</div>
          </div>
        )}

        {/* Menampilkan Riwayat Q&A */}
        {qaHistory.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Riwayat Q&A:</h2>
            <ul className="space-y-4">
              {qaHistory.map((qa, index) => (
                <li key={index} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                  <p className="text-blue-400 font-semibold">Q: {qa.question}</p>
                  <p className="text-gray-300 mt-2">A: {qa.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

           {/* Link ke halaman resep */}
           <div className="mt-6 text-center">
          <Link to="/recipe-chat">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Tanyakan Resep Makanan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolusiAI;
