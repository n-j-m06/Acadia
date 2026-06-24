"use client";
import { useRouter } from "next/navigation";
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
const router = useRouter();
const placeholders = [
"Search colleges...",
"Search AI & ML courses...",
"Search colleges in Chennai...",
"Compare engineering colleges...",
"Explore universities...",
];

const [placeholderIndex, setPlaceholderIndex] = useState(0);
const [search, setSearch] = useState("");
const [selectedCollege, setSelectedCollege] = useState<any>(null);
const [results, setResults] = useState<any[]>([]);

useEffect(() => {
const interval = setInterval(() => {
setPlaceholderIndex(
(prev) => (prev + 1) % placeholders.length
);
}, 2500);

return () => clearInterval(interval);


}, []);
useEffect(() => {
  const fetchColleges = async () => {
    if (!search.trim()) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(
        `https://acadia-backend-e5ek.onrender.com/api/colleges/search?q=${search}`
      );

      const data = await response.json();

      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const timeout = setTimeout(fetchColleges, 300);

  return () => clearTimeout(timeout);
}, [search]);
return (
<section
onMouseMove={(e) =>
setMousePosition({
x: e.clientX,
y: e.clientY,
})
}
className="relative min-h-[70vh] bg-white dark:bg-slate-950"
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
  className="pointer-events-none absolute left-[-300px] top-[-200px] h-[900px] w-[900px] rounded-full bg-cyan-500/10 blur-[120px]"
/>

<motion.div
  animate={{
    scale: [1.1, 1, 1.1],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
  }}
  className="pointer-events-none absolute right-[-300px] top-[100px] h-[900px] w-[900px] rounded-full bg-violet-500/10 blur-[120px]"
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


 <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
    <div className="flex justify-end mb-6">
</div>
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

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
         className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
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
         className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
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
        <div className="relative max-w-[720px]">

  <div className="flex w-full items-center rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-2xl backdrop-blur-xl">

    <Search className="mr-3 text-slate-400" />

    <input
      type="text"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      placeholder={
        placeholders[placeholderIndex]
      }
      className="w-full bg-transparent outline-none"
    />

  </div>

  {results.length > 0 && (
  <div className=" pointer-events-none absolute z-50 mt-2 max-h-43 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl backdrop-blur-xl">

      {results.map((college) => (
      <div
  key={college.id}
  onClick={() => {
    setSearch(college.name);
    setSelectedCollege(college);
    setResults([]);
  }}
  className="cursor-pointer border-b px-4 py-3 hover:bg-slate-50"
>
          <h3 className="text-sm font-semibold">
            {college.name}
          </h3>
          <p className="text-xs text-slate-500">
            {college.city}, {college.state}
          </p>
        </div>
      ))}

    </div>
  )}

</div>


        </motion.div>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
         <button
  onClick={() => {
    if (!selectedCollege) {
      alert("Please select a college first");
      return;
    }

    router.push(
      `/college/${selectedCollege.id}`
    );
  }}
  className="rounded-xl bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg transition hover:-translate-y-1"
>
  Explore Colleges
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

      <div className="relative hidden h-[650px] w-[650px] lg:block">
            <motion.div
  animate={{
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_80px_rgba(59,130,246,0.8)]"
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
  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300"
/>
            <svg
  className="pointer-events-none absolute inset-0 h-full w-full"
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
    🔍
  </div>

  <div>
    <h3 className="text-xl font-bold">
     Search
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

           <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
    ⚖️
  </div>

  <div>
    <h3 className="text-xl font-bold">
      Profiles
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      View institution details
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

           <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
    🧭
  </div>

  <div>
    <h3 className="text-xl font-bold">
      Insights
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      Explore college information
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex gap-4">
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
    🎯
  </div>

  <div>
    <h3 className="text-xl font-bold">
      Choose
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      Make informed decisions.
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