'use client' // Ensures the component runs on the client side

import Link from 'next/link'
import { useState } from 'react'

export default function Reasons() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [reasonsContent, setReasonsContent] = useState({
    sectionTagline: 'Dance Benefits',
    sectionTitle: 'Why you should learn to dance',
    reasons: [
      {
        id: 1,
        title: 'Confidence in Motion',
        description:
          'Dance builds confidence and self-expression, allowing individuals to showcase their unique styles.',
        icon: 'icon-confidence',
        link: '/confidence',
      },
      {
        id: 2,
        title: 'Expression through Dance',
        description:
          'Dance fosters creativity and artistic expression, allowing individuals to explore their emotions through movement.',
        icon: 'icon-expression',
        link: '/expression',
      },
      {
        id: 3,
        title: 'Social Connections',
        description:
          'Dance brings people together for a shared experience and fosters new friendships.',
        icon: 'icon-connections',
        link: '/social-connections',
      },
    ],
  })

  return (
    <>
      {/* Services One Start */}
      <section className='reasons'>
        <div className='container'>
          <div className='section-title text-center'>
            <div className='section-title__tagline-box'>
              <span className='section-title__tagline'>
                {reasonsContent.sectionTagline}
              </span>
            </div>
            <h2 className='section-title__title'>
              {reasonsContent.sectionTitle}
            </h2>
          </div>
          <div className='row'>
            {reasonsContent.reasons.map((service) => (
              <div
                key={service.id}
                className='col-xl-4 col-lg-4 wow fadeInLeft'
                data-wow-delay='100ms'
              >
                <div className='reasons__single'>
                  <div className='reasons__icon'>
                    <img
                      src={`/assets/images/icon/${service.icon}.svg`}
                      alt={service.title}
                    />
                  </div>
                  <h3 className='reasons__title'>
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p className='reasons__text'>{service.description}</p>
                  <Link href={service.link} className='reasons__read-more'>
                    Read More <span className='icon-arrow-right'></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* reasons One End */}
    </>
  )
}
