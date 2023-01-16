import React from 'react'
import image from '../nature-hd-wallpapers-blue-sky.jpg'

export default function Home() {
  return (
    <main>
        <img src={image} alt="gura" className=' absolute object-cover w-full h-full' />
        <section className=' relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
            <h1 className=' text-5x1 text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>Hey im Gabriel.</h1>
        </section>
    </main>
  )
}
