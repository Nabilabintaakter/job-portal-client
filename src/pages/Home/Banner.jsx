import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse lg:items-center lg:gap-10">
                <div className="flex-1">
                    <motion.img
                        animate={{y:[80,60,80]}}
                        transition={{duration:5, repeat: Infinity} }
                        src={team1}
                        alt="Career Code Banner"
                        className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-b-[8px] border-l-[8px] border-blue-700  w-[350px] shadow-2xl "
                    />
                    <motion.img
                        animate={{x:[170,200,170]}}
                        transition={{duration:5, repeat: Infinity} }
                        src={team2}
                        alt="Career Code Banner"
                        className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-b-[8px] border-l-[8px] border-blue-700  w-[350px] shadow-2xl "
                    />
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <motion.h1
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: -200, opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="text-5xl font-extrabold tracking-tight leading-tight text-primary"
                    >
                        Shape Your Future with <span className="text-accent">CAREER-CODE!</span>
                    </motion.h1>

                    <p className="py-6 text-lg text-gray-700 lg:w-[70%] leading-relaxed">
                        Explore thousands of job opportunities tailored to your skills and aspirations.
                        Whether you're an employer or a job seeker, CAREER-CODE bridges the gap, making recruitment and job applications seamless and efficient.
                    </p>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log('hover started!')} className="btn btn-primary">Find Your Dream Job</motion.button>
                </div>
            </div>

        </div>
    );
};

export default Banner;