'use client'

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { FaDiscord, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6"


const creators = [
  { name: 'FFRoody', username: '@ffroody', image: '/ffroody.jpg' },
  { name: 'Lmemore', username: '@lmemore', image: '/Lmemore.jpg' },
  { name: 'Exelicks', username: '@exelicks', image: '/exe.jpg' },
  { name: 'Naufal Wi', username: '@naufalwi', image: '/naufal.jpg' },
  { name: 'Napking', username: '@napking', image: '/napking.jpg' },
  { name: 'mythia Batford', username: '@mythia batford', image: '/mythia-batford.jpg' },
  { name: 'Rinmoka', username: '@rinmoka', image: '/rinmoka.jpg' },
  { name: 'lutfi halimawan', username: '@v', image: '/luthfi-halimawan.jpg' },
  { name: 'beaconcream', username: '@beaconcream', image: '/beaconcream.jpg' },
]

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative">

     
      <div className="absolute top-4 left-6">
        <Image src="/logo.png" alt="Logo Ulang Tahun Tako" width={150} height={100} className="object-contain" />
      </div>

     
      <div className="absolute top-4 right-6">
        <div
          className="relative flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg shadow-md cursor-pointer select-none"
          onClick={() => setOpen(!open)}
        >


<div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
  <Image
    src="/default_profile_picture.png"
    alt="Profile"
    width={28}
    height={28}
    className="object-cover"
  />
</div>

          <span className="text-white text-sm font-medium">wira</span>
          <svg
            className={`w-4 h-4 text-white transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {open && (
          <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg w-48 text-left text-white text-sm overflow-hidden z-50">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Pengaturan</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Temukan Kreator</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex justify-between">
                Topup <span className="bg-yellow-500 text-black text-xs px-2 rounded">IDR 0</span>
              </li>
              <hr className="border-gray-700" />
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">FAQ</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Server Discord</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Status Layanan</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Changelog</li>
              <hr className="border-gray-700" />
              <li className="px-4 py-2 text-red-500 hover:bg-gray-700 cursor-pointer">Keluar</li>
            </ul>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <Image src="/event.png" alt="Hari Ulang Tako" width={310} height={130} className="mb-6 mt-10" />
      <h1 className="text-4xl md:text-5xl font-black text-yellow-300">HARI ULANG TAKO 2025</h1>
      <p className="max-w-xl text-gray-300 mb-6 px-2">
        Ayo meriahkan Hari Ulang Tahun Tako 2025! Dukung kreator favoritmu dan saksikan mereka
        bersaing meraih berbagai penghargaan seru.
      </p>

      {/* Info tanggal & youtube */}
      <div className="flex flex-col sm:flex-row gap-4 text-sm mb-6 justify-center">
        <div className="flex items-center gap-2">
          <span className="text-red-500">📅</span>
          <span className="text-pink-400 font-extrabold">18 Oktober 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-400">▶</span>
          <span className="text-blue-400 font-extrabold">Youtube @takodotid</span>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
        <button className="w-full bg-yellow-300 text-black px-6 py-3 font-extrabold rounded-full shadow-md hover:brightness-95 transition">
          Lihat Penghargaan Hari Ulang Tahun Tako 2025 →
        </button>
        <div className="flex flex-col sm:flex-row gap-4 mt-5 mb-4">
          <button className="relative bg-blue-400 px-8 py-3 border-2 border-blue-600 rounded-md font-semibold text-white shadow-[4px_6px_0_0_#2563eb] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_4px_0_0_#2563eb] active:translate-x-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-150">
            Temukan Kreator Favoritmu!
          </button>
          <button className="relative bg-pink-400 border-2 border-pink-600 px-6 py-3 rounded-md font-semibold text-white shadow-[4px_6px_0_0_#db2777] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_4px_0_0_#db2777] active:translate-x-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-150">
            Buat Akun
          </button>
        </div>
      </div>

      {/* Section Informasi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto mt-10 px-4 auto-rows-[380px]">
        {/* Box Biru */}
        <div className="relative overflow-visible">
          <div className="absolute  top-0 left-0 w-full h-full bg-blue-700 rounded-2xl translate-x-2 translate-y-2 z-0" />
          <div className="relative bg-blue-400 border-2 border-blue-600 text-white p-6 rounded-2xl z-10 min-h-[360px] h-full">
            <h2 className="text-2xl font-extrabold mb-4">Apa Itu Tako?</h2>
            <p className="text-sm leading-relaxed ">
              <span className="font-bold">Tako</span> adalah platform monetisasi bagi para konten kreator untuk mendapatkan penghasilan lebih dari sekedar kreasi kontennya saja.
            </p>
            <p className="text-sm leading-relaxed ">
              <span className="font-bold">Dengan Tako, Kamu dapat berinteraksi lebih dekat dengan para penggemarmu sekaligus mendapatkan pendapatan lebih untuk mendukung kreativitasmu dalam berkarya.</span> </p>
            <img src="/confused.png" alt="Mascot Biru" className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 object-contain" />
          </div>
        </div>

        {/* Box Pink */}
        <div className="relative overflow-visible">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-pink-700 rounded-2xl z-0" />
          <div className="relative bg-pink-400 border-2 border-pink-600 text-white p-6 rounded-2xl z-10 min-h-[360px] h-full">
            <h2 className="text-2xl font-extrabold mb-4">Fitur-Fitur Tako</h2>
            <ul className="list-decimal list-inside text-sm space-y-1">
              <li>Overlay Soundboard, Voice Note</li>
              <li>Text-to-Speech 50+ Suara</li>
              <li>Mediashare Tiktok, Instagram, dan Youtube</li>
              <li>Filter NSFW/Konten 18+ di semua Mediashare</li>
              <li>Potongan Biaya Layanan Spesial</li>
              <li>Dan masih banyak lagi!</li>
            </ul>
            <p className="mt-2 text-sm">
              <span className="bg-pink-200 text-pink-900 rounded px-2 py-1 inline-block w-40">
                Punya ide / saran fitur? <span className="font-bold">Yuk beritahu kami!</span>
              </span>
            </p>
            <img src="/teaching.png" alt="Mascot Pink"  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 object-contain" />
          </div>
        </div>

        {/* Box Hijau */}
<div className="relative overflow-visible">
  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-green-700 rounded-2xl z-0" />
  <div className="relative bg-green-400 border-2 border-green-600 text-white p-6 rounded-2xl z-10 min-h-[360px] h-full flex flex-col">
    
    <h2 className="text-2xl font-extrabold mb-4">Masih Bingung?</h2>
    <p className="text-sm leading-relaxed mb-4">
      Cari jawaban pertanyaanmu di bawah ini atau hubungi tim Tako langsung via{" "}
      <span className="font-bold">Server Discord Tako.</span>
    </p>

     <button className="relative bg-blue-400 px-8 py-3 rounded-md font-semibold text-white shadow-[4px_6px_0_0_#2563eb] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_4px_0_0_#2563eb] active:translate-x-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-150">
            Temukan Kreator Favoritmu!
          </button>

   
    <img
      src="/ask.png"
      alt="Mascot Hijau"
       className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 object-contain"
    />
  </div>
</div>

      </div>

     {/* Section: Siapa aja yang pakai Tako */}
<section className="bg-transparent text-white rounded-2xl p-4 sm:p-8 flex flex-col items-center space-y-6 w-full max-w-4xl mx-auto mt-4">
  <img 
    src="/amazed.gif" 
    alt="Mascot Blue Tako" 
    className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain mx-auto" 
  />
  
  <h3 className="text-2xl sm:text-3xl font-extrabold text-center">
    SIAPA AJA SIH YANG PAKAI TAKO?
  </h3>
  
  <p className="w-full max-w-md sm:max-w-xl text-center text-sm sm:text-base">
    Tako digunakan oleh berbagai konten kreator dari berbagai macam kategori, mulai dari Streamer, Cosplayer, Musisi, Seniman, Komunitas, dan Lain-lainnya!
  </p>
  
  <button className="relative bg-pink-400 border-2 border-pink-600 px-6 sm:px-8 py-3 rounded-md font-semibold text-white shadow-[4px_6px_0_0_#db2777] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_4px_0_0_#db2777] active:translate-x-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-150">
    Jelajahi Kreator Tako!
  </button>
</section>



     <Swiper
  modules={[Autoplay]}
  spaceBetween={16}
  slidesPerView={1.2} // default di layar kecil: 1.2 biar ada sedikit intip card sebelah
  breakpoints={{
    480: { slidesPerView: 1.5 },  // HP kecil → 1.5 card
    640: { slidesPerView: 2 },    // HP agak gede → 2 card
    768: { slidesPerView: 3 },    // Tablet → 3 card
    1024: { slidesPerView: 4 },   // Laptop → 4 card
    1280: { slidesPerView: 5 },   // Desktop → 5 card
  }}
  loop={true}
  freeMode={{
    enabled: true,
    momentum: false,
  }}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  speed={7200}
  allowTouchMove={false}
  className="w-full mt-2 px-4"
>
  {creators.map((creator, index) => (
    <SwiperSlide key={index}>
      <div className="bg-gray-800 rounded-xl p-4 text-white shadow-md flex flex-col h-full min-h-[300px]">
        <div className="w-full aspect-[4/3] bg-gray-600 rounded-md mb-3 overflow-hidden">
          <img
            src={creator.image}
            alt={creator.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-lg flex justify-center items-center gap-2 text-center">
          {creator.name}
          <img src="/verified-creator.png" alt="icon" className="w-5 h-5" />
        </h3>
        <p className="text-sm text-gray-300 truncate">
          {creator.username} | Youtube Live Streamer
        </p>
        <button className="mt-3 w-full relative bg-blue-400 border-2 border-blue-600 px-8 py-3 rounded-md font-semibold text-white shadow-[4px_6px_0_0_#2563eb] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_4px_0_0_#2563eb] active:translate-x-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-150">
          Lihat Kreator
        </button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>




      {/* Section: Siap Jadi Orang Keren */}
<section className="bg-transparent rounded-2xl p-8 flex flex-col items-center space-y-6 max-w-4xl mx-auto mt-16">
  <h2 className="text-white text-3xl font-extrabold text-center">
    UDAH SIAP JADI ORANG KEREN?
  </h2>
  <p className="text-gray-300 text-sm text-center max-w-md">
    Yuk bergabung dan kembangkan komunitasmu bersama Tako!
  </p>
  <button className="relative bg-blue-400 border-2 border-blue-600 px-8 py-3 rounded-md font-semibold text-white shadow-[4px_6px_0_0_#2563eb] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_4px_0_0_#2563eb] active:translate-x-[4px] active:translate-y-[6px] active:shadow-none transition-all duration-150">
    buat akun
  </button>

  <img
    src="/famous.png"
    alt="Mascot dan Karakter"
    className="mt-0 max-w-4xl w-full object-contain rounded-xl"
  />
</section>



      {/* Footer Section */}
      <footer className="bg-transparentfrom-w-full">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center space-y-6">
          
          {/* Logo Tengah */}
          <div className="flex flex-col items-center space-y-2">
            <img src="/logo.png" alt="Tako" className="w-28 h-auto" />
          </div>

          {/* Menu Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#">Hubungi Kami</a>
            <a href="#">Bantuan & FAQ</a>
            <a href="#">Status Layanan</a>
            <a href="#">Syarat dan Ketentuan</a>
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Kebijakan Refund</a>
            <a href="#">Changelog</a>
          </div>

         {/* Social Media */}
<div className="flex gap-4">
  <a
    href="#"
    className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
  >
    <FaDiscord size={16} />
  </a>
  <a
    href="#"
    className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
  >
    <FaXTwitter size={16} />
  </a>
  <a
    href="#"
    className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
  >
    <FaInstagram size={16} />
  </a>
  <a
    href="#"
    className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition"
  >
    <FaTiktok size={16} />
  </a>
</div>



          {/* Copyright */}
          <p className="text-center text-xs text-gray-500">
            ©2023-2024 Tako. Hak Cipta Dilindungi Undang-Undang. <br />
            Merek dagang dari PT Hobimu Jadi Cuan, perusahaan terdaftar di Indonesia.
          </p>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <img src="/microsoft.png" alt="Microsoft" className="h-6" />
            <img src="/crisp.png" alt="Crisp" className="h-6" />
            <img src="/cloudflare.png" alt="Cloudflare" className="h-6" />
            <img src="/bank indonesia.png" alt="Bank Indonesia" className="h-6" />
            <img src="/ojk.png" alt="OJK" className="h-6" />
            <img src="/komdigi.png"  alt="Kominfo" className="h-6" />
          </div>

          {/* Build ID */}
          <p className="text-xs text-gray-600">Build ID: 1a81316b134b64e</p>
        </div>
      </footer>

    </main>
  )
}
