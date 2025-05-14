
import {
  ChevronRight,
  BookOpen,
  Download,
  FileText,
  Calendar,
  Clock,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";
import Banner from "@/components/banner";

export default function CurriculumPage() {
  return (
    <div className="flex min-h-screen mt-[12vh]  flex-col">
      <main className="flex-1">
        <Banner
          image="/images/banner-2.avif"
          heading="Curriculum"
          text="Comprehensive course structure for the Computer Engineering program at Madonna University"
        />

        <section className="w-full relative  py-12 md:py-16">
          <div className="container  relative   px-4 md:px-6">
            <div className="sm:grid gap-10   md:grid-cols-3 lg:gap-16">
              <div className="space-y-4  ">
                <div className="md:sticky top-24">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-[#D11479]" />
                      <h2 className="text-xl font-bold">Program Overview</h2>
                    </div>
                    <nav className="flex flex-col space-y-2">
                      <a
                        href="#history"
                        className="text-sm hover:text-[#D11479] flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Brief History
                      </a>
                      <a
                        href="#philosophy"
                        className="text-sm hover:text-[#D11479] flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Philosophy
                      </a>
                      <a
                        href="#objectives"
                        className="text-sm hover:text-[#D11479] flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Objectives
                      </a>
                      <a
                        href="#admission"
                        className="text-sm hover:text-[#D11479] flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Admission Requirements
                      </a>
                      <a
                        href="#course-structure"
                        className="text-sm hover:text-[#D11479] flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Course Structure
                      </a>
                      <a
                        href="#examination"
                        className="text-sm hover:text-[#D11479] flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Examination Policies
                      </a>
                    </nav>
                    <div className="mt-8 space-y-4  ">
                      <Card className="bg-[#192F59] text-white">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="h-5 w-5 text-[#64BBE7]" />
                            <h3 className="font-bold">Degree Awarded</h3>
                          </div>
                          <p className="text-sm">
                            Bachelor of Engineering (B.Eng.) in Computer
                            Engineering
                          </p>
                        </CardContent>
                      </Card>
                     
                      <Card className="bg-[#64BBE7] text-white">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-5 w-5 text-[#192F59]" />
                            <h3 className="font-bold">Program Duration</h3>
                          </div>
                          <p className="text-sm">5 Years (10 Semesters)</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-[#D11479] text-white">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="h-5 w-5 text-white" />
                            <h3 className="font-bold">Download Resources</h3>
                          </div>
                          <div className="space-y-2 mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                              <Download className="h-4 w-4 mr-2" />
                              Course Handbook
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                              <Download className="h-4 w-4 mr-2" />
                              Timetable
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-12">
                <div id="history" className="scroll-mt-24">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-2 bg-[#D11479] rounded-full"></div>
                    <h2 className="text-2xl font-bold">
                      Brief History of the Department
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Computer Engineering started as one of the areas in
                      Electrical/Electronic Engineering department. Faculty of
                      Engineering and Technology was transferred to Akpugo
                      Campus, Enugu State of Nigeria on 27th day of April 2011.
                      The expectations are that this transfer will offer better
                      accommodation and improve on the rate of development of
                      faculty of Engineering.
                    </p>
                    <p>
                      Computer Engineering Department was formally created to
                      function alone in 2011. The creation of Computer
                      Engineering Department has multiplied interest in
                      engineering research. The department has been given full
                      approval to function by NUC (National University
                      Commission).
                    </p>
                    <p>
                      Today, the department is well established and has
                      state-of-the-art equipment in the laboratories and
                      workshops.
                    </p>
                  </div>
                </div>

                <div id="philosophy" className="scroll-mt-24">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-2 bg-[#64BBE7] rounded-full"></div>
                    <h2 className="text-2xl font-bold">
                      Philosophy of the Programme
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The Computer Engineering Department exists to train
                      students to build and use computers, and encourage staff
                      and students to carry out research that will lead to
                      inventions, new products and services that will create
                      wealth, and eventually lead to national development.
                    </p>
                    <p>
                      The department was established on a plan of extraordinary
                      clarity and firmness. A plan that contemplates a
                      department of limited but well defined objectives, a full
                      time five years programme leading to the award of the
                      degree of bachelor of Engineering (B.Eng.) which reflects
                      strongly the philosophical view of the Information
                      Technology Revolution.
                    </p>
                  </div>
                </div>

                <div id="objectives" className="scroll-mt-24">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-2 bg-[#D11479] rounded-full"></div>
                    <h2 className="text-2xl font-bold">
                      Objectives of the Programme
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The department is set apart by its own style, by its
                      approach to teaching and learning and by its avowed
                      objectives which include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>
                        To impart students with the knowledge and skills,
                        required by computer engineers in industry, academia and
                        public service.
                      </li>
                      <li>
                        To equip the Nigeria nation and the world at large with
                        effective professionals in the critical growth area of
                        computer engineering.
                      </li>
                      <li>
                        To stimulate the interest of students in research
                        through contact with teachers and mentors active in
                        research, and through exposure to the most current
                        information technologies.
                      </li>
                      <li>
                        To encourage students to consider graduate education and
                        make them aware of the need for lifelong learning.
                      </li>
                      <li>
                        To seek broad collaboration on projects and courses with
                        other disciplines and academic departments to
                        familiarize students with an interdisciplinary setting
                        like that in which many of them will work.
                      </li>
                      <li>
                        To promote professional and institutional pride by
                        providing strong support for student programs associated
                        with the most respected professional societies.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="admission" className="scroll-mt-24">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-2 bg-[#64BBE7] rounded-full"></div>
                    <h2 className="text-2xl font-bold">
                      Admission Requirements
                    </h2>
                  </div>
                  <Tabs defaultValue="utme" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="utme">UTME</TabsTrigger>
                      <TabsTrigger value="direct">Direct Entry</TabsTrigger>
                    </TabsList>
                    <TabsContent value="utme" className="space-y-4 mt-4">
                      <div className="text-muted-foreground">
                        <p className="mb-4">
                          The minimum admission requirement for Engineering, and
                          Technology disciplines should be passes at credit
                          level in the Senior Secondary School final year
                          examination or GCE &apos;O&apos; Level in five subjects
                          including Mathematics, English Language, Physics and
                          Chemistry obtained at not more than two sittings.
                        </p>
                        <p className="mb-4">
                          Candidates are also required to have acceptable pass
                          in UTME. The UTME subjects shall be Mathematics,
                          Physics, Chemistry and use of English.
                        </p>
                        <p>
                          It is also desirable for candidates to have Further
                          Mathematics and Technical Drawing at this levels. Such
                          candidates shall have added advantage.
                        </p>
                      </div>
                      <Card className="bg-[#192F59]/5 border-[#192F59]/20">
                        <CardContent className="p-4">
                          <h3 className="font-bold text-[#192F59] mb-2">
                            UTME Subjects
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-[#192F59]">Mathematics</Badge>
                            <Badge className="bg-[#192F59]">Physics</Badge>
                            <Badge className="bg-[#192F59]">Chemistry</Badge>
                            <Badge className="bg-[#192F59]">
                              English Language
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="direct" className="space-y-4 mt-4">
                      <div className="text-muted-foreground">
                        <p className="mb-4">
                          For Direct Entry, candidates must have passes in
                          Mathematics, Physics and Chemistry at GCE &apos;A&apos; level or
                          equivalent.
                        </p>
                        <p>
                          Holders of OND and HND at minimum of upper level are
                          eligible for consideration for admission into 200 and
                          300 levels respectively.
                        </p>
                      </div>
                      <Card className="bg-[#64BBE7]/5 border-[#64BBE7]/20">
                        <CardContent className="p-4">
                          <h3 className="font-bold text-[#64BBE7] mb-2">
                            Direct Entry Requirements
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <ChevronRight className="h-4 w-4 text-[#D11479]" />
                              <p className="text-sm">
                                GCE &apos;A&apos; Level passes in Mathematics, Physics and
                                Chemistry
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <ChevronRight className="h-4 w-4 text-[#D11479]" />
                              <p className="text-sm">
                                OND (Upper Level) - Admission into 200 Level
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <ChevronRight className="h-4 w-4 text-[#D11479]" />
                              <p className="text-sm">
                                HND (Upper Level) - Admission into 300 Level
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>

                <div id="course-structure" className="scroll-mt-24">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-8 w-2 bg-[#D11479] rounded-full"></div>
                    <h2 className="text-2xl font-bold">Course Structure</h2>
                  </div>

                  <Tabs defaultValue="year1" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="year1">Year 1</TabsTrigger>
                      <TabsTrigger value="year2">Year 2</TabsTrigger>
                      <TabsTrigger value="year3">Year 3</TabsTrigger>
                      <TabsTrigger value="year4">Year 4</TabsTrigger>
                      <TabsTrigger value="year5">Year 5</TabsTrigger>
                    </TabsList>

                    <TabsContent value="year1" className="mt-6 space-y-6">
                      <Tabs defaultValue="first" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="first">
                            First Semester
                          </TabsTrigger>
                          <TabsTrigger value="second">
                            Second Semester
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="first" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>First Year - First Semester</CardTitle>
                              <CardDescription className="text-gray-200">
                                Required Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CHM 101
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Chemistry I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CHM 171
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Chemistry Laboratory I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MTH 101
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Elementary Mathematics I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MTH 103
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Elementary Mathematics II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        PHY 101
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Physics I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        PHY 151
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Physics Laboratory I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#64BBE7] text-white rounded-t-lg">
                              <CardTitle>General Studies Courses</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 111
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Communication in English I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 113
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Nigerian People and Culture
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 121
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Use of Library, Study Skills and
                                        Information
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 123
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Communication in French
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 125
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Introduction to Entrepreneurship Studies
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="second" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>
                                First Year - Second Semester
                              </CardTitle>
                              <CardDescription className="text-gray-200">
                                Required Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CHM 102
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Chemistry II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CHM 172
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Chemistry Laboratory II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MTH 102
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Elementary Mathematics III
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        PHY 104
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Elementary Mathematics IV
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        PHY 102
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Physics II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        PHY 152
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        General Physics Laboratory II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#64BBE7] text-white rounded-t-lg">
                              <CardTitle>General Studies Courses</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 102
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Fundamental Philosophy
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 112
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Logic, Philosophy and Human Existence
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 122
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Communication in English II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 142
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Communication in German
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 162
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Introduction to Social Science
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>

                    <TabsContent value="year2" className="mt-6 space-y-6">
                      <Tabs defaultValue="first" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="first">
                            First Semester
                          </TabsTrigger>
                          <TabsTrigger value="second">
                            Second Semester
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="first" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>
                                Second Year - First Semester
                              </CardTitle>
                              <CardDescription className="text-gray-200">
                                Major Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 211
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        IT In Engineering
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 231
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Computers and Computing
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#64BBE7] text-white rounded-t-lg">
                              <CardTitle>Required Ancillary Courses</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CHM 201
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Chemistry III
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EMT 201
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Engineering Mathematics I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MEC 211
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Engineering Drawing I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MEC 221
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Applied Mechanics
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MEC 231
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Material Science
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#D11479] text-white rounded-t-lg">
                              <CardTitle>General Studies Courses</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 211
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Fundamental Theology
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 221
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        History and Philosophy of Science
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 215
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Introduction to Entrepreneurship Studies
                                        II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="second" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>
                                Second Year - Second Semester
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 222
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Introduction to Computer Programming
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CVE 222
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Strength of Materials I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EEE 242
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Basic Electrical Engineering
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EMT 202
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Engineering Mathematics II
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        FET 212
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Engineer in Society
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MEC 222
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Fluid Mechanics I
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        MEC 242
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Manufacturing Technology/Workshop
                                        Practice
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 222
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Peace Studies and Conflict Resolution
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        GST 224
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Fundamental Ethics
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <div className="mt-6 p-4 bg-[#64BBE7]/10 rounded-lg border border-[#64BBE7]/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="h-5 w-5 text-[#64BBE7]" />
                              <h3 className="font-bold">200L Long Vacation</h3>
                            </div>
                            <p className="text-muted-foreground">
                              Student Work Experience Program (SWEP)
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>

                    <TabsContent value="year3" className="mt-6 space-y-6">
                      <Tabs defaultValue="first" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="first">
                            First Semester
                          </TabsTrigger>
                          <TabsTrigger value="second">
                            Second Semester
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="first" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>Third Year - First Semester</CardTitle>
                              <CardDescription className="text-gray-200">
                                Major Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 311
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Digital Electronic Circuit
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 331
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Entrepreneurial Studies
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 531
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Laboratory Practical (Software)
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 371
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Laboratory Practical (Hardware)
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#64BBE7] text-white rounded-t-lg">
                              <CardTitle>Required Ancillary Courses</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EEE 321
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Circuit Theory
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EEE 351
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Electromagnetic Fields and Waves
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EEE 361
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Measurement & Instrumentation
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EMT 301
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Engineering Mathematics III
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="second" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>
                                Third Year - Second Semester
                              </CardTitle>
                              <CardDescription className="text-gray-200">
                                Major Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 312
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Computer Organization
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 322
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Software Development Techniques
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#64BBE7] text-white rounded-t-lg">
                              <CardTitle>Required Ancillary Courses</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EMT 302
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Engineering Mathematics IV
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EEE 312
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Electrical Machines
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EEE 322
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Communication Principle
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        EEE 332
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Analogue Electronic Circuit
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>

                    <TabsContent value="year4" className="mt-6 space-y-6">
                      <Tabs defaultValue="first" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="first">
                            First Semester
                          </TabsTrigger>
                          <TabsTrigger value="second">
                            Second Semester (SIWES)
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="first" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>
                                Fourth Year - First Semester
                              </CardTitle>
                              <CardDescription className="text-gray-200">
                                Major Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 411
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Data Communication & Networking
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 421
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Assembly Language Programming
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 431
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Object Oriented Design & Programming
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 441
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Technical Communication
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 451
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Prototyping Technique
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 461
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Control System
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 471
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Microprocessor System & Interfacing
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 481
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Software Lab
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 491
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Hardware Lab
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="second" className="mt-4">
                          <Card className="bg-[#D11479]/10 border-[#D11479]/20">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="bg-[#D11479] p-3 rounded-full">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-white">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                  </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#D11479]">
                                  Student Industrial Work Experience Scheme
                                  (SIWES)
                                </h3>
                              </div>
                              <p className="text-muted-foreground mb-4">
                                The second semester of the fourth year is
                                dedicated to the Student Industrial Work
                                Experience Scheme (SIWES). During this period,
                                students are placed in relevant industries to
                                gain practical experience in their field of
                                study.
                              </p>
                              <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
                                <h4 className="font-bold mb-2">
                                  Key Objectives of SIWES:
                                </h4>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  <li>
                                    Provide students with practical experience
                                    that supplements their theoretical knowledge
                                  </li>
                                  <li>
                                    Expose students to work methods and
                                    techniques in handling equipment and
                                    machinery
                                  </li>
                                  <li>
                                    Develop skills in problem-solving in a
                                    real-world environment
                                  </li>
                                  <li>
                                    Expose students to professional work ethics
                                    and practices
                                  </li>
                                  <li>
                                    Provide students with opportunities to apply
                                    their knowledge in real-life work situations
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-6">
                                <h4 className="font-bold mb-2">Duration:</h4>
                                <p className="text-muted-foreground">
                                  6 months (One Semester)
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>

                    <TabsContent value="year5" className="mt-6 space-y-6">
                      <Tabs defaultValue="first" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="first">
                            First Semester
                          </TabsTrigger>
                          <TabsTrigger value="second">
                            Second Semester
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="first" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>Fifth Year - First Semester</CardTitle>
                              <CardDescription className="text-gray-200">
                                Major Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 501
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Seminar
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        1
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 511
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Artificial Neural Network & Programming
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 521
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Computer Graphics & Animation
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 531
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Embedded System Design
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 551
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Reliability and Maintainability
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 561
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Cyberpreneurship & Cyber Law
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 581
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Computer Architecture
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#64BBE7] text-white rounded-t-lg">
                              <CardTitle>Electives (Choose One)</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 541
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Robotics & Automation
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 581
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Digital Image Processing
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="second" className="mt-4">
                          <Card>
                            <CardHeader className="bg-[#192F59] text-white rounded-t-lg">
                              <CardTitle>
                                Fifth Year - Second Semester
                              </CardTitle>
                              <CardDescription className="text-gray-200">
                                Major Courses
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 512
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Software Engineering
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 522
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Digital Signals Processing
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 532
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Digital System Design with VHDL
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        3
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 542
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Computer Security Techniques
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 562
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Research Project
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        6
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="mt-6">
                            <CardHeader className="bg-[#64BBE7] text-white rounded-t-lg">
                              <CardTitle>Electives (Choose One)</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Code
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Course Title
                                      </th>
                                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                                        Units
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y">
                                    <tr className="bg-white">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 572
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Fuzzy Logic & Programming
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                      <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                                        CPE 582
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        Cryptography Principle & Application
                                      </td>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        2
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </TabsContent>
                  </Tabs>
                </div>

                <div id="examination" className="scroll-mt-24">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-2 bg-[#64BBE7] rounded-full"></div>
                    <h2 className="text-2xl font-bold">Examination Policies</h2>
                  </div>
                  <div className="space-y-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">
                          Admission to Examinations
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <p className="mb-2">
                            Candidates for each examination are only those
                            students:
                          </p>
                          <ul className="list-disc list-inside space-y-1 pl-4">
                            <li>
                              Who were duly registered for the course as
                              required by the University registration
                              regulations
                            </li>
                            <li>
                              Who have attained a minimum of 75% attendance at
                              lectures/laboratories/workshops
                            </li>
                            <li>
                              Whose registration numbers appear on the official
                              examination list for the course
                            </li>
                            <li>Who have been financially cleared</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">
                          Examination Results
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>
                              In addition to continuous assessment, final
                              examinations should normally be given for every
                              course at the end of each semester.
                            </li>
                            <li>
                              The final grade should be based on the following
                              breakdown:
                              <ul className="list-disc list-inside ml-6 mt-2">
                                <li>Final Examination: 60% - 70%</li>
                                <li>
                                  Continuous assessment (Quizzes, Tutorials,
                                  Home works, and Tests): 30% - 40%
                                </li>
                              </ul>
                            </li>
                            <li>
                              Each course shall normally be completed and
                              examined at the end of the semester in which it is
                              offered.
                            </li>
                            <li>
                              A written examination shall normally last a
                              minimum of one hour for one unit course.
                            </li>
                            <li>
                              The marks obtained for each course in an
                              examination shall be recorded in the hand writing
                              of the course lecturer (or the course coordinator)
                              in the prescribed score sheet obtained from the
                              head of department.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Card className="bg-[#D11479]/10 border-[#D11479]/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-[#D11479]">
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                            <line x1="6" y1="1" x2="6" y2="4"></line>
                            <line x1="10" y1="1" x2="10" y2="4"></line>
                            <line x1="14" y1="1" x2="14" y2="4"></line>
                          </svg>
                          <h3 className="text-xl font-bold text-[#D11479]">
                            Grading System
                          </h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-[#D11479]/20">
                                <th className="px-4 py-2 text-left text-sm font-medium">
                                  Score Range
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium">
                                  Letter Grade
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium">
                                  Grade Point
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium">
                                  Classification
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#D11479]/10">
                              <tr className="bg-white">
                                <td className="px-4 py-2 text-sm">70 - 100</td>
                                <td className="px-4 py-2 text-sm">A</td>
                                <td className="px-4 py-2 text-sm">5.0</td>
                                <td className="px-4 py-2 text-sm">Excellent</td>
                              </tr>
                              <tr className="bg-[#D11479]/5">
                                <td className="px-4 py-2 text-sm">60 - 69</td>
                                <td className="px-4 py-2 text-sm">B</td>
                                <td className="px-4 py-2 text-sm">4.0</td>
                                <td className="px-4 py-2 text-sm">Very Good</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="px-4 py-2 text-sm">50 - 59</td>
                                <td className="px-4 py-2 text-sm">C</td>
                                <td className="px-4 py-2 text-sm">3.0</td>
                                <td className="px-4 py-2 text-sm">Good</td>
                              </tr>
                              <tr className="bg-[#D11479]/5">
                                <td className="px-4 py-2 text-sm">45 - 49</td>
                                <td className="px-4 py-2 text-sm">D</td>
                                <td className="px-4 py-2 text-sm">2.0</td>
                                <td className="px-4 py-2 text-sm">Fair</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="px-4 py-2 text-sm">40 - 44</td>
                                <td className="px-4 py-2 text-sm">E</td>
                                <td className="px-4 py-2 text-sm">1.0</td>
                                <td className="px-4 py-2 text-sm">Pass</td>
                              </tr>
                              <tr className="bg-[#D11479]/5">
                                <td className="px-4 py-2 text-sm">0 - 39</td>
                                <td className="px-4 py-2 text-sm">F</td>
                                <td className="px-4 py-2 text-sm">0.0</td>
                                <td className="px-4 py-2 text-sm">Fail</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
