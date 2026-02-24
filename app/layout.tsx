import { ReactNode } from 'react'
import Link from 'next/link'
import Logo from './components/logo'
import './styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="font-sans antialiased">
                <header className="absolute top-0 left-0 w-full z-50 p-4">
                    <nav className="flex justify-between items-center px-8 py-6 text-white">
                        <Link
                            href="/"
                            className="flex items-center text-4xl tracking-[0.2em] uppercase font-light"
                        >
                            Spinning Plates
                            <Logo />
                        </Link>

                        <div className="flex gap-10 text-2xl tracking-widest uppercase">
                            <Link href="/" className="relative group">
                                Home
                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>

                            <Link href="/about" className="relative group">
                                About
                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>

                            <Link href="/products" className="relative group">
                                Vinyl
                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </div>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    )
}
