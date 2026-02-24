import Image from "next/image"

export const metadata = {
    title: 'Home | Spinning Plates',
    description: 'Vinyl and Record shop'
}

export default function Home() {
    return (
        <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/home.jpg"
                    alt="Vinyl records background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            
            <section className="text-center px-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Welcome to Spinning Plates
                </h1>
            </section>

        </main>
    )
}
