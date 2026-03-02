"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ASSET_BASE = "/figma/parallax-scroll";

export function ParallaxBackground() {
  const { scrollY } = useScroll();

  const triangleX = useTransform(scrollY, [0, 3000], [-300, -150]);
  const triangleScale = useTransform(scrollY, [0, 3000], [1, 0.75]);
  const triangleY = useTransform(scrollY, [0, 3000], [0, -100]);

  const ballY = useTransform(scrollY, [0, 1200], [0, 50]);
  const ballX = useTransform(scrollY, [0, 1200], [0, -400]);
  const ballOpacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 1]);
  const ballScale = useTransform(scrollY, [0, 1200], [1, 1.4]);

  const midBallY = useTransform(scrollY, [400, 1400], [200, -200]);
  const midBallOpacity = useTransform(scrollY, [300, 700, 1500], [0, 0.35, 0]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${ASSET_BASE}/group-20468-2014-4444.svg)`,
          backgroundRepeat: "repeat",
          backgroundSize: "140px 140px",
        }}
      />

      <motion.div
        style={{
          x: triangleX,
          y: triangleY,
          scale: triangleScale,
          position: "absolute",
          left: "0px",
          top: "80px",
          width: "669px",
          height: "669px",
          opacity: 1,
          zIndex: 0,
          transformOrigin: "left center",
        }}
        className="pointer-events-none"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            position: "relative",
          }}
        >
          <Image
            src={`${ASSET_BASE}/triangle.png`}
            alt=""
            fill
            sizes="669px"
            style={{
              objectFit: "cover",
              mixBlendMode: "screen",
              filter: "blur(4px)",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{
          y: ballY,
          x: ballX,
          scale: ballScale,
          opacity: ballOpacity,
          position: "absolute",
          right: "2%",
          top: "5%",
          width: "clamp(180px, 22vw, 340px)",
          height: "clamp(180px, 22vw, 340px)",
          zIndex: 0,
          transformOrigin: "top right",
        }}
        className="pointer-events-none"
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={`${ASSET_BASE}/main-ball.png`}
            alt=""
            fill
            sizes="(max-width: 768px) 180px, (max-width: 1200px) 22vw, 340px"
            priority
            style={{
              objectFit: "cover",
              mixBlendMode: "screen",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{
          y: midBallY,
          opacity: midBallOpacity,
          position: "absolute",
          right: "8%",
          top: "55%",
          width: "clamp(260px, 35vw, 520px)",
          height: "clamp(260px, 35vw, 520px)",
          zIndex: 0,
        }}
        className="pointer-events-none"
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={`${ASSET_BASE}/main-ball.png`}
            alt=""
            fill
            sizes="(max-width: 768px) 260px, (max-width: 1200px) 35vw, 520px"
            style={{
              objectFit: "cover",
              mixBlendMode: "screen",
              filter: "blur(60px)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
