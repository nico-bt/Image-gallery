import ImageCard from "@/app/ImageCard"
import fetchImages from "@/lib/fetchImages"

interface PageProps {
  params: { search: string }
}

export function generateMetadata({ params: { search } }: PageProps) {
  let searchFormatted = ""

  search.includes("%20")
    ? (searchFormatted = search.split("%20").join(" "))
    : (searchFormatted = search)

  return {
    title: `Results for ${searchFormatted}`,
  }
}

export default async function Home({ params: { search } }: PageProps) {
  const imagesResults = await fetchImages(
    `https://api.pexels.com/v1/search?query=${search}&per_page=26`
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
