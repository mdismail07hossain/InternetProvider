import React from "react";

export default function PricingGemRuby() {
  return (
    <>
      <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
        <h2 className="text-3xl font-bold leading-tight text-gray-500 sm:text-4xl xl:text-5xl mb-6 py-10">
          We Have some special Pakeage!
        </h2>
        <p className="mb-10">
          We are creating a tool that helps you be more productive and efficient
          when building websites and web apps.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        {/* Emerald Pricing Card */}
        <div className="relative max-w-sm mx-auto text-center bg-white rounded shadow-lg shadow-slate-20 group text-slate-500">
          <img
            src="https://Tailwindmix.b-cdn.net/pricing-tables/emerald.png"
            alt="emerald"
            className="absolute left-1/2 block w-32 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_16px_16px_#84cc1650] transition-transform duration-700 group-hover:-translate-y-2/3"
          />
          <div className="flex flex-col p-10">
            <header className="flex flex-col gap-6 p-6 pt-28 text-slate-400">
              <h3 className="text-xl font-medium uppercase text-emerald-500">
                Emerald
              </h3>
            </header>
            <div className="w-3 h-3 mx-auto rounded-full bg-emerald-500"></div>
            <div className="p-6">
              <ul className="space-y-4">
                <li>1 public project</li>
                <li>Public working space</li>
                <li>Unlimited pages</li>
                <li>5 revisions</li>
              </ul>
            </div>
            <footer>
              <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white bg-emerald-500 rounded shadow-xl hover:bg-emerald-600 focus:bg-emerald-700">
                <span>Start now</span> - <span>$05</span>
              </button>
            </footer>
          </div>
        </div>

        {/* Ruby Pricing Card */}
        <div className="relative max-w-sm mx-auto text-center bg-white rounded shadow-lg shadow-slate-20 group text-slate-500">
          <img
            src="https://Tailwindmix.b-cdn.net/pricing-tables/ruby.png"
            alt="ruby"
            className="absolute left-1/2 block w-32 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_16px_16px_#e73b3a40] transition-transform duration-700 group-hover:-translate-y-2/3"
          />
          <div className="flex flex-col p-10 ">
            <header className="flex flex-col gap-6 p-6 pt-28 text-slate-400">
              <h3 className="text-xl font-medium text-red-500 uppercase">
                Ruby
              </h3>
            </header>
            <div className="w-3 h-3 mx-auto bg-red-500 rounded-full"></div>
            <div className="p-6">
              <ul className="space-y-4">
                <li>4 public projects</li>
                <li>Private working space</li>
                <li>Unlimited pages</li>
                <li>10 revisions</li>
              </ul>
            </div>
            <footer>
              <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white bg-red-500 rounded shadow-xl hover:bg-red-600 focus:bg-red-700">
                <span>Start now</span> - <span>$10</span>
              </button>
            </footer>
          </div>
        </div>

        {/* Diamond Pricing Card */}
        <div className="relative max-w-sm mx-auto text-center bg-white rounded shadow-lg shadow-slate-20 group text-slate-500">
          <img
            src="https://Tailwindmix.b-cdn.net/pricing-tables/diamond.png"
            alt="diamond"
            className="absolute left-1/2 block w-32 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_16px_16px_#73e7ff6b] transition-transform duration-700 group-hover:-translate-y-2/3"
          />
          <div className="flex flex-col p-10">
            <header className="flex flex-col gap-6 p-6 pt-28 text-slate-400">
              <h3 className="text-xl font-medium uppercase text-cyan-500">
                Diamond
              </h3>
            </header>
            <div className="w-3 h-3 mx-auto rounded-full bg-cyan-500"></div>
            <div className="p-6">
              <ul className="space-y-4">
                <li>Unlimited projects</li>
                <li>Private working space</li>
                <li>Unlimited pages</li>
                <li>Unlimited revisions</li>
              </ul>
            </div>
            <footer>
              <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white bg-cyan-500 rounded shadow-xl hover:bg-cyan-600 focus:bg-cyan-700">
                <span>Start now</span> - <span>$15</span>
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
