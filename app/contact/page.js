import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { ADDRESS, EMAIL, PHONE } from '../helpers/constants'

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle='CONTACT US'>
        <div>
          {/*Contact One Start*/}
          <section className='contact-one'>
            <div className='container'>
              <div className='contact-one__inner'>
                <h3 className='contact-one__title'>
                  We want to hear from you!
                </h3>
                <p className='contact-one__text'>
                  Send us a message using the form below, email, call, or drop
                  by. Be sure to mention you are interested in a free lesson!
                </p>
                <form
                  className='contact-form-validated contact-one__form'
                  action='assets/inc/sendemail.php'
                  method='post'
                  noValidate
                >
                  <div className='row'>
                    <div className='col-xl-6 col-lg-6'>
                      <div className='contact-one__input-box'>
                        <input
                          type='text'
                          name='name'
                          placeholder='Your Name'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6'>
                      <div className='contact-one__input-box'>
                        <input
                          type='email'
                          name='email'
                          placeholder='Your Email'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6'>
                      <div className='contact-one__input-box'>
                        <input
                          type='text'
                          name='phone'
                          placeholder='Phone Number'
                          required
                        />
                      </div>
                    </div>

                    <div className='col-xl-12'>
                      <div className='contact-one__input-box text-message-box'>
                        <textarea
                          name='message'
                          placeholder='Your Message'
                        ></textarea>
                      </div>
                      <div className='contact-one__btn-box'>
                        <button
                          type='submit'
                          className='thm-btn contact-one__btn'
                        >
                          Submit Now<span className='icon-arrow-right'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className='result'></div>
              </div>
            </div>
          </section>
          {/*Contact One End*/}

          {/*Contact Two Start*/}
          <section className='contact-two'>
            <div className='container'>
              <div className='row'>
                {/* Contact Two Single Start */}
                <div className='col-xl-4 col-lg-4'>
                  <div className='contact-two__single'>
                    <div className='contact-two__icon'>
                      <span className='icon-pin'></span>
                    </div>
                    <h3 className='contact-two__title'>Location</h3>
                    <p className='contact-two__text'>{ADDRESS}</p>
                  </div>
                </div>
                {/* Contact Two Single End */}

                {/* Contact Two Single Start */}
                <div className='col-xl-4 col-lg-4'>
                  <div className='contact-two__single'>
                    <div className='contact-two__icon'>
                      <span className='icon-paper-plan'></span>
                    </div>
                    <h3 className='contact-two__title'>E-mail</h3>
                    <p className='contact-two__text'>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}

                {/* Contact Two Single Start */}
                <div className='col-xl-4 col-lg-4'>
                  <div className='contact-two__single'>
                    <div className='contact-two__icon'>
                      <span className='icon-call'></span>
                    </div>
                    <h3 className='contact-two__title'>Contact</h3>
                    <p className='contact-two__text'>
                      <a href={`tel:${PHONE}`}>{PHONE}</a>
                    </p>
                  </div>
                </div>
                {/* Contact Two Single End */}
              </div>
            </div>
          </section>
          {/*Contact Two End*/}

          {/*CTA Start*/}
          <section className='cta'>
            <div className='container'>
              <div className='cta__inner'>
                <h3 className='cta__title'>
                  Get Latest Updates Subscribe <br /> to Our Newsletter
                </h3>
                <form
                  className='cta__form mc-form'
                  data-url='MC_FORM_URL'
                  noValidate
                >
                  <div className='cta__form-input-box'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      name='EMAIL'
                    />
                    <button type='submit' className='cta__btn'>
                      <span className='icon-paper-plan'></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/*CTA End*/}
        </div>
      </Layout>
    </>
  )
}
