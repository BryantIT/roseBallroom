import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Site Footer Start */}
      <footer className='site-footer'>
        <div className='site-footer__shape-1 float-bob-y'>
          <img src='/assets/images/shapes/site-footer-shape-1.png' alt='' />
        </div>
        <div className='site-footer__top'>
          <div className='container'>
            <div className='site-footer__top-inner'>
              <div className='site-footer__logo'>
                <Link href='/'>
                  <img src='/assets/images/resources/logo-1.png' alt='' />
                </Link>
              </div>
              <div className='site-footer__social'>
                <Link href='#'>
                  <i className='icon-facebook'></i>
                </Link>
                <Link href='#'>
                  <i className='icon-fi'></i>
                </Link>
                <Link href='#'>
                  <i className='icon-instagram'></i>
                </Link>
                <Link href='#'>
                  <i className='icon-pinterest'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='site-footer__middle'>
          <div className='container'>
            <div className='site-footer__middle-inner'>
              <div className='row'>
                <div
                  className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='100ms'
                >
                  <div className='footer-widget__column footer-widget__events'>
                    <div className='footer-widget__title-box'>
                      <h3 className='footer-widget__title'>Upcoming Events</h3>
                    </div>
                    <ul className='footer-widget__events-list list-unstyled'>
                      <li>
                        <p>October 17th At 8:00pm</p>
                        <h5>Pumpkin Spice Theme Night</h5>
                        <Link href='/event-details'>
                          Free Lesson <span className='icon-arrow-right'></span>
                        </Link>
                      </li>
                      <li>
                        <p>October 24th At 8:00pm</p>
                        <h5>Halloween Theme Night</h5>
                        <Link href='/event-details'>
                          Free Lesson <span className='icon-arrow-right'></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='200ms'
                >
                  <div className='footer-widget__column footer-widget__link'>
                    <div className='footer-widget__title-box'>
                      <h3 className='footer-widget__title'>Quick links</h3>
                    </div>
                    <ul className='footer-widget__link-list list-unstyled'>
                      <li>
                        <Link href='/about'>About Us</Link>
                      </li>
                      <li>
                        <Link href='/classes'>Classes</Link>
                      </li>
                      <li>
                        <Link href='/events'>Events</Link>
                      </li>
                      <li>
                        <Link href='/blog'>Free Lessons</Link>
                      </li>
                      <li>
                        <Link href='/contact'>Dance Styles</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='300ms'
                >
                  <div className='footer-widget__column footer-widget__our-company'>
                    <div className='footer-widget__title-box'>
                      <h3 className='footer-widget__title'>Our Team</h3>
                    </div>
                    <ul className='footer-widget__link-list list-unstyled'>
                      <li>
                        <Link href='/chris-rose'>Chris Rose</Link>
                      </li>
                      <li>
                        <Link href='/tanika-rose'>Tanika Rose</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='col-xl-3 col-lg-6 col-md-6 wow fadeInUp'
                  data-wow-delay='400ms'
                >
                  <div className='footer-widget__column footer-widget__contact'>
                    <div className='footer-widget__title-box'>
                      <h3 className='footer-widget__title'>Contact</h3>
                    </div>
                    <div className='footer-widget__contact-inner'>
                      <ul className='footer-widget__contact-list list-unstyled'>
                        <li>
                          <div className='icon'>
                            <span className='icon-envelop'></span>
                          </div>
                          <div className='text'>
                            <p>
                              <a href='mailto:roseballroom2023@gmail.com'>
                                roseballroom2023@gmail.com
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className='icon'>
                            <span className='icon-pin'></span>
                          </div>
                          <div className='text'>
                            <p>117 N Main Street , Dickson, TN</p>
                          </div>
                        </li>
                        <li>
                          <div className='icon'>
                            <span className='icon-call'></span>
                          </div>
                          <div className='text'>
                            <p>
                              <a href='tel:(615) 375-1204'>(615) 375-1204</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='site-footer__bottom'>
          <div className='container'>
            <div className='site-footer__bottom-inner'>
              <p className='site-footer__bottom-text'>
                © Rose Ballroom 2025 | All Rights Reserved
              </p>
              <ul className='list-unstyled site-footer__bottom-menu'>
                <li>
                  <Link href='/about'>Terms & Condition</Link>
                </li>
                <li>
                  <Link href='/about'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='/about'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer End */}
    </>
  )
}
