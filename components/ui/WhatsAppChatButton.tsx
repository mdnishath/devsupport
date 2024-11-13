// app/components/WhatsAppChatButton.tsx
"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function WhatsAppChatButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="8801767591988"
      accountName="Nishath"
      statusMessage={"Typically replies within 5 Min"}
      darkMode={true}
      notification={true}
      avatar={"/dev2.webp"}
    />
  );
}
