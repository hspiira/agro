import { classes } from "@/lib/theme";
import { statsStrip } from "@/lib/data";
import { AnimateIn } from "./AnimateIn";

export function StatsStrip() {
  return (
    <section className={classes.sectionLight}>
      <div className={classes.containerAbout}>
        <div className={classes.statsStrip}>
          {statsStrip.items.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 80}>
              <div className={classes.statItem}>
                <p className={classes.statValue}>{item.value}</p>
                <p className={classes.statLabel}>{item.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
