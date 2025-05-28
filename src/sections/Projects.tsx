import Image from "next/image";
import photo1 from "../../public/photo12.jpg";
import photo2 from "../../public/photo13.jpg";
import photo3 from "../../public/photo.jpg";
import photo4 from "../../public/photo15.jpg";
import photo5 from "../../public/photo14.jpg";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const bottomToTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ltrGifAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const rtlGifAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(00px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function Projects() {
  return (
    <section className="container" id="goals">
      <Fade>
        <h1 className="porj-h1">وبلاگ ها</h1>
      </Fade>
      <div className="group">
        <div className="box">
          <Image src={photo1} className="box-img" alt="#"></Image>
          <div className="disc-of-box">
            <Reveal keyframes={bottomToTopAnimation}>
              <p className="title">باید به توسعه روستاها توجه ویژه ای شود.</p>
              <span>
                &quot;روستاها نقش مهمی در تولید و امنیت غذایی کشور دارند&quot;،
                تاکید کرد: &quot;باید توجه ویژه‌ای به رفع مشکلات روستاها و توسعه
                آنها شود. من به عنوان نماینده شما در مجلس آینده اگر انتخاب شوم،
                وظیفه دارم که صدای شما را به گوش مسئولان برسانم و برای حل مشکلات
                شما تلاش کنم.&quot;
              </span>
            </Reveal>
          </div>
        </div>
        <div className="box">
          <div className="disc-of-box">
            <Reveal keyframes={bottomToTopAnimation}>
              <p className="title">
                حمایت از ورزش پایه میتواند نقش مهمی در تربیت نسل اینده داشته
                باشد.
              </p>
              <span>
                حمایت از ورزش، به ویژه ورزش پایه، از جمله وظایف مهم همه ارگان ها
                و سازمان های متولی است و باید در این زمینه تلاش شود تا
                استعدادهای ورزشی در استان شناسایی و پرورش یابند.
              </span>
            </Reveal>
          </div>
          <Image src={photo2} className="box-img" alt="#"></Image>
        </div>
        <div className="box">
          <Image src={photo5} className="box-img" alt="#"></Image>
          <div className="disc-of-box">
            <Reveal keyframes={bottomToTopAnimation}>
              <p className="title">
                حمایت از تولید داخلی،کلید رونق اقتصادی است.
              </p>
              <span>
                دکتر آجودان‌زاده در این بازدید، ضمن تقدیر از تلاش‌های مدیران و
                کارکنان کارخانه صنایع رنگ اطلس فام سهند، بر لزوم حمایت از تولید
                داخلی تاکید کرد و گفت: &quot;حمایت از تولید داخلی، کلید رونق
                اقتصادی کشور و ایجاد اشتغال برای جوانان است.&quot;
              </span>
            </Reveal>
          </div>
        </div>
        <div className="box">
          <div className="disc-of-box">
            <Reveal keyframes={bottomToTopAnimation}>
              <p className="title">
                وظیفه ی نماینده مجلس قانون گذاری برای مردم است،نه بر علیه مردم!
              </p>
              <span>
                ما نمایندگان موظفیم قوانینی وضع کنیم که زندگی مردم را بهتر کند،
                نه اینکه قوانینی وضع کنیم که زندگی آنها را سخت‌تر کند&quot;،
                تاکید کرد: &quot;من به عنوان نماینده آینده شما در مجلس شورای
                اسلامی، بر خودم وظیفه می‌دانم که با تمام توان برای تسهیل زندگی
                مردم از طریق وضع قوانین تسهیل‌گر و مخالفت با قوانین دست‌وپاگیر
                اقدام کنم&quot;
              </span>
            </Reveal>
          </div>
          <Image src={photo4} className="box-img" alt="#"></Image>
        </div>
      </div>
    </section>
  );
}

export default Projects;
