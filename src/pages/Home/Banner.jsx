import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'
import 'animate.css';
import { useEffect, useState } from "react";




const Banner = () => {
    const [xValue, setXValue] = useState([0, 30, 0]); // Default for small screens

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // lg breakpoint
                setXValue([170, 200, 170]);
            } else {
                setXValue([0, 30, 0]);
            }
        };

        handleResize(); // Run once to set initial value
        window.addEventListener("resize", handleResize); // Listen for screen size changes

        return () => window.removeEventListener("resize", handleResize); // Cleanup
    }, []);

    return (
        <div className="hero min-h-96">
            <div className="hero-content flex-col lg:flex-row lg:items-center lg:gap-10">
            <div className="flex-1 text-center lg:text-left">
                    <h1
                        className="animate__animated animate__fadeInUp animate__slow text-5xl font-bold tracking-tight leading-tight text-blue-600"
                    >
                        Shape Your Future with <span className="text-accent">CAREER-CODE!</span>
                    </h1>

                    <p className="animate__animated animate__fadeInUp animate__slower py-6 text-lg text-gray-700 lg:w-[70%] leading-relaxed">
                        Explore thousands of job opportunities tailored to your skills and aspirations.
                        Whether you're an employer or a job seeker, CAREER-CODE bridges the gap, making recruitment and job applications seamless and efficient.
                    </p>
                    <button
                        className="animate__animated animate__fadeInUp animate__slower btn btn-primary"
                        onClick={(e) => {
                            e.target.classList.remove("animate__fadeInUp"); // Remove the animation class
                        }}
                    >
                        Find Your Dream Job
                    </button>
                </div>
                <div className="flex-1">
                    <motion.img
                        animate={{ y: [80, 60, 80] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team1}
                        alt="Career Code Banner"
                        className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-b-[8px] border-l-[8px] border-[#00D7C0]  w-[350px] shadow-2xl "
                    />
                    <motion.img
            animate={{ x: xValue }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team2}
            alt="Career Code Banner"
            className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-b-[8px] border-l-[8px] border-[#00D7C0] w-[350px] shadow-2xl"
        />
                </div>               
            </div>
        </div>
    );
};

export default Banner;