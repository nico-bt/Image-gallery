import getPlaceholder from "./getPlaceholder"

export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: { Authorization: process.env.API_KEY as string },
      // Cada tanto cambian las imgs, cache por una hora
      next: { revalidate: 3600 },
    })
    if (!res.ok) {
      throw new Error("Response not Ok.")
    }

    const data: ImagesResults = await res.json()

    // Adding a blurDataURL as a base 64 to the ImagesResults array, enables showing a blur for the Image component on loading
    //--------------------------------------------------------------------------------------------------------------------------
    // const blurBase64PromisesArray = data.photos.map((img) => getPlaceholder(img.src.large))

    // const blurBase64Array = await Promise.all(blurBase64PromisesArray)

    // data.photos.forEach((item, i) => (item.blurredDataUrl = blurBase64Array[i]))

    return data
  } catch (error) {
    console.log(error)
  }
}
