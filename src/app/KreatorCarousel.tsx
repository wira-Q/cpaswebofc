'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const creators = [
  { name: 'FFRoody', username: '@ffroody', image: '/creator1.jpg' },
  { name: 'Lmemore', username: '@lmemore', image: '/creator2.jpg' },
  // ... hingga 9
]

export default function KreatorCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="w-full mt-10 px-4"
    >
      {creators.map((creator, i) => (
        <SwiperSlide key={i}>
          <div className="bg-gray-800 rounded-xl p-4 text-white shadow-md">
            <div className="w-full h-40 bg-gray-700 rounded-md mb-3 overflow-hidden">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">{creator.name}</h3>
            <p className="text-sm text-gray-300">
              {creator.username} | Youtube Live Streamer
            </p>
            <button className="mt-3 w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition">
              Lihat Kreator
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
