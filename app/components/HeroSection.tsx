import Image from "next/image";
import { classes } from "@/lib/theme";
import { hero } from "@/lib/data";
import { IconArrowRight } from "./IconArrowRight";
import { MissionBlock } from "./MissionBlock";

export function HeroSection() {
  return (
    <section className={classes.hero}>
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          className={classes.imageCover}
          sizes="100vw"
          priority
        />
        <div className={classes.heroOverlay} />
      </div>
      <div className={classes.heroContent}>
        <span className={classes.heroTagline}>{hero.tagline}</span>
        <h1 className={classes.heroTitle}>{hero.title}</h1>
        <p className={classes.heroBody}>{hero.body}</p>
        <a href="#about" className={classes.heroCta}>
          {hero.ctaLabel}
          <span className={classes.heroCtaCircle}>
            <IconArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
      <div className="relative z-10 md:ml-auto md:mr-12 md:mb-24 px-4 pb-8 md:px-0 md:pb-0 md:block">
        <MissionBlock />
      </div>
    </section>
  );
}
