import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, BookOpen, Users, FileText } from "lucide-react"

export default function CourseAllocationPage() {
  const facultyData = [
    {
      id: 1,
      name: "Prof. Uzomaka O. E",
      rank: "Professor",
      courses: [
        { code: "CPE 571", title: "Computer Architecture", units: 2 },
        { code: "CPE 311", title: "Digital Electronic circuit", units: 3 },
        { code: "CPE 552", title: "Instrumentation Engineering", units: 2 },
        { code: "CPE 312", title: "Computer organization", units: 3 },
      ],
      totalUnits: 10,
    },
    {
      id: 2,
      name: "Prof. C.I. Kalu",
      rank: "Professor",
      courses: [
        { code: "CPE 521", title: "Computer Graphics & Animation", units: 3 },
        { code: "CPE 471", title: "Microprocessor system & Interfacing", units: 3 },
        { code: "CPE 532", title: "Digital System design with VHDL", units: 3 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 15,
    },
    {
      id: 3,
      name: "Associate Prof. A.N Isizoh",
      rank: "Associate Prof.",
      courses: [
        { code: "CPE 511", title: "Artificial Neural Network", units: 3 },
        { code: "CPE 351", title: "Embedded System Design", units: 3 },
        { code: "CPE 512", title: "Software Engineering", units: 3 },
        { code: "CPE 322", title: "Software Development Techniques", units: 3 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 18,
    },
    {
      id: 4,
      name: "Engr. Dr. Ukamaka. J. Eze",
      rank: "Head of Department",
      courses: [
        { code: "CPE 501", title: "Cyberpreneurship and Cyberlaw", units: 2 },
        { code: "CPE 501", title: "Seminar", units: 2 },
        { code: "CPE 461", title: "Control System", units: 3 },
        { code: "CPE 522", title: "Digital Signal Processing", units: 3 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 16,
    },
    {
      id: 5,
      name: "Engr. Obianuju Obianyo",
      rank: "Lecturer I",
      courses: [
        { code: "CPE 551", title: "Reliability and Maintainability", units: 2 },
        { code: "CPE 451", title: "Prototyping Techniques", units: 3 },
        { code: "CPE 441", title: "Technical Communication", units: 2 },
        { code: "CPE 542", title: "Computer Security Techniques", units: 2 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 15,
    },
    {
      id: 6,
      name: "Engr. Obi M.C.",
      rank: "Lecturer I",
      courses: [
        { code: "CPE 421", title: "Assembly Language Programming", units: 3 },
        { code: "CPE 541", title: "Robotics and Automation", units: 2 },
        { code: "FET 202", title: "Engineer in Society", units: 1 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 12,
    },
    {
      id: 7,
      name: "Engr. Dr. Ejimofor. A",
      rank: "Lecturer II",
      courses: [
        { code: "CPE 231", title: "Computer and Computing", units: 3 },
        { code: "CPE 431", title: "Object Oriented Design", units: 3 },
        { code: "CPE 501", title: "Seminar", units: 2 },
        { code: "CPE 528", title: "Cryptography principle & Application", units: 2 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 16,
    },
    {
      id: 8,
      name: "Engr. Alex Ani",
      rank: "Lecturer II",
      courses: [
        { code: "CPE 331", title: "Entrepreneurial Studies", units: 2 },
        { code: "CPE 221", title: "IT in Engineering", units: 2 },
        { code: "CPE 501", title: "Seminar", units: 2 },
        { code: "CPE 102", title: "Introduction to Computer Engineering", units: 2 },
        { code: "EEE 322", title: "Communication Principles", units: 3 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 17,
    },
    {
      id: 9,
      name: "Anthony Nsodukwa",
      rank: "Lecturer II",
      courses: [
        { code: "CPE 491", title: "Hardware Laboratory", units: 1 },
        { code: "CPE 411", title: "Data Communication and Networking", units: 3 },
        { code: "EEE 332", title: "Analogue Electronic Circuit", units: 3 },
        { code: "CPE 562", title: "Research Project", units: 6 },
      ],
      totalUnits: 13,
    },
    {
      id: 10,
      name: "Mr. Ofielu Walter",
      rank: "Technologist",
      courses: [
        { code: "CPE 351", title: "Software Laboratory", units: 1 },
        { code: "CPE 371", title: "Hardware Laboratory", units: 1 },
        { code: "CPE 562", title: "Research Project Practical", units: 1 },
      ],
      totalUnits: 3,
    },
    {
      id: 11,
      name: "Engr. Adiele Joseph",
      rank: "Technologist",
      courses: [
        { code: "CPE 481", title: "Software Laboratory", units: 1 },
        { code: "CPE 501", title: "Seminar", units: 2 },
        { code: "CPE 562", title: "Research Project Practical", units: 1 },
      ],
      totalUnits: 4,
    },
  ]

  const additionalCourses = [
    { department: "EEE Dept", code: "EEE 361", title: "Measurement and Instrumentation", units: 3 },
    { department: "EEE Dept", code: "EEE 312", title: "Electrical Machines", units: 3 },
  ]

  const getRankColor = (rank: string) => {
    switch (rank) {
      case "Professor":
        return "bg-purple-100 text-purple-800"
      case "Associate Prof.":
        return "bg-blue-100 text-blue-800"
      case "Head of Department":
        return "bg-green-100 text-green-800"
      case "Lecturer I":
        return "bg-orange-100 text-orange-800"
      case "Lecturer II":
        return "bg-yellow-100 text-yellow-800"
      case "Technologist":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mt-[50px] from-blue-50 to-indigo-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8" />
              <h1 className="text-3xl md:text-4xl font-bold">Course Allocation</h1>
            </div>
            <div className="space-y-2 text-blue-100">
              <p className="text-lg font-semibold">Department of Computer Engineering</p>
              <p>Faculty of Engineering and Technology</p>
              <p>Madonna University Nigeria, Akpugo Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{facultyData.length}</p>
                      <p className="text-gray-600">Faculty Members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {facultyData.reduce((total, faculty) => total + faculty.courses.length, 0)}
                      </p>
                      <p className="text-gray-600">Total Courses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {facultyData.reduce((total, faculty) => total + faculty.totalUnits, 0)}
                      </p>
                      <p className="text-gray-600">Total Units</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Faculty Course Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">S/N</TableHead>
                        <TableHead className="min-w-[200px]">Name</TableHead>
                        <TableHead className="min-w-[150px]">Rank</TableHead>
                        <TableHead className="min-w-[400px]">Courses (First and Second Semester)</TableHead>
                        <TableHead className="w-20 text-center">Units</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {facultyData.map((faculty, index) => (
                        <TableRow key={faculty.id}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell className="font-semibold">{faculty.name}</TableCell>
                          <TableCell>
                            <Badge className={getRankColor(faculty.rank)}>{faculty.rank}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-2">
                              {faculty.courses.map((course, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                  <div>
                                    <span className="font-medium text-blue-600">{course.code}:</span>{" "}
                                    <span className="text-gray-700">{course.title}</span>
                                  </div>
                                  <Badge variant="outline">{course.units}</Badge>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="text-center font-bold text-lg">{faculty.totalUnits}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-6">
              {facultyData.map((faculty, index) => (
                <Card key={faculty.id} className="shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-900">{faculty.name}</CardTitle>
                        <Badge className={`${getRankColor(faculty.rank)} mt-2`}>{faculty.rank}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">S/N: {index + 1}</p>
                        <p className="text-2xl font-bold text-blue-600">{faculty.totalUnits}</p>
                        <p className="text-xs text-gray-500">Total Units</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Assigned Courses:</h4>
                    <div className="space-y-3">
                      {faculty.courses.map((course, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="font-medium text-blue-600">{course.code}</p>
                              <p className="text-gray-700 text-sm">{course.title}</p>
                            </div>
                            <Badge variant="outline" className="ml-2">
                              {course.units} units
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Courses */}
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Additional Courses (EEE Department)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {additionalCourses.map((course, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-blue-600">{course.code}</p>
                          <p className="text-gray-700">{course.title}</p>
                        </div>
                        <Badge variant="outline">{course.units} units</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Signature Section */}
            <Card className="mt-8 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">Engr. Dr. Ukamaka J. Eze</p>
                    <p className="text-gray-600">Ag. H.O.D. Computer Engineering Department</p>
                  </div>

                  <Separator />

                  <div className="text-sm text-gray-600">
                    <p className="font-semibold mb-2">CC:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• DVC, Madonna University, Akpugo Campus</li>
                      <li>• Dean, Faculty of Engineering and Technology</li>
                      <li>• Ag. Deputy Registrar</li>
                      <li>• Campus Administration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
