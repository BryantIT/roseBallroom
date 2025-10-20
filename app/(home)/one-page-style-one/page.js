import Layout from '@/components/layout/Layout'
import Banner from '@/components/sections/onepagehome1/Banner'
import ServicesOne from '@/components/sections/onepagehome1/ServicesOne'
import EventOne from '@/components/sections/onepagehome1/EventOne'
import SlidingText from '@/components/sections/onepagehome1/SlidingText'
import BuyTicket from '@/components/sections/onepagehome1/BuyTicket'
import TeamOne from '@/components/sections/onepagehome1/TeamOne'
import EventDirection from '@/components/sections/onepagehome1/EventDirection'
import GalleryOne from '@/components/sections/onepagehome1/GalleryOne'
import ScheduleOne from '@/components/sections/onepagehome1/ScheduleOne'
import CTAOne from '@/components/sections/onepagehome1/CTAOne'
export default function Home() {
  return (
    <>
      <Layout headerStyle={5} footerStyle={1}>
        <Banner />
        <ServicesOne />
        <SlidingText />
        <EventOne />
        <BuyTicket />
        <TeamOne />
        <EventDirection />
        <GalleryOne />
        <ScheduleOne />
        <CTAOne />
      </Layout>
    </>
  )
}
