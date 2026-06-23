"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({
x: 0,
y: 0,
});


  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const endpoint = isLogin
        ? "https://acadia-backend-e5ek.onrender.com/api/auth/login"
        : "https://acadia-backend-e5ek.onrender.com/api/auth/register";

      const body = isLogin
        ? { email, password }
        : { name, email, password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      if (!isLogin) {
        const loginResponse = await fetch(
          "https://acadia-backend-e5ek.onrender.com/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        const loginData =
          await loginResponse.json();

        localStorage.setItem(
          "token",
          loginData.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(loginData.user)
        );

        router.push("/");
        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      router.push("/");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
  onMouseMove={(e) =>
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
  className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050A14] px-4"
>
{/* Cursor Aurora */}
<motion.div
  animate={{
    x: mousePosition.x - 400,
    y: mousePosition.y - 400,
  }}
  transition={{
    type: "spring",
    stiffness: 80,
    damping: 20,
  }}
  className="
    pointer-events-none
    absolute
    h-[800px]
    w-[800px]
    rounded-full
    bg-gradient-to-r
    from-lime-300/20
    via-yellow-200/15
    to-emerald-300/20
    blur-[180px]
  "
/>

{/* Aurora Ribbon Left */}
<motion.div
  animate={{
    x: [0, 100, 0],
    rotate: [0, 8, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-[-20%]
    bottom-[-10%]
    h-[600px]
    w-[900px]
    rounded-full
    bg-gradient-to-r
    from-lime-300/20
    via-yellow-200/15
    to-transparent
    blur-[120px]
  "
/>

{/* Aurora Ribbon Right */}
<motion.div
  animate={{
    x: [0, -100, 0],
    rotate: [0, -8, 0],
  }}
  transition={{
    duration: 24,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    right-[-20%]
    top-[-10%]
    h-[700px]
    w-[1000px]
    rounded-full
    bg-gradient-to-l
    from-lime-300/20
    via-yellow-200/15
    to-transparent
    blur-[140px]
  "
/>   



      
      {/* Glass Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="relative z-10 w-full max-w-lg rounded-[40px] border border-lime-200/10 bg-white/20 p-10 backdrop-blur-2xl 
"
      >

     <h1 className="mb-3 flex justify-center text-6xl font-black">

  {"ACADIA".split("").map((letter, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
  opacity: [0, 1, 1],
  y: [40, 0, 0],
}}
transition={{
  delay: index * 0.12,
  duration: 0.8,
  repeat: Infinity,
  repeatDelay: 6,
}}
      className="
        bg-gradient-to-r
        from-amber-50
        via-lime-100
        to-emerald-100
        bg-clip-text
        text-transparent
      "
    >
      {letter}
    </motion.span>
  ))}

</h1>

        <p className="mb-8 text-center text-slate-300">
          Choose Better. Build Bigger.
        </p>

        {/* Toggle */}
        <div className="relative mb-8 flex rounded-2xl bg-white/10 p-1">

          <motion.div
            animate={{
              x: isLogin ? 0 : "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-xl bg-gradient-to-r from-lime-200 to-amber-100
"
          />

         <button
  onClick={() => setIsLogin(true)}
  className={`relative z-10 flex-1 py-3 font-medium transition ${
    isLogin
      ? "text-slate-900"
      : "text-white"
  }`}
>
            Sign In
          </button>

          <button
  onClick={() => setIsLogin(false)}
  className={`relative z-10 flex-1 py-3 font-medium transition ${
    !isLogin
      ? "text-slate-900"
      : "text-white"
  }`}
>
            Create Account
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-lime-200/10 bg-white/20 p-4 text-white placeholder:text-slate-400 focus:outline-none"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-lime-200/10 bg-white/20 p-4 text-white placeholder:text-slate-400 focus:outline-none"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-lime-200/10 bg-white/20 p-4 text-white placeholder:text-slate-400 focus:outline-none"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
           className="w-full rounded-2xl bg-gradient-to-r from-lime-200 to-amber-100 p-4 font-semibold text-slate-900 transition hover:scale-[1.02]">
            {loading
              ? "Please wait..."
              : isLogin
              ? "Sign In"
              : "Create Account"}
          </button>

        </form>

      </motion.div>

    </div>
  );
}

