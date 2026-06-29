import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-soft transition-transform hover:scale-105 sm:px-5"
    >
      <span className="relative grid h-6 w-6 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp-foreground/40" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Chat Kami</span>
    </a>
  );
}
