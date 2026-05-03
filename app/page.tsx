import { classes } from "@/lib/theme";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsStrip } from "./components/StatsStrip";
import { AboutSection } from "./components/AboutSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { StayConnected } from "./components/StayConnected";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className={classes.page}>
      <Header />
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <WhyChooseUs />
      <StayConnected />
      <Footer />
    </div>
  );
}
