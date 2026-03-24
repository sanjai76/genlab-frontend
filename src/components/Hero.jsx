// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-6">

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
                Smart Lab Management
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 max-w-xl text-gray-300"
            >
                GenLab provides modern digital solutions to streamline laboratory
                workflows, automate reports and enhance operational efficiency.
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-cyan-500 rounded-full shadow-xl hover:bg-cyan-400 transition"
            >
                Get Started
            </motion.button>

        </section>
    )
}

export default Hero