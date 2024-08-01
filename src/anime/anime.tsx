import anime from "animejs/lib/anime.es.js";

import { AnimeWrapper } from "./anime.style";
import { useEffect } from "react";

const Anime = () => {
  useEffect(() => {
    anime({
      targets: ".poly",
      d: [
        {
          value:
          "M 3.2 0.1 L 3.2 0.6 L 3.1 0.7 L 3 1.2 C 3 1.2 2.7 1.2 3 1.5 L 2.9 4.3 C 2.7 4.4 2.7 4.5 2.5 5 C 2.5 5 2.6 5.8 2.5 6.3 C 2.5 6.3 2.1667 6.7667 2 8.5 L 2 8.5 C 2 8.5 1.8 9 1.4 10.4 T 1.3 10.2 C 1.4 10.2 0 6 0 5 C 0 5 1 4 1.6 1.2 C 1.6 1.2 1.7 1.3 1.8 1.2 L 1.9 0.5 L 2.2 0.5 C 2.2 0.5 2.55 0.65 2.7 0.5 L 3 0 C 3 0 3 0 3.1 0 L 3.2 0.1",
        },
      ],
      scale:50,
      duration: 4000,
      loop: false,
      easing: "linear",
      delay: 300,
      endDelay: 500,
    });
  }, []);
  return (
    <AnimeWrapper>
      <svg width="100%" height="100%" viewBox={`0 0 ${window.innerHeight} ${window.innerWidth}`}>
        <path
          className="poly"
          d={`M 0 0 L ${window.innerWidth} 0 L ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} T ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} C ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} ${window.innerWidth} ${window.innerHeight} L 0 ${window.innerHeight}`}
        />
      </svg>
    </AnimeWrapper>
  );
};
export default Anime;
