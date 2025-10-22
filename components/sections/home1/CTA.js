import Link from 'next/link'

export default function CTA() {
  return (
    <section className='cta'>
      <div className='container'>
        <div className='cta__inner'>
          <h3 className='cta__title'>Subscribe to Our Newsletter</h3>
          <form className='cta__form mc-form' data-url='MC_FORM_URL' noValidate>
            <div className='cta__form-input-box'>
              <input
                type='email'
                placeholder='Enter your email'
                name='EMAIL'
                required
              />
              <button type='submit' className='cta__btn'>
                <span className='icon-paper-plan'></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
