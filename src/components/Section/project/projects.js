import { motion } from "framer-motion";
import React from "react";

export default function Projects({ items }) {
  return (
    <>
      {items.map((item, idx) => (
        <motion.div
          className="image-card"
          key={idx}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{item.name}</h2>
        </motion.div>
      ))}
    </>
  );
}
