import Link from 'next/link'

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      {/*Page Header Start*/}
      <section className='page-header'>
        <div className='page-header__bg'></div>
        <div className='container'>
          <div className='page-header__inner'>
            <h2>{breadcrumbTitle}</h2>
            <div className='thm-breadcrumb__box'></div>
          </div>
        </div>
      </section>
      {/*Page Header End*/}
    </>
  )
}
