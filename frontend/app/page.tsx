import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Bento from "@/components/landing/Bento";
import AuthGuard from "@/components/AuthGuard";

export default function Home() {
  return (
    <AuthGuard>
      <Navbar />
      <Hero />
      <Bento />
    </AuthGuard>
  );
}