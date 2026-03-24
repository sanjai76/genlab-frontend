// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 z-50"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
                <h1 className="text-xl font-bold tracking-wide">GenLab</h1>

                <div className="space-x-6 hidden md:block">
                    <a href="#" className="hover:text-cyan-400">Home</a>
                    <a href="#" className="hover:text-cyan-400">Services</a>
                    <a href="#" className="hover:text-cyan-400">Contact</a>
                </div>
            </div>
        </motion.nav>
    )
}