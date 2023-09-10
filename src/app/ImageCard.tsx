import Image from "next/image"

export default function ImageCard({ img }: { img: Photo }) {
  return (
    <article className="h-64 bg-gray-200 rounded-xl overflow-hidden relative hover:scale-105 transition-all duration-300">
      <Image
        src={img.src.large}
        alt={img.alt}
        fill={true}
        className="object-cover "
        // sizes calculados a ojo por mi
        // sizes="(max-width: 531px) 100vw, (max-width: 797px) 50vw, (max-width: 1063px) 33vw, 400px"
        //sizes calculados con una web para optimizar
        sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
        placeholder="blur"
        blurDataURL={img.blurredDataUrl}
      />
    </article>
  )
}
