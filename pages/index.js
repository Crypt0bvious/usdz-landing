import React, { useState, useEffect } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const presaleDate = new Date('2025-04-01T00:00:00Z');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = presaleDate - now;
      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-glitch text-center p-10">
      <h1 className="text-4xl md:text-6xl text-red-500 mb-4">$USDZ.wtf</h1>
      <p className="text-lg text-yellow-300 mb-6">The most unstable stablecoin on Solana.</p>
      {timeLeft ? (
        <div className="text-xl mb-8">
          Presale launches in: <span className="text-green-400">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
        </div>
      ) : (
        <div className="text-xl text-red-400 mb-8">Presale is now LIVE</div>
      )}
      <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white uppercase">Connect Wallet</button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {[
          { name: 'Pepe Powell', quote: 'We have full control... unless we don’t.' },
          { name: 'Liquidation Larry', quote: 'Just one more x100 long, bro.' },
          { name: 'Rugpull Reaper', quote: 'I’m not saying it’s over, but… it’s over.' }
        ].map(({ name, quote }) => (
          <div key={name} className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-sm italic text-gray-300">“{quote}”</p>
          </div>
        ))}
      </div>
      <footer className="mt-16 text-gray-500 text-sm">
        <p>$USDZ is not financial advice. It’s financial chaos.</p>
        <p className="mt-1">© 2025 USDZ.wtf | Twitter • Discord • GitHub</p>
      </footer>
    </main>
  );
}