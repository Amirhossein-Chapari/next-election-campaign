import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   const transformSelected = () => {
  //     const underline = document.querySelector<HTMLElement>(".underline");
  //     underline!.style.top = `${selected * 2.5}rem`;
  //   };
  //   transformSelected();
  // }, [selected]);

  const expereinces = [
    {
      name: "پزشکی",
      role: "Full Stack Developer",
      url: "https://www.rapidops.com",
      start: "January 2021",
      end: "Present",
      shortDescription: [
        "پزشک پایش سلامت جانبازان ویژه(شیمیایی،قطع نخاع)استان آذربایجان شرقی",
        "مدیر کلینیک های تخصصی و فوق تخصصی دانشگاه علوم پزشکی استان آذربایجان شرقی",
        "عضو اصلی هیئت مدیره و خزانه دار مجمع خیرین سلامت استان",
        "مسئول تجهیزات پزشکی و رابط درمان دانشکده پزشکی",
        "کارشناس ارشد دفترEDO(توسعه آموزش پزشکی) دانشکده پزشکی تبریز",
        "رابط سلامت دانشکده پزشکی و مرکز بهداشت استان",
        "عضو هیئت مدیره و موسس خیرین سلامت و آموزش نوبنیاد تبریز",
        "عضو هیئت رئیسه سبک کیک بوکسینگ بین المللی استان",
        "عضوشورای سیاستگذاری نمازجمعه استان",
        "مجری طرح کارت سلامت وپرونده الکترونیکی وپذیرش آنلاین بزرگترین مرکزجامع تخصصی وفوق تخصصی شمالغرب کشور(شیخ الرئیس)",
        "عضواصلی شورای بسیج جامعه پزشکی سپاه عاشورا و عضو تیمهای اضطراری خدمات رسانی داوطلبانه و رایگان به مناطق محروم",
        "مسئول فنی کلینیکهای تخصصی فجر ۱ و ۲ وابسته به بنیادشهید و امورایثارگران استان",
        "عضوهیئت امناء انجمن خیریه حمایت ازبیماران سرطانی پژواک طاهر",
        "معاونت اداری و مالی دانشکده پرستاری ومامایی تبریز‎",
      ],
    },

  ];
  return (
    <motion.div
      id="experience"
      className="experience"
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
        <h2 id="h2-exp">سوابق و فعالیت ها :</h2>
      </div>
      <div className="section">
        <div className="container">
          {expereinces[selected].shortDescription.map(
            (description, index) => (
              <li key={index} className="exp-details-list-item">
                {description}
              </li>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
