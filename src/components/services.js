import React from "react"
import { HiOutlineOfficeBuilding, HiOutlineHome } from "react-icons/hi"
import { BiWater } from "react-icons/bi"
import FadeIn from "./fadeIn"

const serviceArray = [
  {
    title: "commercial paving & sealing",
    description:
      "Private/Municipal roads, parking lots, athletic courts, millings, patchwork, professional grade seal coating, maintenance",
    icon: <HiOutlineOfficeBuilding className="service-icon" />,
    id: 1,
  },
  {
    title: "residential paving & sealing",
    description:
      "Driveways, private roads, athletic courts, millings, patchwork, SealMaster seal coating",
    icon: <HiOutlineHome className="service-icon" />,
    id: 2,
  },
  {
    title: "drainage",
    description: "pipe drainage",
    icon: <BiWater className="service-icon" />,
    id: 3,
  },
]

const Services = () => {
  return (
    <section className="services">
      <h2>Services</h2>
      <div className="service-container">
        {serviceArray.map(service => {
          const { id, icon, title, description } = service
          return (
            <FadeIn key={id} className="service">
              {icon}
              <h3>{title}</h3>
              <div className="underline"></div>
              <p>{description}</p>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}

export default Services
