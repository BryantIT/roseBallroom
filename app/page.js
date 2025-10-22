import Layout from '@/components/layout/Layout'
import Banner from '@/components/sections/home/Banner'
import Reasons from '@/components/sections/home/Reasons'
import SlidingText from '@/components/sections/home/SlidingText'
import TeamOne from '@/components/sections/home/TeamOne'
import DanceNumbers from '@/components/sections/home/DanceNumbers'
import GalleryOne from '@/components/sections/home/GalleryOne'
import CTA from '@/components/sections/home/CTA'
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Reasons />
        <SlidingText />
        <TeamOne />
        <DanceNumbers />
        <GalleryOne />
        <CTA />
      </Layout>
    </>
  )
}
