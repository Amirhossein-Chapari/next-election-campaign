import Image from "next/image";
import MainPhoto from "../../public/photo8.jpg"
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>بیوگرافی دکتر علی آجودان زاده</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            {/* متولد ۱۳۵۵ میاندوآب
            <br />
            فارغ التحصیل رشته دکترای پزشکی - مدیریت سلامت
            <br />
            فرزند شهید سردار سیف اله آجودان زاده
            <br />
            عضو شورای سیاست گذازی نماز جمعه ی استان اذربایجان شرقی
            <br />
            مدیرعامل موسسه خیزیه مراکز آموزشی،درملنی و تحقیقاتی امام رضا(ع)تبریز
            <br />
            مدیرعامل امور خیرین،موسسه ی خیریه بیمارستانی ومشارکتهای مردمی دانشگاه علوم پزشکی تبریز
            <br />
            مسئول تجهیزات پزشکی و رابط درمان دانشگاه پزشکی تبریز */}
            علی آجودان زاده، متولید سال 1355، فارغ‌التحصیل رشته دکترای پزشکی مدیریت سلامت است.
            وی سال ها پزشک پایش سلامت جانبازان ویژه (شیمیایی، قطع نخاع) استان آذربایجان شرقی و مدیر کلینیک‌های تخصصی و فوق تخصصی دانشگاه علوم پزشکی در همین استان بوده و همچنین مسئول تجهیزات پزشکی و رابط درمان دانشکده پزشکی تبریز بود است.
            دکتر آجودان زاده علاوه بر این، عضو هیئت مدیره و مؤسس مجمع خیرین سلامت و آموزش نو بنیاد تبریز است.
            وی همچنین عضو اصلی هیئت مدیره و خزانه دار مجمع خیرین سلامت استان آذربایجان شرقی می باشد.
            در دوره پنجم شورای اسلامی شهر تبریز، با اعتماد و اقبال مردم، وارد پارلمان شهری تبریز شد و در طول 4 سال حضور در این نهاد مدنی، منشاء خدمات و تحولات بسیاری در حوزه مدیریت شهری و تصمیمات مهم شورایی بود.
          </p>


        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={MainPhoto} alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
