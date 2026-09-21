import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
// import Test from "@/components/Test";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Test /> */}
    </main>
  );
}