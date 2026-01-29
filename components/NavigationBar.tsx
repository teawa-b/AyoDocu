"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Topic", icon: "✍️" },
    { href: "/script", label: "Script", icon: "📝" },
    { href: "/review", label: "Review", icon: "🎬" },
    { href: "/preview", label: "Preview", icon: "▶️" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--surface)] border-t border-[var(--border)] z-50">
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="flex justify-around">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all min-w-[60px] min-h-[44px] justify-center ${
                  isActive
                    ? "text-[var(--accent)] bg-[var(--accent)]/10"
                    : "text-[var(--muted)] hover:text-white"
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-xs font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
