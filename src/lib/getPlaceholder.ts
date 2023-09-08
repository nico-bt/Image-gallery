import { getPlaiceholder } from "plaiceholder"

export default async function getPlaceholder(imgSrc: string) {
  try {
    const res = await fetch(imgSrc)

    if (!res.ok) {
      throw new Error("Failed to fetch image")
    }

    const buffer = Buffer.from(await res.arrayBuffer())

    const { base64 } = await getPlaiceholder(buffer)

    return base64
  } catch (err) {
    console.log(err)
  }
}
