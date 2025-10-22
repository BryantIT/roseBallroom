import Layout from '@/components/layout/Layout'
import Banner from '@/components/sections/home3/Banner'
import FeatureOne from '@/components/sections/home3/FeatureOne'
import ScheduleThree from '@/components/sections/home3/ScheduleThree'
import TeamOne from '@/components/sections/home3/TeamOne'
import TicketOne from '@/components/sections/home3/TicketOne '
import CTA from '@/components/sections/home3/CTA'

export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <Banner />
        <FeatureOne />
        <ScheduleThree />
        <TeamOne />
        <TicketOne />
        <CTA />
      </Layout>
    </>
  )
}
