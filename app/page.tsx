import Hero from "@/components/ui/Hero";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Google Address Autocomplete Plugin | Pro Plan for Enhanced UX",
  description:
    "Enhance your site with Google Address Autocomplete. Streamline address entry, improve accuracy, and provide a better user experience with our Pro Plan.",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
