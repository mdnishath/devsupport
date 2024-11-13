"use client";

import Link from "next/link";
import ActiveLink from "../ui/ActiveLink";

export default function CenteredHeader() {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-8 py-3 rounded-full bg-gray-800 bg-opacity-90 shadow-lg backdrop-blur-md border border-slate-600">
      <ul className="flex gap-8 text-sm text-white">
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/features">Features</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/pricing">Pricing</ActiveLink>
        </li>
        <li>
          <Link
            href="https://wa.me/8801767591988?text=I'm%20interested%20in%20the%20Pro%20plan"
            className="hover:text-blue-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
