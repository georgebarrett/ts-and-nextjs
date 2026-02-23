export default function About() {
    return (
        <main className="relative min-h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0">
                <img
                    src="/about.jpg"
                    alt="Vinyl record spinning"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <section className="relative z-10 max-w-2xl text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                    Spinning Plates
                </h1>

                <p className="text-lg md:text-xl leading-relaxed mb-4">
                    I started Spinning Plates because vinyl isn’t just music,
                    it’s ritual. It’s the weight of the record in your hands,
                    the crackle before the first note and feeling the warmth in
                    your soul.
                </p>

                <p className="text-lg md:text-xl leading-relaxed mb-4">
                    I'm here for the album lovers. The crate diggers. The
                    sessions. The morning coffee with Herbie Hancock.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                    No algorithms. No skipping tracks. Just music the way it was
                    intended.
                </p>
            </section>
        </main>
    )
}
