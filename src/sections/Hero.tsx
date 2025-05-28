import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="header-bg-main">
      
      <div className="hero">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          صفحه ی رسمی
        </motion.h1>
        <motion.h2
          className="hero-title-large"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.75,
          }}
        >
          دکترعلی آجودان زاده
        </motion.h2>
        <motion.h3
          className="hero-title-large hero-title-sub"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.05,
          }}
        >
         کاندیدای دوازدهمین دوره انتخابات مجلس شورای اسلامی
        </motion.h3>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.35,
          }}
        >
          {/* <p>مدیرکل امور خیرین ،موسسات خیریه بیمارستانی
            ومشارکتهای مردمی دانشگاه علوم پزشکی تبریز
            ‎مدیر عامل موسسه خیریه مرکزآموزشی، درمانی و تحقیقاتی امام رضا(ع)</p> */}
          <Link href="https://rapidops.com" target="_blank" className="link">
          </Link>
        </motion.p>
        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.65,
          }}
        >
          {/* <Button
            text="Check out my course"
            link="https://youtube.com/kishansheth21"
          /> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
