import Footer from "@/components/Footer";
import {
  Agents,
  Benefits,
  Blog,
  Contact,
  Explore,
  Hero,
  Properties,
  Testimonial,
} from "@/components/HomeComp";

export default function Home() {
  return (
    <div>
      <Hero />
      <Explore />
      <Benefits />
      <Properties />
      <Agents />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
