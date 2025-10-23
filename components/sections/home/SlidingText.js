export default function SlidingText() {
  const danceStyles = [
    'Waltz',
    'Rumba',
    'Foxtrot',
    'Swing',
    'Tango',
    'Merengue',
  ]
  return (
    <>
      {/* Sliding Text Start */}
      <section className='sliding-text-one'>
        <div className='sliding-text-one__wrap'>
          <ul className='sliding-text__list marquee_mode'>
            {danceStyles.map((style, index) => (
              <li key={index}>
                <h2 data-hover={style} className='sliding-text__title'>
                  {style}
                  <img
                    src='/assets/images/icon/star-icon.png'
                    alt='Star Icon'
                  />
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Sliding Text End */}
    </>
  )
}
