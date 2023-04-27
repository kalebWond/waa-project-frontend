import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HomePageCard from '../components/Cards/HomePageCard'
import { Col, Row } from 'react-bootstrap'

function Anonymous() {
  const linkFarm = [{
    id: 1,
    title: "Find out how much you can afford",
    description: "We'll help you estimate your budget range",
    icon: "Try our mortgage calculator"
  },
  {
    id: 2,
    title: "well help you estimate your budget range",
    description: "Get an in-depth look at vour monthlv and closing costs",
    icon: "Try our mortgage calculator"
  },
  {
    id: 3,
    title: "Find out how much you can afford",
    description: "We'll help you estimate your budget range",
    icon: "Try our mortgage calculator"
  }]

  const [linkFarmData, setLinkFarmData] = useState(linkFarm)
  return (
    <div className='list_cart'>
      <h1 className='text-3xl text-center text-white font-italian-roman italic pt-5'>Landing pages</h1>
      <p className='text-center text-white font-italian-roman pt-5'>Let’s find a home that’s perfect for you</p>

      <div className='footer'>
        <h3>Discover how we can help</h3>
        <Row>
          {linkFarmData.map((item, index) => {
            return (
              <Col>
                <HomePageCard data={item} key={index} />
              </Col>
            )
          })}
        </Row>
      </div>


    </div>
  )
}

export default Anonymous