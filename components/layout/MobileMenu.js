'use client'
import Link from 'next/link'
import { useState } from 'react'

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
    subMenuKey: '',
  })

  const handleToggle = (key, subMenuKey = '') => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: '',
        subMenuKey: '',
      })
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      })
    }
  }
  return (
    <>
      {/*End Mobile Menu */}
      <div className='mobile-nav__wrapper'>
        <div
          className='mobile-nav__overlay mobile-nav__toggler'
          onClick={handleMobileMenu}
        />
        {/* /.mobile-nav__overlay */}
        <div className='mobile-nav__content'>
          <span
            className='mobile-nav__close mobile-nav__toggler'
            onClick={handleMobileMenu}
          >
            <i className='fa fa-times' />
          </span>
          <div className='logo-box'>
            <Link href='/' aria-label='logo image'>
              <img
                src='/assets/images/resources/logo-1.png'
                width='150'
                alt='Logo'
              />
            </Link>
          </div>
          {/* /.logo-box */}
          <div className='mobile-nav__container'>
            <ul className='main-menu__list'>
              <li>
                <Link href='/' onClick={handleMobileMenu}>
                  Home{' '}
                </Link>
              </li>

              <li
                className={isActive.key == 2 ? 'dropdown current' : 'dropdown'}
              >
                <Link href='#' onClick={handleMobileMenu}>
                  About Us
                </Link>
                <ul
                  style={{ display: `${isActive.key == 2 ? 'block' : 'none'}` }}
                >
                  <li>
                    <Link href='/our-story' onClick={handleMobileMenu}>
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link href='/instructors' onClick={handleMobileMenu}>
                      Instructors
                    </Link>
                  </li>
                  <li>
                    <Link href='/locations' onClick={handleMobileMenu}>
                      Locations
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonials' onClick={handleMobileMenu}>
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href='/pricing' onClick={handleMobileMenu}>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href='/gallery' onClick={handleMobileMenu}>
                      Gallery
                    </Link>
                  </li>
                </ul>
                <div
                  className={
                    isActive.key == 2 ? 'dropdown-btn open' : 'dropdown-btn'
                  }
                  onClick={() => handleToggle(2)}
                >
                  <span className='fa fa-angle-right' />
                </div>
              </li>

              <li
                className={isActive.key == 3 ? 'dropdown current' : 'dropdown'}
              >
                <Link href='#' onClick={handleMobileMenu}>
                  Classes
                </Link>
                <ul
                  style={{ display: `${isActive.key == 3 ? 'block' : 'none'}` }}
                >
                  <li>
                    <Link href='/private-classes' onClick={handleMobileMenu}>
                      Private Classes
                    </Link>
                  </li>
                  <li>
                    <Link href='/group-classes' onClick={handleMobileMenu}>
                      Group Classes
                    </Link>
                  </li>
                </ul>
                <div
                  className={
                    isActive.key == 3 ? 'dropdown-btn open' : 'dropdown-btn'
                  }
                  onClick={() => handleToggle(3)}
                >
                  <span className='fa fa-angle-right' />
                </div>
              </li>

              <li
                className={isActive.key == 3 ? 'dropdown current' : 'dropdown'}
              >
                <Link href='#' onClick={handleMobileMenu}>
                  Styles
                </Link>
                <ul
                  style={{ display: `${isActive.key == 3 ? 'block' : 'none'}` }}
                >
                  <li>
                    <Link href='/waltz' onClick={handleMobileMenu}>
                      Waltz
                    </Link>
                  </li>
                  <li>
                    <Link href='/tango' onClick={handleMobileMenu}>
                      Tango
                    </Link>
                  </li>
                  <li>
                    <Link href='/foxtrot' onClick={handleMobileMenu}>
                      Foxtrot
                    </Link>
                  </li>
                </ul>
                <div
                  className={
                    isActive.key == 3 ? 'dropdown-btn open' : 'dropdown-btn'
                  }
                  onClick={() => handleToggle(3)}
                >
                  <span className='fa fa-angle-right' />
                </div>
              </li>

              <li
                className={isActive.key == 4 ? 'dropdown current' : 'dropdown'}
              >
                <Link href='#' onClick={handleMobileMenu}>
                  Events
                </Link>
                <ul
                  style={{ display: `${isActive.key == 4 ? 'block' : 'none'}` }}
                >
                  <li>
                    <Link href='/calendar' onClick={handleMobileMenu}>
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link href='/social-ease' onClick={handleMobileMenu}>
                      Social Ease
                    </Link>
                  </li>
                  <li>
                    <Link href='/dance-party' onClick={handleMobileMenu}>
                      Dance Party
                    </Link>
                  </li>
                </ul>
                <div
                  className={
                    isActive.key == 4 ? 'dropdown-btn open' : 'dropdown-btn'
                  }
                  onClick={() => handleToggle(4)}
                >
                  <span className='fa fa-angle-right' />
                </div>
              </li>

              <li>
                <Link href='/contact' onClick={handleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className='mobile-nav__contact list-unstyled'>
            <li>
              <i className='fa fa-envelope' />
              <a href='mailto:roseballroom2023@gmail.com'>
                roseballroom2023@gmail.com
              </a>
            </li>
            <li>
              <i className='fa fa-phone-alt' />
              <a href='tel:(615) 375 1204'>(615) 375 1204</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className='mobile-nav__top'>
            <div className='mobile-nav__social'>
              <a href='#' className='fab fa-twitter' />
              <a href='#' className='fab fa-facebook-square' />
              <a href='#' className='fab fa-pinterest-p' />
              <a href='#' className='fab fa-instagram' />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>

      <div
        className='nav-overlay'
        style={{ display: `${isSidebar ? 'block' : 'none'}` }}
        onClick={handleSidebar}
      />
    </>
  )
}
export default MobileMenu
