import Image from "next/image";
import { classes } from "@/lib/theme";
import { whyChooseUs } from "@/lib/data";
import { IconCheck } from "./IconCheck";
import { AnimateIn } from "./AnimateIn";

const whyImage = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80";

export function WhyChooseUs() {
  return (
    <section className={`${classes.sectionLight} ${classes.whySection}`}>
      <div className={classes.containerAbout}>
        <div className={classes.whyGrid}>
          <AnimateIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={whyImage} alt="Sustainable farming" fill className={classes.imageCover} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div>
              <h2 className={classes.whyTitle}>{whyChooseUs.title}</h2>
              <p className={classes.whySubtitle}>{whyChooseUs.subtitle}</p>
              <p className={classes.whyBody}>{whyChooseUs.body}</p>
              <ul className={classes.whyList}>
                {whyChooseUs.bullets.map((text, i) => (
                  <li key={text} className={classes.whyBullet}>
                    <span className={classes.whyBulletCircle}>
                      <IconCheck className="h-3.5 w-3.5 text-foreground" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
