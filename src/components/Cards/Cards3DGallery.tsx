import { animated, to as interpolate, useSprings } from "@react-spring/web";
import { useState } from "react";
import { useDrag } from "react-use-gesture";
import Photo1 from "../../assets/image/Photos/photo1.jpg";
import Photo2 from "../../assets/image/Photos/photo18.jpg";
import Photo3 from "../../assets/image/Photos/photo3.jpg";
import Photo4 from "../../assets/image/Photos/photo4.jpg";
import Photo5 from "../../assets/image/Photos/photo5.jpg";
import Photo6 from "../../assets/image/Photos/photo19.jpg";
import Photo7 from "../../assets/image/Photos/photo7.jpg";
import Photo8 from "../../assets/image/Photos/photo8.jpg";
import { ContainerWrapCards } from "../../styled-components/Container.styled";
import styles from "./css/card3DGallery.module.css";

const cards: string[] = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
];

const cardWidth = 0;
const cardSpacing = 0;
const maxX = 0;

type SpringProps = {
  x: number;
  y: number;
  rot: number;
  scale: number;
  delay?: number;
};

const to = (i: number): SpringProps => ({
  x: i * (cardWidth + cardSpacing),
  y: 0,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (): SpringProps => ({
  x: 0,
  rot: 0,
  scale: 1.5,
  y: -1000,
});

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState<Set<number>>(() => new Set());

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;

        const isGone = gone.has(index);
        let x = isGone ? maxX + (cardWidth + cardSpacing) * dir : down ? mx : 0;

        x = Math.min(
          Math.max(x, maxX - (cards.length - 1) * (cardWidth + cardSpacing)),
          maxX
        );

        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cards.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deckGallery} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              cursor: "pointer",
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
              backgroundSize: "cover",
            }}
          />
        </animated.div>
      ))}
    </>
  );
}

export default function Cards3D() {
  return (
    <ContainerWrapCards>
      <Deck />
    </ContainerWrapCards>
  );
}
