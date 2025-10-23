export default function SlidingText() {
  return (
    <>
      {/* Sliding Text Start */}
      <section className='sliding-text-one'>
        <div className='sliding-text-one__wrap'>
          <ul className='sliding-text__list marquee_mode'>
            <li>
              <h2 data-hover='Waltz' className='sliding-text__title'>
                Waltz
                <img src='/assets/images/icon/star-icon.png' alt='Star Icon' />
              </h2>
            </li>
            <li>
              <h2 data-hover='Rumba' className='sliding-text__title'>
                Rumba
                <img src='/assets/images/icon/star-icon.png' alt='Star Icon' />
              </h2>
            </li>
            <li>
              <h2 data-hover='Foxtrot' className='sliding-text__title'>
                Foxtrot
                <img src='/assets/images/icon/star-icon.png' alt='Star Icon' />
              </h2>
            </li>
            <li>
              <h2 data-hover='Swing' className='sliding-text__title'>
                Swing
                <img src='/assets/images/icon/star-icon.png' alt='Star Icon' />
              </h2>
            </li>
            <li>
              <h2 data-hover='Tango' className='sliding-text__title'>
                Tango
                <img src='/assets/images/icon/star-icon.png' alt='Star Icon' />
              </h2>
            </li>
            <li>
              <h2 data-hover='Merengue' className='sliding-text__title'>
                Merengue
                <img src='/assets/images/icon/star-icon.png' alt='Star Icon' />
              </h2>
            </li>
          </ul>
        </div>
      </section>
      {/* Sliding Text End */}
    </>
  )
}
