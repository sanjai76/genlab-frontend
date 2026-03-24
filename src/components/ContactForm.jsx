import { useState } from "react"
import axios from "axios"

function ContactForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const submit = async () => {
        try {
            await axios.post(
                "https://genlab-backend.onrender.com/api/contact/",
                form,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            alert("Message Sent Successfully")
        } catch (err) {
            console.log(err)
            alert("Server error")
        }
    }

    return (
        <div className="max-w-xl mx-auto py-16 px-6">

            <h2 className="text-3xl font-bold mb-6 text-center">
                Contact GenLab
            </h2>

            <input
                className="w-full border p-3 mb-4 rounded"
                placeholder="Name"
                onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
                className="w-full border p-3 mb-4 rounded"
                placeholder="Email"
                onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <textarea
                className="w-full border p-3 mb-4 rounded"
                placeholder="Message"
                onChange={e => setForm({ ...form, message: e.target.value })}
            />

            <button
                onClick={submit}
                className="w-full bg-slate-900 text-white p-3 rounded hover:bg-slate-700 transition"
            >
                Send Message
            </button>

        </div>
    )
}

export default ContactForm