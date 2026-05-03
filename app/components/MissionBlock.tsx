import { classes } from "@/lib/theme";
import { hero } from "@/lib/data";
import { IconArrowRight } from "./IconArrowRight";

export function MissionBlock() {
  const { mission } = hero;
  return (
    <div className={classes.missionBox}>
      <p className={classes.missionTitle}>• {mission.title}</p>
      <p className={classes.missionBody}>{mission.body}</p>
      <a href={mission.href} className={classes.missionLink}>
        {mission.linkLabel}
        <IconArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
