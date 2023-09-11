import Image from "next/image"
import Link from "next/link"

export default function ImageCard({ img }: { img: Photo }) {
  return (
    <article className="h-64 bg-gray-200 rounded-xl overflow-hidden relative hover:scale-105 transition-all duration-300">
      <Link href={img.src.original} target="_blank">
        <Image
          src={img.src.large}
          alt={img.alt}
          fill={true}
          className="object-cover "
          // sizes calculados a ojo por mi
          // sizes="(max-width: 531px) 100vw, (max-width: 797px) 50vw, (max-width: 1063px) 33vw, 400px"
          //sizes calculados con una web para optimizar
          sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
          // placeholder="blur"
          // blurDataURL={img.blurredDataUrl}
        />

        <div className="absolute bottom-0 top-0 left-0 right-0 opacity-0 py-1 px-2 grid place-items-end justify-center hover:opacity-100">
          <span className="flex bg-yellow-300 px-2 py-1 mb-1 rounded tracking-wider text-black border-black border-solid border-[1px]">
            Get full res
            <NewTabIcon />
          </span>
        </div>
      </Link>
    </article>
  )
}

const NewTabIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      style={{ marginLeft: 6 }}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
    </svg>
  )
}
