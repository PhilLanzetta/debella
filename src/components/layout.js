import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
        <Footer />
      </motion.main>
    </>
  )
}

export default Layout
