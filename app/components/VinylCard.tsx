import Image from 'next/image'
import Link from 'next/link'

type VinylCardProps = {
  id: number
  artist: string
  title?: string
  description: string
  price: number
  image: string
}

export default function VinylCard({
  id,
  artist,
  title,
  description,
  price,
  image,
}: VinylCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="block focus:outline-none focus:ring-2 focus:ring-stone-400 rounded-lg overflow-hidden"
    >
      <div className="bg-white/95 backdrop-blur-sm border border-stone-200 rounded-lg h-full flex flex-col">

        <div className="w-full">
          <Image
            src={image}
            alt={artist}
            width={800}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="p-8 flex flex-col grow">

          <h2 className="text-xl font-semibold tracking-tight">
            {artist}
          </h2>

          {title && (
            <h3 className="text-xs uppercase tracking-widest text-stone-500 mt-2">
              {title}
            </h3>
          )}

          <p className="text-sm text-stone-600 mt-6 grow">
            {description}
          </p>

          <p className="mt-8 text-stone-900 font-medium">
            £{price.toFixed(2)}
          </p>

        </div>

      </div>
    </Link>
  )
}