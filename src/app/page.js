import Image from "next/image";
import Hero from "../components/hero";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
    </div>
  );
}
