import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {Link as RouterLink} from "react-router-dom";
import { useState } from "react";
import MagicBtn from "./MagicBtn";
import arrowUp from "../../assets/arrowup.png";
import mobileGradient from "../../assets/mobileGradient.jpg";

export const ProjectCart = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "FlexBank",
      description:
        "A virtual environment built with React and Three.js, allowing users to explore, socialize, and interact with 3D objects. It showcases immersive experiences and virtual commerce opportunities.",
      link: "/flexbank",
    },
    {
      title: "WellSips",
      description:
        "A user-friendly blogging platform developed with React and Markdown, enabling users to create, edit, and publish articles. Features include tagging, comments, and social media sharing for enhanced engagement.",
      link: "/wellsips",
    },
    {
      title: "Blogg",
      description:
        "Designed and developed an online shopping site with multi functionality and interactive UI like Shopping cart and checkout functionality using ReactJS and Tailwind. This project focus on creating a seamless user experience and responsive on all devices.",
      link: "/blogg",
    },
  ];

  return (
    (<div
      className="flex flex-wrap justify-center items-center py-10">
      {projects.map((item, idx) => (
        <div
          key={item.title}
          className="relative group  block p-2 h-[70vh] w-[332px] flex justify-center items-center my-5"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
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
                }} />
            )}
          </AnimatePresence>
          <Card className="">
            <CardDescription>{item.description}</CardDescription>
            <div className="text-center">
              <RouterLink to={item.link} className="text-blue-500 hover:underline">
                <MagicBtn className="w-32" title={item.title} icon={arrowUp}/>
              </RouterLink>
            </div>
          </Card>
        </div>
      ))}
    </div>)
  );
};

export const Card = ({ children
}) => {
  return (
    (<div
      className="border border-blue-900 rounded-2xl h-full w-full p-4 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col justify-between items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${mobileGradient})` }}>
      {children}
    </div>)
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("text-zinc-400 tracking-wide leading-relaxed text-xl text-center bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent text-wrap", className)}>
      {children}
    </p>)
  );
};
