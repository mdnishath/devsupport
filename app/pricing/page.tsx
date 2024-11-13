"use client";
import Link from "next/link";
import React, { useRef } from "react";

const Pricing = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="max-w-4xl mx-auto p-6 z-50">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      {/* Smooth scrolling container for mobile view */}
      <div
        ref={scrollContainerRef}
        className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory smooth-scroll-container py-4"
      >
        {/* Free Plan */}
        <div className="min-w-[90%] md:min-w-0 border border-slate-600 rounded-lg p-6 shadow-lg text-center text-white bg-gray-800 snap-center">
          <h3 className="text-2xl font-semibold">Free</h3>
          <p className="text-gray-400 mt-2">Free forever</p>
          <p className="text-4xl font-bold mt-4">$0</p>
          <ul className="mt-4 space-y-2">
            <li>Google Address Autocomplete</li>
            <li>Basic support</li>
            <li>Basic documentation</li>
          </ul>
          <Link
            href="https://wordpress.org/plugins/autocomplete-google-address/"
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 inline-block"
          >
            Get Started
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="min-w-[90%] md:min-w-0 border border-slate-600 rounded-lg p-6 shadow-lg text-center bg-gradient-to-b from-blue-500 to-blue-600 text-white snap-center">
          <h3 className="text-2xl font-semibold">Pro</h3>
          <p className="text-white mt-2 opacity-80">single - unlimited site</p>
          <p className="text-4xl font-bold mt-4">$30-$50</p>
          <ul className="mt-4 space-y-2">
            <li>All Free features</li>
            <li>Priority support</li>
            <li>Advanced settings</li>
            <li>Detailed documentation</li>
          </ul>
          <Link
            href="https://wa.me/8801767591988?text=I'm%20interested%20in%20the%20Pro%20plan"
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 inline-block"
            target="_blank"
          >
            Buy Pro
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="min-w-[90%] md:min-w-0 border border-slate-600 rounded-lg p-6 shadow-lg text-center text-white bg-gray-800 snap-center">
          <h3 className="text-2xl font-semibold">Enterprise</h3>
          <p className="text-gray-400 mt-2">single - unlimited site</p>
          <p className="text-4xl font-bold mt-4">$199</p>
          <ul className="mt-4 space-y-2">
            <li>All Pro features</li>
            <li>24/7 dedicated support</li>
            <li>Custom integrations</li>
            <li>White-label options</li>
          </ul>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
