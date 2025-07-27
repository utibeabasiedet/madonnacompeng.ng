import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Users, MapPin, Target, Lightbulb } from "lucide-react"

export default function ResearchPage() {
  const researchProjects = [
    {
      id: 1,
      title:
        "Implementation of Steady Power Supply Using 5KVA Inverter Microcontroller-Based Software and Solar System",
      researchers: [
        { name: "U. J. Eze", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "A. Nsodukwa", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "A. Ani", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        {
          name: "U.D. Abonyi",
          affiliation:
            "Dept of Electrical / Electronic Engineering, Enugu state university of science and Technology (ESUT)",
        },
        { name: "U.N. Nwawelu", affiliation: "Department of Electronic Engineering, University of Nigeria Nsukka" },
      ],
      description:
        "This research aims to provide a reliable and uninterrupted power supply to the Computer Engineering Department, with the long-term goal of extending the solution to the entire Madonna University, Akpugo Campus.",
      objectives: [
        "Determine total power requirements of the Computer Engineering Department and broader university campus",
        "Analyze components necessary for implementation",
        "Develop microcontroller-based system and solar power system",
        "Create 5kVA microcontroller-based system capable of converting solar energy into usable electrical power",
      ],
      tags: ["Power Systems", "Solar Energy", "Microcontroller", "Renewable Energy"],
    },
    {
      id: 2,
      title: "Non-Linear System Identification and Control Using Artificial Intelligent Controller",
      researchers: [
        { name: "U. J. Eze", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "M.C Obi", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "A. Ani", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        {
          name: "I.I Eneh",
          affiliation:
            "Dept of Electrical / Electronic Engineering, Enugu state university of science and Technology (ESUT)",
        },
        { name: "I Obiora-okafor", affiliation: "Petroleum Engineering, Nnamdi Azikiwe University" },
      ],
      description:
        "This research focuses on the application of artificial neural network (ANN) in identifying and controlling non-linear systems for autonomous robots, addressing challenges with conventional control strategies.",
      objectives: [
        "Identify unknown dynamic variations of non-linear systems like robot arm movement and positioning",
        "Control dynamic parameter variations effectively",
        "Achieve fast response of robots to operational demands",
        "Ensure good control performance while maintaining system efficiency",
        "Apply solutions to related problems in robotics and automation",
      ],
      tags: ["Artificial Intelligence", "Neural Networks", "Robotics", "Control Systems"],
    },
    {
      id: 3,
      title: "Implementation and Hosting Website for Faculty of Engineering and Technology Madonna University Nigeria",
      researchers: [
        { name: "M. C. Obi", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "A. Isizoh", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "C Nwaebonyi", affiliation: "Dept of Computer Engineering, Federal University Ndufu Ikwo (FUNI)" },
        {
          name: "I N. F Ugwoke",
          affiliation: "Department of Computer Science, Federal University of Agriculture Umudike",
        },
      ],
      description:
        "Implementation and hosting of a comprehensive website for the Faculty of Engineering, Madonna University Nigeria Akpugo campus, creating a dynamic and user-friendly platform to enhance communication and information dissemination.",
      objectives: [
        "Create dynamic and user-friendly platform for enhanced communication",
        "Implement faculty directory and course catalogs",
        "Develop news/event sections and contact portals",
        "Build robust backend architecture using content management system (CMS)",
        "Facilitate easy updates and maintenance for stakeholders",
      ],
      tags: ["Web Development", "CMS", "Digital Platform", "Information Systems"],
    },
    {
      id: 4,
      title: "Effect of Weather Conditions on Wireless Communication System",
      researchers: [
        { name: "A.A. Ani", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "U.J. Eze", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "M.C. Obi", affiliation: "Department of Computer Engineering, Madonna University Nigeria" },
        { name: "Ngbachi", affiliation: "Dept of Electrical/Electronic Engineering ESUT" },
      ],
      description:
        "Investigation of how various weather conditions affect the performance of wireless communication systems within the Faculty of Engineering, Madonna University, Akpugo Campus.",
      objectives: [
        "Investigate effects of weather conditions on wireless communication performance",
        "Study impact of rainfall, humidity, temperature, and wind on radio wave propagation",
        "Guide selection and deployment of weather-resilient communication systems",
        "Design adaptive systems that maintain performance under varying conditions",
        "Enhance communication reliability and reduce maintenance costs",
      ],
      tags: ["Wireless Communication", "Weather Analysis", "Signal Processing", "Environmental Impact"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Work in Progress</h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">Computer Engineering Department</p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>Faculty of Engineering and Technology</span>
            </div>
            <p className="text-blue-200 mt-2">Madonna University Nigeria - Akpugo Campus</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advancing Technology Through Innovation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our research initiatives focus on cutting-edge technologies and practical solutions that address
                real-world challenges in power systems, artificial intelligence, web technologies, and wireless
                communications.
              </p>
            </div>

            {/* Research Projects */}
            <div className="space-y-8">
              {researchProjects.map((project, index) => (
                <Card key={project.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3">
                          {project.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        <Lightbulb className="h-4 w-4" />
                        <span className="text-sm font-medium">Project {index + 1}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        Research Overview
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Objectives */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Objectives</h4>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    {/* Research Team */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        Research Team
                      </h4>
                      <div className="grid gap-3 md:grid-cols-2">
                        {project.researchers.map((researcher, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <p className="font-medium text-gray-900">{researcher.name}</p>
                            <p className="text-sm text-gray-600">{researcher.affiliation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Our Research?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                For more information about our research projects, collaboration opportunities, or to discuss potential
                partnerships, please contact the Computer Engineering Department.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Madonna University Nigeria, Akpugo Campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
