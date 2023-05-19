import React from 'react'
import ServiceDetails from '../ServiceDetails/ServiceDetails'
import OurPortfolio from '../OurPortfolio/OurPortfolio'
import PricingPlans from '../PricingPlans/PricingPlans'

const Home = () => {
  return (
    <div>
        <ServiceDetails></ServiceDetails>
        <PricingPlans></PricingPlans>
        <OurPortfolio></OurPortfolio>
    </div>
  )
}

export default Home