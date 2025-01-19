"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import MagicBtn from "./MagicBtn";

export function ApproachCart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-4">
      <Card
        title="Planning"
        icon={<AceternityIcon order="Phase 1" />}
        description="In the planning stage, I define the website's purpose, target audience, and key features. Create wireframes and design mockups to visualize layout, ensuring a clear roadmap for development."
      >
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-emerald-900"
        />
      </Card>
      <Card
        title="Development"
        icon={<AceternityIcon order="Phase 2" />}
        description="During development, I transform designs into a functional website using ReactJS and other UI and 3D Graphics such as from Aceternity UI, Animista, etc. I Implement responsive design, optimize performance, and integrate necessary features, ensuring the site meets all specified requirements."
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
      </Card>
      <Card
        title="Deployment"
        icon={<AceternityIcon order="Phase 3" />}
        description="In the deployment stage, I launch the website on a hosting platform. Conduct thorough testing for functionality and performance, and monitor for issues post-launch to ensure a smooth user experience."
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
      </Card>
    </div>
  );
}

const Card = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-[70%] md:w-full mx-auto p-4 relative h-[70vh]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="relative dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center px-2 text-ellipsis overflow-hidden">
          {title}
        </h2>
        <h2
          className="relative dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center px-2 text-ellipsis overflow-hidden w-auto bg-gradient-to-r from-purple-200 via-blue-300 to-red-400 bg-clip-text text-transparent"
          style={{ color: "e44cff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <MagicBtn title={order} />
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
