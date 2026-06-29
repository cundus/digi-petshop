import { PawPrint } from "lucide-react";
import { SITE } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft">
        <PawPrint className="h-5 w-5" />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-foreground">
        {SITE.name}
      </span>
    </div>
  );
}
