import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react"; // Importing icons

interface SwitchProps {
    activeButton: React.ReactNode;
    hiddenButton: React.ReactNode;
    setActiveButton: () => void;
}

export default function Switch({
    activeButton,
    hiddenButton,
    setActiveButton,
}: SwitchProps) {
    const [isHovered, setIsHovered] = useState(false);

    const switchVariants = {
        visible: { scale: 1, opacity: 0.7, y: 0 }, 
        hover: { scale: 1.2 },
        hidden: { scale: 0.5, opacity: 0, y: 50 },
    };

    return (
        <div>
            <AnimatePresence>
                {isHovered && (
                    <motion.button
                        key="languageSwitcher"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={switchVariants}
                        transition={{ duration: 0.3 }}
                        className="bg-white w-[2rem] h-[2rem] rounded-full drop-shadow-lg cursor-pointer flex items-center justify-center transition-transform duration-200"
                    >
                        <p className="text-sm font-semibold">{hiddenButton}</p>
                    </motion.button>
                )}
            </AnimatePresence>

            <motion.button
                className="bg-white w-[2rem] h-[2rem] rounded-full drop-shadow-lg cursor-pointer flex items-center justify-center transition-transform duration-200"
                variants={switchVariants}
                initial="visible"
                whileHover="hover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={setActiveButton}
            >
                <p className="font-semibold">{activeButton}</p>
            </motion.button>
        </div>
    );
}
