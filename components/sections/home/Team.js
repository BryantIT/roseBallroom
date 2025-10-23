'use client' // Ensures the component runs on the client side

import { useState } from 'react'
import Link from 'next/link'

export default function Team() {
  // State for dynamic content
  const [teamContent, setTeamContent] = useState({
    tagline: 'Our Team',
    title: 'Our Amazing & Talented Dance Instructors',
    members: [
      {
        id: 1,
        name: 'Chris Rose',
        role: 'Dance Instructor',
        image: '/assets/images/team/team-1-1.jpg',
        hoverText:
          'Chris is a dedicated ballroom dance instructor known for his patience, precision, and passion for helping students reach their full potential. Whether guiding newcomers through their first steps or refining advanced techniques, Chris creates a supportive and enjoyable learning environment where confidence grows with every dance.',
        link: '/team-details',
      },
      {
        id: 2,
        name: 'Tanika Rose',
        role: 'Dance Instructor',
        image: '/assets/images/team/team-1-2.jpg',
        hoverText:
          'Tanika brings energy, creativity, and warmth to every lesson she teaches. Her teaching style blends technical excellence with a focus on connection and musicality, helping students not only learn the steps but also feel the joy of movement. She believes dance is about more than technique—it’s about expression, partnership, and confidence.',
        link: '/team-details',
      },
    ],
  })

  return (
    <>
      {/* Team One Start */}
      <section className='team'>
        <div className='container'>
          <div className='section-title text-center'>
            <div className='section-title__tagline-box'>
              <span className='section-title__tagline'>
                {teamContent.tagline}
              </span>
            </div>
            <h2 className='section-title__title'>
              {teamContent.title.split(' & ').map((text, index) => (
                <span key={index}>
                  {text}
                  <br />
                </span>
              ))}
            </h2>
          </div>
          <div className='row justify-content-center'>
            {teamContent.members.map((member, index) => (
              <div
                key={member.id}
                className={`col-xl-4 col-lg-6 wow fadeIn${
                  index === 0 ? 'Left' : index === 1 ? 'Up' : 'Right'
                }`}
                data-wow-delay={`${(index + 1) * 100}ms`}
              >
                <div className='team__single'>
                  <div className='team__img-box'>
                    <div className='team__img'>
                      <img src={member.image} alt={member.name} />
                      <div className='team__content'>
                        <h4 className='team__name'>
                          <Link href={member.link}>{member.name}</Link>
                        </h4>
                        <p className='team__sub-title'>{member.role}</p>
                      </div>
                      <div className='team__content-hover'>
                        <h4 className='team__name-hover'>
                          <Link href={member.link}>{member.name}</Link>
                        </h4>
                        <p className='team__sub-title-hover'>{member.role}</p>
                        <p className='team__text-hover'>{member.hoverText}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team One End */}
    </>
  )
}
