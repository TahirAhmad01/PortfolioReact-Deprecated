import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

export default function Projects({ items }) {
  return (
    <>
      <div className="lg:columns-3 md:columns-2 columns-1 gap-2">
        {items.map((item, idx) => (
          <Fade key={idx}>
            <a href="/#">
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative projectBtn max-h-60 md:h-52 lg:h-[10.7rem] object-contain  overflow-hidden mb-2 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover min-h-full"
                  />
                  <div className="absolute bg-white/80 backdrop-blur  h-full w-full -bottom-full left-0 z-30 flex justify-center items-center slide-up transition-all ease-in-out duration-500 dark:text-black">
                    <div>
                      <span className="font-semibold capitalize text-lg">
                        {item.name}
                      </span>
                      <div className="text-center">
                        {item.category.map((cat) => (
                          <span className="mx-1">{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          </Fade>
        ))}
      </div>
    </>
  );
}
