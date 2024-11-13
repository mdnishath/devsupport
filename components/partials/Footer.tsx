export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-6 bg-dark text-center text-gray-500 w-full">
      © {new Date().getFullYear()} Google Address Autocomplete. All rights
      reserved.
    </footer>
  );
}
