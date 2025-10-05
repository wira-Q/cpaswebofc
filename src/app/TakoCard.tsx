import React from "react"

interface TakoCardProps {
  title: string
  content: React.ReactNode
  bgColor: string
  shadowColor: string
  imageSrc: string
  imageAlt: string
}

export default function TakoCard({ bgColor, shadowColor, title, content, imageSrc, imageAlt }: TakoCardProps) {
  return (
    <div className="relative overflow-visible">
      <div className={`absolute top-0 left-0 w-full h-full ${shadowColor} rounded-2xl translate-x-2 translate-y-2 z-0`} />
      <div className={`relative ${bgColor} text-white p-6 rounded-2xl z-10 min-h-[320px] h-full`}>
        <h2 className="text-2xl font-extrabold mb-4">{title}</h2>
        <div className="text-sm leading-relaxed mb-20">{content}</div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 object-contain"
        />
      </div>
    </div>
  );
}
