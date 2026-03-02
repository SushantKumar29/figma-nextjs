"use client";

import { motion /*useTransform*/ } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import Image from "next/image";

const ASSET_BASE = "/figma/parallax-scroll";

export function Services() {
  // const blurBallX = useTransform(scrollY, [0, 1000], [-400, -400]);
  // const blurBallY = useTransform(scrollY, [0, 2000], [110, -1400]);
  // const blurBallScale = useTransform(scrollY, [0, 2000], [1, 1.5]);
  // const blurBallOpacity = useTransform(scrollY, [200, 700, 2000], [1, 1, 1]);
  return (
    <motion.section
      id="products"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      className="relative px-4 py-12 md:py-20"
    >
      <motion.div
        style={{
          position: "absolute",
          right: "10%",
          top: "5%",
          width: "clamp(500px, 40vw, 720px)",
          height: "clamp(500px, 40vw, 720px)",
          zIndex: 0,
          transformOrigin: "center center",
        }}
        className="pointer-events-none"
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={`${ASSET_BASE}/main-ball.png`}
            alt=""
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 40vw, 620px"
            style={{
              objectFit: "cover",
              mixBlendMode: "screen",
              filter: "blur(5px)",
            }}
          />
        </div>
      </motion.div>
      <div className="mx-auto max-w-full sm:max-w-8/10">
        <div className="max-w-155">
          <h2 className="text-[48px] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
            PRODUCT ENGINEERING
          </h2>

          <p className="mt-5 text-[18px] leading-[1.7] text-white/70">
            Discover the impact of bespoke digital solutions tailored precisely to your
            business&apos;s distinct requirements. Our experienced team of professionals ensures you
            receive outstanding results that consistently exceed your expectations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="MVP"
            description="We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch."
            cta="Talk to a Product Expert"
            tone="mvp"
          />

          <ServiceCard
            title="SaaS"
            description="Take your business to new heights with our all-inclusive SaaS development services, delivering seamless digital experiences tailored to your customers' needs."
            cta="Talk to a Product Expert"
            tone="saas"
          />

          <ServiceCard
            title="AI"
            description="We develop tailored AI solutions leveraging machine learning, NLP, and computer vision to automate and enhance decision-making."
            cta="Talk to a Product Expert"
            tone="ai"
          />

          <ServiceCard
            title="B2B & B2C Commerce Transformation"
            description="We elevate commerce platforms including Shopify, Magento, Prestashop, and WooCommerce to boost conversions and engagement."
            cta="Talk to an Ecommerce Expert"
            tone="commerce"
          />
        </div>
      </div>
    </motion.section>
  );
}
