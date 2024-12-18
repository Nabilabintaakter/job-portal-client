import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineCode, AiOutlineLineChart } from "react-icons/ai";
import { FiPenTool, FiUsers } from "react-icons/fi";
import { MdOutlineCampaign } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { FaRegMoneyBillAlt } from "react-icons/fa";


const categories = [
    {
        id: 1,
        title: "Web Development",
        description: "Jobs for Frontend, Backend, and Full-Stack Developers.",
        icon: <AiOutlineCode />,
        jobs_available: 1200,
    },
    {
        id: 2,
        title: "Graphic Design",
        description: "Opportunities for UI/UX Designers, Illustrators, and more.",
        icon: <FiPenTool />,
        jobs_available: 850,
    },
    {
        id: 3,
        title: "Digital Marketing",
        description: "Roles in SEO, Social Media, and Content Marketing.",
        icon: <MdOutlineCampaign />,
        jobs_available: 950,
    },
    {
        id: 4,
        title: "Data Science",
        description: "Jobs for Data Analysts, Data Scientists, and AI/ML Engineers.",
        icon: <AiOutlineLineChart />,
        jobs_available: 780,
    },
    {
        id: 5,
        title: "Cyber Security",
        description: "Roles for Cybersecurity Analysts, Network Security, and Ethical Hacking.",
        icon: <RiShieldKeyholeLine />,
        jobs_available: 600,
    },
    {
        id: 6,
        title: "Content Writing",
        description: "Freelance and full-time opportunities for writers and editors.",
        icon: <BsPencilSquare />,
        jobs_available: 500,
    },
    {
        id: 7,
        title: "Mobile App Development",
        description: "Jobs for Android, iOS, and Flutter developers.",
        icon: <IoPhonePortraitOutline />,
        jobs_available: 1100,
    },
    {
        id: 8,
        title: "Customer Support",
        description: "Opportunities for chat, call, and email support roles.",
        icon: <HiOutlineSupport />,
        jobs_available: 1500,
    },
    {
        id: 9,
        title: "Finance & Accounting",
        description: "Roles for Accountants, Financial Analysts, and Bookkeepers.",
        icon: <FaRegMoneyBillAlt />,
        jobs_available: 680,
    },
    {
        id: 10,
        title: "Human Resource Management",
        description: "Jobs in HR management, recruiting, and payroll.",
        icon: <FiUsers />,
        jobs_available: 750,
    },
];


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Categories() {
    return (
<div className="relative w-full">
    {/* Swiper */}
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      breakpoints={{
        375: {slidesPerView: 1, spaceBetween: 20},
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1440: { slidesPerView: 5, spaceBetween: 20 }
      }}
      modules={[Navigation]}
    >
      {/* Cards */}
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="h-24 w-full border rounded-lg shadow-md flex flex-row items-center gap-4 p-4 hover:border-gray-300 hover:-translate-y-1 hover:bg-[#F2F6FD] transition-all duration-300">
            <div className="text-blue-500 text-3xl">{category.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-gray-500">
                {category.jobs_available} Jobs Available
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Navigation Buttons */}
    <button className="custom-prev absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-3xl text-blue-500">
      ❮
    </button>
    <button className="custom-next absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-3xl text-blue-500">
      ❯
    </button>
  </div>
    );
}
