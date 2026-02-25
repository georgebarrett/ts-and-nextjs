import { records } from '../../lib/records'
import { notFound } from 'next/navigation'

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const record = records.find((record) => record.slug === slug)

    if (!record) notFound()

    return (
        <main className="relative min-h-screen pt-32 px-12 text-white">
            <div className="fixed inset-0 -z-20 bg-[url('/bricks.jpg')] bg-cover bg-center opacity-45" />
            <div className="fixed inset-0 -z-10 bg-black/30" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <img
                            src={record.image}
                            alt={record.title}
                            className="w-full rounded shadow-lg"
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-light mb-2">
                                {record.title}
                            </h1>
                            <p className="text-white/70 text-lg">
                                {record.artist}
                            </p>
                        </div>

                        <p className="text-xl">£{record.price}</p>

                        <div className="border-t border-white/20 pt-6">
                            <p className="text-white/80 leading-relaxed">
                                {record.description}
                            </p>
                        </div>

                        <button className="mt-4 px-6 py-3 bg-white text-black rounded hover:bg-white/80 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
