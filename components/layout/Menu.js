import Link from 'next/link'

export default function Menu() {
  return (
    <ul className='main-menu__list'>
      <li>
        <Link href='/'>Home</Link>
      </li>

      <li className='dropdown'>
        <Link href='#'>Classes</Link>
        <ul>
          <li>
            <Link href='/private-classes'>Private Classes</Link>
          </li>
          <li>
            <Link href='/event-prodigy'>Group Classes</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown'>
        <Link href='#'>Events</Link>
        <ul>
          <li>
            <Link href='/social-ease'>Social Ease</Link>
          </li>
          <li>
            <Link href='/dance-party'>Dance Party</Link>
          </li>
          <li>
            <Link href='/bring-a-friend'>Bring A Friend</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown'>
        <Link href='#'>Dance Styles</Link>
        <ul>
          <li>
            <Link href='/waltz'>Waltz</Link>
          </li>
          <li>
            <Link href='/tango'>Tango</Link>
          </li>
          <li>
            <Link href='/samba'>Samba</Link>
          </li>
          <li>
            <Link href='/foxtrot'>Foxtrot</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href='/calendar'>Calendar</Link>
      </li>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  )
}
