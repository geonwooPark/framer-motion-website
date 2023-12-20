'use client'

import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
}

export default function SlideIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}
