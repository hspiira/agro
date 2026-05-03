import Image from "next/image";
import { classes } from "@/lib/theme";
import { stayConnected } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

export function StayConnected() {
  return (
    <section className={`${classes.sectionLight} ${classes.eventsSection}`}>
      <div className={classes.containerAbout}>
        <AnimateIn>
          <h2 className={classes.eventsTitle}>{stayConnected.title}</h2>
          <p className={classes.eventsSubtitle}>{stayConnected.subtitle}</p>
        </AnimateIn>
        <div className={classes.eventsGrid}>
          {stayConnected.cards.map((card, i) => (
            <AnimateIn key={card.id} delay={i * 100}>
              <a href="#" className={classes.eventCard}>
                <div className={classes.eventCardImage}>
                  <Image src={card.img} alt={card.imgAlt} fill className={classes.imageCover} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className={classes.eventCardBody}>
                  <h3 className={classes.eventCardTitle}>{card.title}</h3>
                  <p className={classes.eventCardMeta}>{card.date}</p>
                  <p className={classes.eventCardDesc}>{card.desc}</p>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
