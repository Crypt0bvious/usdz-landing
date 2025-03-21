import React, { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const launchDate = new Date('2025-04-01T00:00:00Z');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
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
    <main className="min-h-screen bg-black text-white p-6 font-glitch text-center">
      <h1 className="text-5xl text-red-500 mb-4 glitch">$USDZ.wtf</h1>
      <p className="text-xl mb-6 text-yellow-300">The Most Unstable Stablecoin on Solana</p>
      {timeLeft ? (
        <div className="text-2xl mb-10">
          Presale launches in:{" "}
          <span className="text-green-400">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </div>
      ) : (
        <div className="text-2xl text-red-400 mb-10">Presale is now LIVE</div>
      )}
      <button className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 shadow-md uppercase">
        Connect Wallet
      </button>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <footer className="mt-20 text-sm text-gray-400">
        <p>$USDZ is not financial advice. It’s financial chaos.</p>
        <p className="mt-1">© 2025 USDZ.wtf | Twitter • Discord • GitHub</p>
      </footer>
    </main>
  );
}