import { forwardRef } from "react"
import { skills, stats } from "../const"
import { Card } from "./ui/Card"
import { Div } from "./ui/Div"

export const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Div ref={ref} variant="section" className="bg-gray-50">
      <Div variant="container">
        <div className="text-center mb-16">
          <p className="text-blue-600 mb-6 tracking-wide">About me</p>
          <h2 className="mb-6">Designer with a passion for details</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="">
            <p className="mb-6">I have over 5 years of experience creating web and mobile applications, corporate websites, and branding. I've worked with both large companies and startups, helping them create products that users love.</p>
            <p className="mb-6">I specialize in UX/UI design for web and mobile platforms, creating design systems, and visual branding. I believe that good design is a balance between aesthetics and functionality.</p>
            <p>My goal is to create interfaces that don't need instructions and help businesses achieve their goals through thoughtful design.</p>
          </div>
          {/* Skills and Tools using the custom "Card" component and const file in folder of const*/}
          <div className="">
            <h3 className="mb-6">Skills and Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Card variant="skills" key={skill}>{skill}</Card>
              ))}
            </div>
          </div>
        </div>
        {/* Statistics cards using the custom "Card" component and const file in folder of const*/}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card variant="stats" key={index}>
              <div className="text-5xl mb-3 text-blue-600">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </Div>
    </Div>
  )
}
)
