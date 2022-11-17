import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Projects({ items }) {
  return (
    <>
      <div className="lg:columns-3 md:columns-2 columns-1 gap-3">
        {items.map((item, idx) => (
          <Fade>
            <a href="/#">
              <motion.div
                key={idx}
                className="max-h-52 overflow-hidden mb-3 relative projectBtn"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={item.image} alt={item.name} />
                <div className="absolute bg-white/80 backdrop-blur  h-full w-full -bottom-full left-0 z-20 flex justify-center items-center slide-up transition-all ease-in-out duration-500">
                  <div>
                    <span className="font-semibold capitalize text-lg">
                      {item.name}
                    </span>
                    <div className="text-center">
                      {item.category.map((cat) => cat)}
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
