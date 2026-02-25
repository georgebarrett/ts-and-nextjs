'use client'

import { useState } from 'react'

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <main className="relative min-h-screen pt-32 px-6 text-white">
            <div className="fixed inset-0 -z-20 bg-[url('/bricks.jpg')] bg-cover bg-center opacity-45" />
            <div className="fixed inset-0 -z-10 bg-black/30" />

            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>

                <p className="text-center font-bold text-white/70 mb-12">
                    Got a question about a record? Send a message.
                </p>

                {submitted ? (
                    <p className="text-center text-green-400">
                        Thanks for your message.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 bg-white/60 border border-white/20 rounded text-white placeholder-black"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-white/60 border border-white/20 rounded text-white placeholder-black"
                            required
                        />

                        <textarea
                            placeholder="Message"
                            rows={5}
                            className="w-full p-3 bg-white/60 border border-white/20 rounded text-white placeholder-black"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-white/60 text-black rounded hover:bg-white/80 transition"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </main>
    )
}
