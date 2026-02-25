export type Record = {
    id: number
    slug: string
    artist: string
    title: string
    description: string
    price: number
    image: string
}

export const records: Record[] = [
    {
        id: 1,
        slug: 'surprise-chef',
        artist: 'Surprise Chef',
        title: 'Superb',
        description: 'Their latest mind blowing album.',
        price: 10,
        image: '/superb.jpg',
    },
    {
        id: 2,
        artist: 'Boards of Canada',
        slug: 'boards-of-canada',
        title: 'Music has the Right to Children',
        description: 'Seminal electronica.',
        price: 20,
        image: '/boc.jpg',
    },
]
