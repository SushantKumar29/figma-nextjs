"use client";

import Image from "next/image";
import { useMemo } from "react";

const ASSET_BASE = "/figma/parallax-scroll";

export function ClientsStrip() {
  const logos = useMemo(
    () => [
      `${ASSET_BASE}/frame-34991-2014-4519.svg`,
      `${ASSET_BASE}/frame-34991-2014-4523.svg`,
      `${ASSET_BASE}/frame-34992-2014-4526.svg`,
      `${ASSET_BASE}/frame-34991-2014-4529.svg`,
      `${ASSET_BASE}/frame-34991-2014-4532.svg`,
      `${ASSET_BASE}/frame-34991-2014-4535.svg`,
      `${ASSET_BASE}/frame-34993-2014-4538.svg`,
    ],
    []
  );

  return (
    <section className="w-full px-4 py-11 my-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="h-px w-full bg-white/10" />

        <div className="flex md:justify-between items-center gap-8 md:gap-4.5 py-16 overflow-x-auto md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {logos.map((src, i) => (
            <div key={src} className="relative h-12 w-auto aspect-3/1 shrink-0">
              <Image
                src={src}
                alt={`Client logo ${i + 1}`}
                width={0}
                height={0}
                sizes="(max-width: 768px) 80px, 128px"
                className="object-contain"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-white/10" />
      </div>
    </section>
  );
}
