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
            <article key={img.id} className="h-64 bg-gray-200 rounded-xl overflow-hidden relative">
              <Image src={img.src.large} alt={img.alt} fill={true} className="object-cover" />
              {/* <img src={img.src.large} alt={img.alt} /> */}
              {/* <h3>{img.alt}</h3> */}
            </article>
          ))}
        </section>
      )}
    </>
  )
}
