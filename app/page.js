import Layout from '@/components/layout/Layout'
import Banner from '@/components/sections/home/Banner'
import Reasons from '@/components/sections/home/Reasons'
import SlidingText from '@/components/sections/home/SlidingText'
import Team from '@/components/sections/home/Team'
import DanceNumbers from '@/components/sections/home/DanceNumbers'
import Gallery from '@/components/sections/home/Gallery'
import CTA from '@/components/sections/home/CTA'
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Reasons />
        <SlidingText />
        <Team />
        <DanceNumbers />
        <Gallery />
        <CTA />
      </Layout>
    </>
  )
}
