'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  loop: false,
  rewind: true,
  speed: 600, // ms for the slide transition
  autoplay: {
    delay: 8000, // ms each slide is shown
    disableOnInteraction: false, // keep autoplay after user swipes/clicks
    pauseOnMouseEnter: true, // pause when hovered (nice for hero sliders)
  },
  breakpoints: {
    0: { autoplay: { delay: 7000 } }, // phones
    768: { autoplay: { delay: 8500 } }, // tablets
    1200: { autoplay: { delay: 8000 } }, // desktops
  },
  pagination: {
    el: '#main-slider-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '#main-slider__swiper-button-next',
    prevEl: '#main-slider__swiper-button-prev',
  },
}

export default function Banner() {
  return (
    <>
      {/* banner-one */}
      <section className='main-slider'>
        <Swiper
          {...swiperOptions}
          className='swiper-container thm-swiper__slider'
        >
          <SwiperSlide className='swiper-slide'>
            <div className='main-slider__img'>
              <img src='assets/images/resources/confidence.png' alt='' />
            </div>
            <div className='main-slider__shape-1'>
              <img src='assets/images/shapes/main-slider-shape-1.png' alt='' />
            </div>
            <div className='main-slider__shape-2'>
              <img src='assets/images/shapes/main-slider-shape-2.png' alt='' />
            </div>
            <div className='main-slider__start-1'>
              <img src='assets/images/shapes/main-slider-star-1.png' alt='' />
            </div>
            <div className='main-slider__start-2 zoominout'>
              <img src='assets/images/shapes/main-slider-star-2.png' alt='' />
            </div>
            <div className='main-slider__start-3'>
              <img src='assets/images/shapes/main-slider-star-3.png' alt='' />
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='main-slider__content'>
                    <p className='main-slider__sub-title'>Confidence</p>
                    <h2 className='main-slider__title'>
                      Increase your <br /> <span>Confidence</span>
                    </h2>
                    <p className='main-slider__text'>
                      Ballroom dance builds confidence through movement,
                      posture, and connection. As dancers learn to lead or
                      follow, they gain awareness, poise, and self-expression
                      that extend beyond the dance floor. Progress, creativity,
                      and community transform nervousness into genuine
                      confidence — both in motion and in life.
                    </p>

                    <div className='main-slider__btn-box'>
                      <Link
                        href='/contact'
                        className='main-slider__btn thm-btn'
                      >
                        Free Lesson
                        <span className='icon-arrow-right'></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className='main-slider__img'>
              <img src='assets/images/resources/trust.png' alt='' />
            </div>
            <div className='main-slider__shape-1'>
              <img src='assets/images/shapes/main-slider-shape-1.png' alt='' />
            </div>
            <div className='main-slider__shape-2'>
              <img src='assets/images/shapes/main-slider-shape-2.png' alt='' />
            </div>
            <div className='main-slider__start-1'>
              <img src='assets/images/shapes/main-slider-star-1.png' alt='' />
            </div>
            <div className='main-slider__start-2 zoominout'>
              <img src='assets/images/shapes/main-slider-star-2.png' alt='' />
            </div>
            <div className='main-slider__start-3'>
              <img src='assets/images/shapes/main-slider-star-3.png' alt='' />
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='main-slider__content'>
                    <p className='main-slider__sub-title'>
                      Communication and Trust
                    </p>
                    <h2 className='main-slider__title'>
                      Build <br /> <span>Communication and Trust</span>
                    </h2>
                    <p className='main-slider__text'>
                      Ballroom dance builds trust and communication through
                      movement. Each step depends on subtle cues—a shift in
                      weight, a change in hand pressure, a shared glance—that
                      speak without words. As partners learn to listen and
                      respond, they develop empathy, connection, and confidence
                      that extend far beyond the dance floor.
                    </p>

                    <div className='main-slider__btn-box'>
                      <Link
                        href='/contact'
                        className='main-slider__btn thm-btn'
                      >
                        Free Lesson
                        <span className='icon-arrow-right'></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide'>
            <div className='main-slider__img'>
              <img src='assets/images/resources/emotion.png' alt='' />
            </div>
            <div className='main-slider__shape-1'>
              <img src='assets/images/shapes/main-slider-shape-1.png' alt='' />
            </div>
            <div className='main-slider__shape-2'>
              <img src='assets/images/shapes/main-slider-shape-2.png' alt='' />
            </div>
            <div className='main-slider__start-1'>
              <img src='assets/images/shapes/main-slider-star-1.png' alt='' />
            </div>
            <div className='main-slider__start-2 zoominout'>
              <img src='assets/images/shapes/main-slider-star-2.png' alt='' />
            </div>
            <div className='main-slider__start-3'>
              <img src='assets/images/shapes/main-slider-star-3.png' alt='' />
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='main-slider__content'>
                    <p className='main-slider__sub-title'>
                      Emotions and Stress
                    </p>
                    <h2 className='main-slider__title'>
                      An Outlet for <br />{' '}
                      <span>Emotional Expression and Stress Relief</span>
                    </h2>
                    <p className='main-slider__text'>
                      Through rhythm and movement, dancers express joy, passion,
                      and even sadness in ways words can’t. Each step becomes a
                      release — freeing tension, reducing stress, and restoring
                      balance. From the elegance of a waltz to the energy of a
                      swing, dance nurtures emotional well-being and leaves the
                      spirit lighter.
                    </p>

                    <div className='main-slider__btn-box'>
                      <Link
                        href='/contact'
                        className='main-slider__btn thm-btn'
                      >
                        Free Lesson <span className='icon-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='swiper-pagination' id='main-slider-pagination' />
      </section>
      {/* banner-one */}
    </>
  )
}
