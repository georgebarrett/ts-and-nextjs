import { ReactNode } from 'react'

export default function DashBoardLayout({ children }: { children: ReactNode }) {
    return (
        <section className="flex">
            <aside className="w-64 bg-gray-50 p-4 border-r">
                <nav>
                    <a href="/dashboard" className="block mb-2">
                        Overview
                    </a>
                    <a href="/dashboard/settings">Settings</a>
                </nav>
            </aside>
            <main className="flex-1 p-6">{children}</main>
        </section>
    )
}
