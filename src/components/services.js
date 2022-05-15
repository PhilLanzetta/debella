import React from "react"
import {
  HiOutlineOfficeBuilding,
  HiOutlineHome,
  HiOutlineCheck,
} from "react-icons/hi"
import { BiWater } from "react-icons/bi"
import FadeIn from "./fadeIn"

const serviceArray = [
  {
    title: "commercial paving & sealing",
    description: [
      "Private/Municipal roads",
      "Parking lots",
      "Athletic courts",
      "Millings",
      "Patchwork",
      "Professional grade seal coating",
      "Maintenance",
    ],
    icon: <HiOutlineOfficeBuilding className="service-icon" />,
    id: 1,
  },
  {
    title: "residential paving & sealing",
    description: [
      "Driveways",
      "Private roads",
      "Athletic courts",
      "Millings",
      "Patchwork",
      "SealMaster seal coating",
    ],
    icon: <HiOutlineHome className="service-icon" />,
    id: 2,
  },
  {
    title: "drainage",
    description: [
      "Pipe drainage",
      "Catch basin",
      "Storm drain installation & repair",
    ],
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
              <ul>
                {description.map((item, index) => (
                  <li key={index}>
                    <HiOutlineCheck className="check-icon" /> {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}

export default Services
