"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function CollegePage() {
  const params = useParams();
  const router = useRouter();
  const [college, setCollege] = useState<any>(null);

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/colleges/${params.id}`
        );

        const data = await response.json();

        setCollege(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (params?.id) {
      fetchCollege();
    }
  }, [params]);

  if (!college) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-10">

  <button
    onClick={() => router.push("/")}
    className="mb-8 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50"
  >
    ← Back to Search
  </button>

    <h1 className="bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 bg-clip-text text-6xl font-black text-transparent">
        {college.name}
      </h1>

      <p className="mt-3 text-xl text-slate-500">
        {college.city}, {college.state}
      </p>
        <div className="mt-4 flex flex-wrap gap-3">

  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
    {college.stream || "Engineering"}
  </span>

  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
    Established {college.establishedYear || "N/A"}
  </span>

</div>
<div className="mt-6 flex gap-4">



</div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">

  <div className="rounded-2xl bg-white p-6 shadow-lg">
    <h3 className="text-sm text-slate-500">
      Stream
    </h3>
    <p className="mt-2 text-2xl font-bold">
      {college.stream || "Engineering"}
    </p>
  </div>

  <div className="rounded-2xl bg-white p-6 shadow-lg">
    <h3 className="text-sm text-slate-500">
      Category
    </h3>
    <p className="mt-2 text-2xl font-bold">
      {college.category || "Engineering College"}
    </p>
  </div>

  <div className="rounded-2xl bg-white p-6 shadow-lg">
    <h3 className="text-sm text-slate-500">
      Ownership
    </h3>
    <p className="mt-2 text-2xl font-bold">
      {college.ownership || "Private Institution"}
    </p>
  </div>

  <div className="rounded-2xl bg-white p-6 shadow-lg">
    <h3 className="text-sm text-slate-500">
      Established
    </h3>
    <p className="mt-2 text-2xl font-bold">
      {college.establishedYear || "N/A"}
    </p>
  </div>

  {college.naacGrade && (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h3 className="text-sm text-slate-500">
        NAAC Grade
      </h3>
      <p className="mt-2 text-2xl font-bold">
        {college.naacGrade}
      </p>
    </div>
  )}

  {college.nirfRank && (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h3 className="text-sm text-slate-500">
        NIRF Rank
      </h3>
      <p className="mt-2 text-2xl font-bold">
        #{college.nirfRank}
      </p>
    </div>
  )}

</div>
<div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

  <h2 className="text-3xl font-bold">
    About the Institution
  </h2>

 <p className="mt-4 leading-8 text-slate-600">

  {college.description ||

    `${college.name} is a higher education institution located in ${college.city}, ${college.state}. The college offers programs in ${college.stream || "Engineering"} and provides educational opportunities for students across India. Acadia helps students discover, compare and evaluate institutions like ${college.name} using a unified platform.`

  }

</p>

</div>
{college.website && (
  <div className="mt-8">

    <a
      href={college.website}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-blue-600 px-6 py-3 text-white"
    >
      Visit Official Website
    </a>

  </div>
)}

    </div>
  );
}
