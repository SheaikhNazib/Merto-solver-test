import Image from "next/image";
import Hero from "../components/hero";
import OurServices from "@/components/OurServices";
import LatestWork from "@/components/LatestWork";
import WhyUs from "@/components/WhyUs";
import HowToWorks from "@/components/HowToWorks";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <LatestWork />
      <WhyUs />
      <HowToWorks />
    </div>
  );
}
