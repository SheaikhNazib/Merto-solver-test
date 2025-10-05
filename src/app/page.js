import Image from "next/image";
import Hero from "../components/hero";
import OurServices from "@/components/OurServices";
import LatestWork from "@/components/LatestWork";
import WhyUs from "@/components/WhyUs";
import HowToWorks from "@/components/HowToWorks";
import WhatPeopleSay from "@/components/WhatPeopleSay";
import SuccessStory from "@/components/SuccessStory";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <LatestWork />
      <WhyUs />
      <HowToWorks />
      <WhatPeopleSay />
      <SuccessStory />
    </div>
  );
}
