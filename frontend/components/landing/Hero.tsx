"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchStore } from "@/lib/search-store";
import Tilt from "react-parallax-tilt";
import ThemeToggle from "@/components/theme-toggle";

export default function Hero() {
const [mousePosition, setMousePosition] = useState({
x: 0,
y: 0,
});

const { setOpen } = useSearchStore();

const placeholders = [
"Search colleges...",
"Search AI & ML courses...",
"Search colleges in Chennai...",
"Compare engineering colleges...",
"Explore universities...",
];

const [placeholderIndex, setPlaceholderIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setPlaceholderIndex(
(prev) => (prev + 1) % placeholders.length
);
}, 2500);

return () => clearInterval(interval);


}, []);
return (
<section
onMouseMove={(e) =>
setMousePosition({
x: e.clientX,
y: e.clientY,
})
}
className="relative min-h-screen pt-10 bg-white dark:bg-slate-950"
>
    {/* Ambient Glow Layer */}

<motion.div
  animate={{
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
  }}
  className="absolute left-[-300px] top-[-200px] h-[900px] w-[900px] rounded-full bg-cyan-500/10 blur-[120px]"
/>

<motion.div
  animate={{
    scale: [1.1, 1, 1.1],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
  }}
  className="absolute right-[-300px] top-[100px] h-[900px] w-[900px] rounded-full bg-violet-500/10 blur-[120px]"
/>
{/* Mouse Spotlight */}

  <motion.div
    animate={{
      x: mousePosition.x - 250,
      y: mousePosition.y - 250,
    }}
    transition={{
      type: "spring",
      damping: 30,
      stiffness: 200,
    }}
    className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"
  />


  <div className="relative z-10 mx-auto max-w-7xl px-6">
    <div className="flex justify-end mb-6">
  <ThemeToggle />
</div>
    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* LEFT SIDE */}

      <div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur-xl">
            Built for students who think ahead
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-6xl font-black leading-tight tracking-tight md:text-7xl"
        >
          Choose Better.
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
            Build Bigger.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-xl text-xl leading-relaxed text-slate-600"
        >
          Search, compare and explore colleges through
          one unified platform designed to simplify
          decision making.
        </motion.p>

        {/* SEARCH */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10"
        >
          <button
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-start rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-2xl backdrop-blur-xl transition hover:shadow-3xl"
          >
            <Search className="mr-3 text-slate-400" />

            <span className="text-slate-500">
              {placeholders[placeholderIndex]}
            </span>

          </button>
        </motion.div>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <button className="rounded-xl bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700">
            Explore Colleges
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50">
            Compare Colleges
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="relative flex items-center justify-center"
      >

        <div className="relative h-[650px] w-[650px]">
            <motion.div
  animate={{
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_80px_rgba(59,130,246,0.8)]"
/>

<motion.div
  animate={{
    scale: [1, 2],
    opacity: [0.6, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="absolute left-1/2 top-1/2 z-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300"
/>
            <svg
  className="absolute inset-0 h-full w-full"
  viewBox="0 0 500 500"
>
  <motion.line
    x1="250"
    y1="90"
    x2="130"
    y2="230"
    stroke="#3B82F6"
    strokeWidth="2"
    strokeDasharray="10 10"
    animate={{
      strokeDashoffset: [20, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <motion.line
    x1="250"
    y1="90"
    x2="370"
    y2="230"
    stroke="#06B6D4"
    strokeWidth="2"
    strokeDasharray="10 10"
    animate={{
      strokeDashoffset: [20, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <motion.line
    x1="130"
    y1="270"
    x2="250"
    y2="420"
    stroke="#8B5CF6"
    strokeWidth="2"
    strokeDasharray="10 10"
    animate={{
      strokeDashoffset: [20, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <motion.line
    x1="370"
    y1="270"
    x2="250"
    y2="420"
    stroke="#2563EB"
    strokeWidth="2"
    strokeDasharray="10 10"
    animate={{
      strokeDashoffset: [20, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    }}
  />
</svg>

          {/* Search */}
            <Tilt
  tiltMaxAngleX={12}
  tiltMaxAngleY={12}
  glareEnable={true}
  glareMaxOpacity={0.15}
  scale={1.03}
>
          <motion.div
            whileHover={{
  y: -10,
  scale: 1.03,
  rotateX: 2,
  rotateY: 2,
}}
            className="group absolute left-1/2 top-[40px] z-30 w-[250px] h-[140px] -translate-x-1/2  rounded-3xl border border-white/30 bg-white/30 p-5 backdrop-blur-2xl shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
    🔍
  </div>

  <div>
    <h3 className="text-xl font-bold">
      Discover
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      Find colleges and courses tailored to your goals.
    </p>
  </div>
</div>
          </motion.div>
           </Tilt>
          {/* Compare */}
             <Tilt
  tiltMaxAngleX={12}
  tiltMaxAngleY={12}
  glareEnable={true}
  glareMaxOpacity={0.15}
  scale={1.03}
>
          <motion.div
           whileHover={{
  y: -10,
  scale: 1.03,
  rotateX: 2,
  rotateY: 2,
}}
            className="group absolute left-[20px] top-[260px] z-30 w-[250px] h-[140px]  rounded-3xl border border-white/30 bg-white/30 p-5 backdrop-blur-2xl shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

           <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
    ⚖️
  </div>

  <div>
    <h3 className="text-xl font-bold">
      Compare
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      Compare fees, placements and rankings.
    </p>
  </div>
</div>
          </motion.div>
            </Tilt>
          {/* Explore */}
            <Tilt
  tiltMaxAngleX={12}
  tiltMaxAngleY={12}
  glareEnable={true}
  glareMaxOpacity={0.15}
  scale={1.03}
>
          <motion.div
           whileHover={{
  y: -10,
  scale: 1.03,
  rotateX: 2,
  rotateY: 2,
}}
            className="group absolute right-[20px] top-[260px] z-30 w-[250px] h-[140px]  rounded-3xl border border-white/30 bg-white/30 p-5 backdrop-blur-2xl shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

           <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
    🧭
  </div>

  <div>
    <h3 className="text-xl font-bold">
      Explore
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      Discover insights and opportunities.
    </p>
  </div>
</div>
          </motion.div>
            </Tilt>
          {/* Decide */}
              <Tilt
  tiltMaxAngleX={12}
  tiltMaxAngleY={12}
  glareEnable={true}
  glareMaxOpacity={0.15}
  scale={1.03}
>
          <motion.div
           whileHover={{
  y: -10,
  scale: 1.03,
  rotateX: 2,
  rotateY: 2,
}}
            className="group absolute left-1/2 top-[500px] left-1/2 z-30 w-[250px] h-[140px] -translate-x-1/2  rounded-3xl border border-white/30 bg-white/30 p-5 backdrop-blur-2xl shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
    🎯
  </div>

  <div>
    <h3 className="text-xl font-bold">
      Decide
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      Make confident decisions for your future.
    </p>
  </div>
</div>
          </motion.div>
            </Tilt>
        </div>
      </motion.div>

    </div>
  </div>
</section>


);
}