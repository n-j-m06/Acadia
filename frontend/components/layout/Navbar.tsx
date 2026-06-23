"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">
            ACADIA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Explore
          </Link>

          <Link
            href="#"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Institutions
          </Link>

          <Link
            href="#"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Insights
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
           <ThemeToggle />
          <button
            onClick={handleLogout}
            className="rounded-full bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}