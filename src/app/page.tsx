import fetchImages from "@/lib/fetchImages"
import Image from "next/image"

export default async function Home() {
  const imagesResults = await fetchImages("https://api.pexels.com/v1/search?query=landscape")

  if (imagesResults && imagesResults.photos.length === 0) {
    return <h2 className="m-4 text-3xl font-bold letter tracking-wider">No images found</h2>
  }

  return (
    <>
      {imagesResults && imagesResults.photos.length > 0 && (
        <section className="grid grid-cols-gallery gap-4">
          {imagesResults.photos.map((img) => (
            <article
              key={img.id}
              className="h-64 bg-gray-200 rounded-xl overflow-hidden relative hover:scale-105 transition-all duration-300"
            >
              <Image
                src={img.src.large}
                alt={img.alt}
                fill={true}
                className="object-cover "
                // sizes calculados a ojo por mi
                // sizes="(max-width: 531px) 100vw, (max-width: 797px) 50vw, (max-width: 1063px) 33vw, 400px"
                //sizes calculados con una web para optimizar
                sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
              />
            </article>
          ))}
        </section>
      )}
    </>
  )
}
