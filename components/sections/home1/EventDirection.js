'use client' // Ensures the component runs on the client side

import { useState } from 'react'
import CountUp from 'react-countup'

export default function EventDirection() {
  // State for dynamic content
  const [eventContent, setEventContent] = useState({
    tagline: 'By the numbers',
    title: 'Creating Memories <br> One Dance at a Time',
    text: 'Dance brings people together in celebration and shared joy. From elegant galas and social nights to weddings and showcases, every event is a chance to connect, express, and move as one.',
    phone: '6153751204',
    callText: 'Call Us',
    callNumber: '(615) 375-1204',
    iconSrc: '/assets/images/icon/event-direction-chat-icon.png',
  })

  return (
    <>
      {/* Event Direction Start */}
      <section className='event-direction'>
        <div className='container'>
          <div className='event-direction__inner'>
            <div className='row'>
              <div className='col-xl-7 wow fadeInLeft' data-wow-delay='100ms'>
                <div className='event-direction__left'>
                  <div className='section-title text-left'>
                    <div className='section-title__tagline-box'>
                      <span className='section-title__tagline'>
                        {eventContent.tagline}
                      </span>
                    </div>
                    <h2
                      className='section-title__title'
                      dangerouslySetInnerHTML={{ __html: eventContent.title }}
                    ></h2>
                  </div>
                  <p
                    className='event-direction__text'
                    dangerouslySetInnerHTML={{ __html: eventContent.text }}
                  ></p>
                  <div className='event-direction__call'>
                    <div className='event-direction__call-icon'>
                      <img src={eventContent.iconSrc} alt='Call Icon' />
                    </div>
                    <div className='event-direction__call-content'>
                      <p>{eventContent.callText}</p>
                      <h4>
                        <a href={`tel:${eventContent.phone}`}>
                          {eventContent.callNumber}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-5 wow fadeInRight' data-wow-delay='300ms'>
                <div className='event-direction__right'>
                  <ul className='event-direction__counter list-unstyled'>
                    <li>
                      <div className='event-direction__counter-single'>
                        <div className='event-direction__counter-box'>
                          <h3 className='odometer'>
                            <CountUp start={0} end={100} duration={2} />
                          </h3>
                          <span className='event-direction__counter-plus'>
                            +
                          </span>
                        </div>
                        <p className='event-direction__counter-text'>
                          Students Taught
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='event-direction__counter-single'>
                        <div className='event-direction__counter-box'>
                          <h3 className='odometer'>
                            <CountUp start={0} end={101} duration={2} />
                          </h3>
                          <span className='event-direction__counter-plus'>
                            +
                          </span>
                        </div>
                        <p className='event-direction__counter-text'>
                          Showcases Hosted
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='event-direction__counter-single'>
                        <div className='event-direction__counter-box'>
                          <h3 className='odometer'>
                            <CountUp start={0} end={500} duration={2} />
                          </h3>
                          <span className='event-direction__counter-plus'>
                            +
                          </span>
                        </div>
                        <p className='event-direction__counter-text'>
                          Dance Parties Held
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='event-direction__counter-single'>
                        <div className='event-direction__counter-box'>
                          <h3 className='odometer'>
                            <CountUp start={0} end={20} duration={2} />
                          </h3>
                          <span className='event-direction__counter-plus'>
                            +
                          </span>
                        </div>
                        <p className='event-direction__counter-text'>
                          Competitions Won
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Event Direction End */}
    </>
  )
}
