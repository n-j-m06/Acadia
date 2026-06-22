"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="min-h-screen p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome {user?.name || "User"} 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Acadia Dashboard
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-500 px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}