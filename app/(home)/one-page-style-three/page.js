import Layout from '@/components/layout/Layout'
import Banner from '@/components/sections/onepagehome3/Banner'
import FeatureOne from '@/components/sections/onepagehome3/FeatureOne'
import ScheduleThree from '@/components/sections/onepagehome3/ScheduleThree'
import TeamOne from '@/components/sections/onepagehome3/TeamOne'
import TicketOne from '@/components/sections/onepagehome3/TicketOne '
import CTAOne from '@/components/sections/onepagehome3/CTAOne'

export default function Home() {
  return (
    <>
      <Layout headerStyle={7} footerStyle={1}>
        <Banner />
        <FeatureOne />
        <ScheduleThree />
        <TeamOne />
        <TicketOne />
        <CTAOne />
      </Layout>
    </>
  )
}
