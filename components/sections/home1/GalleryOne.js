'use client'

import Link from 'next/link'
import { useState } from 'react'

const galleryItems = [
  {
    src: '/assets/images/gallery/gallery-1-1.jpg',
    alt: 'showcase',
    title: 'Latin Dance Extravaganza',
    subtitle: 'Latin Dance Night',
    href: '/gallery-details',
  },
  {
    src: '/assets/images/gallery/gallery-1-2.jpg',
    alt: 'Gallery 2',
    title: 'Grand Showcase Event',
    subtitle: 'Grand Showcase',
    href: '/gallery-details',
  },
  {
    src: '/assets/images/gallery/gallery-1-3.jpg',
    alt: 'Gallery 3',
    title: 'Looking at the judges',
    subtitle: 'Gala Affairs',
    href: '/gallery-details',
  },
  {
    src: '/assets/images/gallery/gallery-1-4.jpg',
    alt: 'Gallery 4',
    title: 'Dream Frame',
    subtitle: 'NCDA Championship',
    href: '/gallery-details',
  },
  {
    src: '/assets/images/gallery/gallery-1-5.jpg',
    alt: 'Gallery 5',
    title: 'Promenade Night',
    subtitle: 'Dream Showcase',
    href: '/gallery-details',
  },
  {
    src: '/assets/images/gallery/gallery-1-6.jpg',
    alt: 'Gallery 6',
    title: 'Splits and Spins',
    subtitle: 'Contemporary Dance',
    href: '/gallery-details',
  },
  {
    src: '/assets/images/gallery/gallery-1-7.jpg',
    alt: 'Gallery 7',
    title: 'Where are you looking?',
    subtitle: 'Juniors Showcase',
    href: '/gallery-details',
  },
  {
    src: '/assets/images/gallery/gallery-1-8.jpg',
    alt: 'Gallery 8',
    title: 'Getting Ready to Dance',
    subtitle: 'ECS Competition',
    href: '/gallery-details',
  },
]

export default function GalleryOne() {
  const [columns, setColumns] = useState(3)

  return (
    <section className='gallery-one'>
      <div className='container'>
        <div className='section-title text-center'>
          <div className='section-title__tagline-box'>
            <span className='section-title__tagline'>Latest Gallery</span>
          </div>
          <h2 className='section-title__title'>
            The Joy of Dance Captured in Moments
          </h2>
        </div>
        <div className='row masonary-layout'>
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`col-xl-${index === 8 ? 3 : 3} col-lg-6 col-md-6`}
            >
              <div className='gallery-one__single'>
                <div className='gallery-one__img'>
                  <img src={item.src} alt={item.alt} />
                  <div className='gallery-one__content'>
                    <div className='gallery-one__sub-title-box'>
                      <div className='gallery-one__sub-title-shape'></div>
                      <p className='gallery-one__sub-title'>{item.subtitle}</p>
                    </div>
                    <h4 className='gallery-one__title'>
                      <Link href={item.href}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
