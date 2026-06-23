"use client";

import { motion } from "framer-motion";
import {
  GitCompare,
  Trophy,
  MessageSquare,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function Bento() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">

      {/* Heading */}

      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black md:text-6xl"
        >
          Everything.
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
            One Platform.
          </span>
        </motion.h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Everything you need to discover, compare and evaluate colleges
          in one intelligent ecosystem.
        </p>
      </div>

      {/* GRID */}

      <div className="grid auto-rows-[180px] gap-5 md:grid-cols-3">

        {/* COMPARE */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group relative md:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 p-6 backdrop-blur-xl shadow-lg transition-all"
        >
          <GitCompare className="mb-4 h-8 w-8 text-blue-500" />

          <h3 className="text-2xl font-bold">
            College Discovery
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Search and explore colleges across India.
          </p>

        </motion.div>

        {/* RANKINGS */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 p-6 backdrop-blur-xl shadow-lg"
        >
          <Trophy className="mb-4 h-8 w-8 text-yellow-500" />

          <h3 className="text-2xl font-bold">
            Institution Profiles
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
           View detailed information about colleges.
          </p>

        </motion.div>

        {/* REVIEWS */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group md:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 p-6 backdrop-blur-xl shadow-lg"
        >
          <MessageSquare className="mb-4 h-8 w-8 text-violet-500" />

          <h3 className="text-2xl font-bold">
           Smart Search
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
           Quickly find colleges by name and location.
          </p>

        </motion.div>

        {/* PLACEMENTS */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 p-6 backdrop-blur-xl shadow-lg"
        >
          <Briefcase className="mb-4 h-8 w-8 text-cyan-500" />

          <h3 className="text-2xl font-bold">
           Location Insights
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Explore institutions across different states.
          </p>

        </motion.div>

        {/* SCHOLARSHIPS */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group md:col-span-3 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 p-6 backdrop-blur-xl shadow-lg"
        >
          <GraduationCap className="mb-4 h-8 w-8 text-green-500" />

          <h3 className="text-2xl font-bold">
            Unified Platform
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Access college information in one place.
          </p>

        </motion.div>

      </div>
    </section>
  );
}