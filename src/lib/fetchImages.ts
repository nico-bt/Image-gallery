export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, { headers: { Authorization: process.env.API_KEY as string } })
    if (!res.ok) {
      throw new Error("Response not Ok.")
    }
    const json = await res.json()
    return json
  } catch (error) {
    console.log(error)
  }
}
