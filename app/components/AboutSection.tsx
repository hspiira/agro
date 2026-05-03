import { classes } from "@/lib/theme";
import { about } from "@/lib/data";
import { FeatureCard } from "./FeatureCard";

export function AboutSection() {
  const { tabs, activeTabId, whoWeAre, featureCards } = about;

  return (
    <section className={classes.sectionLight}>
      <div className={classes.containerAbout}>
        <div className={classes.tabs}>
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={tab.id === activeTabId ? classes.tabActive : classes.tab}
            >
              {tab.label}
            </a>
          ))}
        </div>
        <div className={classes.whoWeAreGrid}>
          <div className={classes.whoWeAreLeft}>
            <p className={classes.subheading}>• {whoWeAre.subheading}</p>
          </div>
          <div className={classes.whoWeAreRight}>
            <h2 className={classes.contentTitle}>{whoWeAre.title}</h2>
            <p className={classes.contentBody}>{whoWeAre.body}</p>
            <a href={whoWeAre.ctaHref} className={classes.contentCta}>
              {whoWeAre.ctaLabel}
            </a>
          </div>
        </div>
        <div className={classes.cardsGrid}>
          {featureCards.map((card) => (
            <FeatureCard
              key={card.id}
              stat={"stat" in card ? card.stat : undefined}
              subtitle={"subtitle" in card ? card.subtitle : undefined}
              desc={"desc" in card ? card.desc : undefined}
              img={"img" in card ? card.img : undefined}
              imgAlt={"imgAlt" in card ? card.imgAlt : undefined}
              highlight={card.highlight ?? false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
