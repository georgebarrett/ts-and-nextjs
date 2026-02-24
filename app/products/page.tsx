import VinylCard from '../components/VinylCard'

const records = [
    {
        id: 1,
        artist: 'Surprise Chef',
        title: 'Superb',
        description: 'Their latest mind blowing album.',
        price: 10,
        image: '/superb.jpg',
    },
    {
        id: 2,
        artist: 'Boards of Canada',
        title: 'Music has the Right to Children',
        description: 'Seminal electronica.',
        price: 20,
        image: '/boc.jpg',
    },
]

export default function ProductsPage() {
    return (
        <main className="relative min-h-screen pt-32 px-12">
            <div className="fixed inset-0 -z-20 bg-[url('/bricks.jpg')] bg-cover bg-center opacity-25" />
            <div className="fixed inset-0 -z-10 bg-black/30" />

            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-light mb-20 text-white text-center">
                    Vinyl Collection
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
                    {records.map((record) => (
                        <VinylCard key={record.id} {...record} />
                    ))}
                </div>
            </div>
        </main>
    )
}
