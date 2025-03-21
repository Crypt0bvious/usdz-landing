import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold glitch uppercase">$USDZ.wtf</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-xl">
          The Most Unstable Stablecoin on Solana.
        </p>
        <p className="text-yellow-400 mt-2 text-sm md:text-base">
          Random depegs. Negative APY. Bailouts. Chaos.
        </p>
        <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg uppercase shadow-md">
          Presale Coming Soon
        </button>
      </section>
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch the Chaos Unfold</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="$USDZ Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Meet the Degens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['Pepe Powell', 'Liquidation Larry', 'Rugpull Reaper'].map((name) => (
            <div key={name} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-sm text-gray-300">Click to reveal their chaotic lore soon.</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-10 px-6 bg-gray-900 text-center text-sm text-gray-500">
        <p>$USDZ is not financial advice. It’s financial chaos.</p>
        <p className="mt-2">© 2025 $USDZ.wtf | Twitter • Discord • GitHub</p>
      </footer>
    </main>
  );
}