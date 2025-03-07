import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MagicBtn from "./MagicBtn";
import arrowUp from "../../assets/arrowup.png";
import mobileGradient from "../../assets/mobileGradient.jpg";

export const ProjectCart = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

  const projects = [
    {
      title: "FlexBank",
      description:
        "Experience our beautifully designed payment and banking website, featuring an intuitive UI/UX. This static frontend showcases vibrant colors and seamless navigation, ensuring an engaging user experience. With elegant forms and interactive elements, managing finances becomes effortless and visually appealing, capturing the essence of modern banking.",
        url: "https://47dmc.github.io/flexbank-app/",
    },
    {
      title: "WellSips",
      description:
        "Discover our exquisite shopping website dedicated to showcasing a diverse selection of teas, including Darjeeling, luxury premium, Kerala, and Assam varieties. With a stunning UI/UX design, the site offers seamless navigation and vibrant visuals, making tea exploration a delightful experience. Indulge in the elegance of our platform, where every sip tells a story.",
        url: "https://47dmc.github.io/wellsips-app/",
    },
    {
      title: "Blogg",
      description:
        "Explore our blog on CRUD operations, where we delve into creating, reading, updating, and deleting data. Please note that the application may not function in your browser without hosted data; for setup instructions, check the GitHub repository's README guide to configure the API server effectively.",
        url: "https://47dmc.github.io/blogg-app/",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center py-10">
      {projects.map((item, idx) => (
        <div
          key={item.title}
          className="relative group  block p-2 h-[70vh] w-[332px] flex justify-center items-center my-5"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full sm:w-full bg-neutral-200 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="">
            <CardDescription>{item.description}</CardDescription>
            <div className="text-center">
                <MagicBtn onClick={() => handleButtonClick(item.url)} className="w-32" title={item.title} icon={arrowUp} />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ children }) => {
  return (
    <div
      className="border border-blue-900 rounded-2xl h-full w-full p-4 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col justify-between items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${mobileGradient})` }}
    >
      {children}
    </div>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-lg text-center bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent text-wrap",
        className
      )}
    >
      {children}
    </p>
  );
};
