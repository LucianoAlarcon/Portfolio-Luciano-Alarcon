import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-[#1e2a38] text-xs text-muted tracking-widest">
      {siteConfig.footer}
    </footer>
  );
}
