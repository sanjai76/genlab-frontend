// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const data = [
    { title: "Lab Automation", desc: "Automate workflows and reduce manual effort" },
    { title: "Report Analytics", desc: "Advanced medical data insights" },
    { title: "Cloud Integration", desc: "Secure and scalable infrastructure" }
]

function Services() {
    return (
        <section className="py-20 bg-white text-center">
            <h2 className="text-4xl font-bold mb-12">Our Services</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-2xl shadow-lg border"
                    >
                        <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                        <p className="text-gray-500">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Services