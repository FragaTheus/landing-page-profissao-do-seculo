"use client";

import icon from "@/assets/benfits-icon.svg";
import Image from "next/image";
import content from "@/content/benfitsContent.json";
import { BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "@/app/css/swiper.css";

export default function BenefitsMainCard() {
  const benefits = content?.benefits?.card3?.benefits ?? [];

  return (
    <div className="w-full rounded-sm bg-surface grid grid-cols-1 md:grid-cols-2">
      <div className="py-4">
        <Image
          src={icon}
          alt="Ebook"
          className="w-8/12 m-auto"
          loading="lazy"
        />
      </div>

      <div className="p-5 md:p-10 flex flex-col gap-2">
        <BookOpen className="text-secondary size-15 md:size-20" />
        <h4 className="font-semibold">{content.benefits.card3.title}</h4>

        <div className="flex-1">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            touchRatio={1}
            simulateTouch={true}
          >
            {benefits.map((b, i) => (
              <SwiperSlide key={i}>
                <p className="text-start">{b}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
