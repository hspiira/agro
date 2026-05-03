import Image from "next/image";
import { classes } from "@/lib/theme";
import { IconArrowUpRight } from "./IconArrowUpRight";

type FeatureCardProps = {
  stat?: string;
  subtitle?: string;
  desc?: string;
  img?: string;
  imgAlt?: string;
  highlight?: boolean;
};

export function FeatureCard({ stat, subtitle, desc, img, imgAlt, highlight }: FeatureCardProps) {
  const isWordsCard = !!(stat || subtitle || desc);
  const isImageOnly = !!img && !isWordsCard;
  const cardClass = isImageOnly
    ? classes.cardImageOnly
    : highlight
      ? classes.cardHighlight
      : classes.card;
  const descClass = highlight ? classes.cardDescHighlight : classes.cardDesc;
  const circleClass = highlight ? classes.readMoreCircleHighlight : classes.readMoreCircle;

  return (
    <article className={`${cardClass} ${isWordsCard ? "pr-14" : ""}`}>
      {isWordsCard && (
        <a
          href="#"
          className={circleClass}
          aria-label="Read more"
        >
          <IconArrowUpRight className="h-5 w-5" />
        </a>
      )}
      {img && (
        <div className={isWordsCard ? classes.cardImageWithCaption : classes.cardImageFill}>
          <Image
            src={img}
            alt={imgAlt ?? ""}
            fill
            className={classes.imageCover}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      )}
      {stat && <p className={highlight ? classes.cardStatHighlight : classes.cardStat}>{stat}</p>}
      {subtitle && <h3 className={highlight ? classes.cardTitleHighlight : classes.cardTitle}>{subtitle}</h3>}
      {desc && <p className={descClass}>{desc}</p>}
    </article>
  );
}
