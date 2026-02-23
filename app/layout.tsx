import { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="font-sans antialiased">
                <header className="absolute top-0 left-0 w-full z-50 p-4">
                    <nav className="flex justify-between items-center px-8 py-6 text-white">
                        <a
                            href="/"
                            className="text-4xl tracking-[0.2em] uppercase font-light"
                        >
                            Spinning Plates
                        </a>
                        <div className="flex gap-10 text-2xl tracking-widest uppercase">
                            <a href="/" className="relative-group">
                                Home
                            </a>
                            <a
                                href="/about"
                                className="relative-group"
                            >
                                About
                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        </div>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    )
}
