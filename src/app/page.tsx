import fetchImages from "@/lib/fetchImages"
import ImageCard from "./ImageCard"

export default async function Home() {
  const imagesResults = await fetchImages(
    "https://api.pexels.com/v1/search?query=vacations&per_page=26"
  )

  if (imagesResults && imagesResults.photos.length === 0) {
    return <h2 className="m-4 text-3xl font-bold letter tracking-wider">No images found</h2>
  }

  return (
    <>
      {imagesResults && imagesResults.photos.length > 0 && (
        <section className="grid grid-cols-gallery gap-4">
          {imagesResults.photos.map((img, i) => (
            <ImageCard key={img.id} img={img} />
          ))}
        </section>
      )}
    </>
  )
}
