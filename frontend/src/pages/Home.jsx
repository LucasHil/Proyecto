import React from 'react'
import Hero from '../components/user/Hero.jsx'
import LatestCollection from '../components/user/LatestCollection.jsx'
import BestSeller from '../components/user/BestSeller.jsx'
import Banner from '../components/user/Banner.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Banner/>
    </div>
  )
}

export default Home
