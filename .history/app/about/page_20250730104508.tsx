import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Banner from "@/components/banner";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen mt-[12vh] flex-col">
      <main className="flex-1">
        <Banner
          image="/images/banner-2.avif"
          heading="About Our Department"
          text="Learn about the history, vision, and achievements of the Computer Engineering Department at Madonna
                  University."
        />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Overview
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Department of Computer Engineering at Madonna University
                  was established in 2005 with the aim of producing competent
                  engineers equipped with the knowledge and skills to address
                  technological challenges in Nigeria and beyond.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our program combines theoretical knowledge with practical
                  skills in both hardware and software aspects of computing
                  systems. We focus on developing problem-solving abilities,
                  critical thinking, and innovation among our students.
                </p>
                <p className="text-muted-foreground mb-4">
                  With state-of-the-art laboratories, experienced faculty
                  members, and a comprehensive curriculum, we provide a
                  conducive environment for learning and research in computer
                  engineering.
                </p>
              </div>
              <Image
                src="/images/madonnaabout.jpeg"
                width={600}
                height={400}
                alt="Computer Engineering Department Building"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-secondary/10 to-primary/10 dark:bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Vision & Mission
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our guiding principles and aspirations.
                </p>
              </div>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              <Card className="bg-white dark:bg-background border-secondary">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-secondary/20 p-3">
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
                        className="h-6 w-6 text-primary">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground text-center">
                    To be a leading center of excellence in computer engineering
                    education, research, and innovation in Nigeria and beyond.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-background border-accent">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-accent/20 p-3">
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
                        className="h-6 w-6 text-accent">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground text-center">
                    To produce competent and innovative computer engineers
                    equipped with technical knowledge, practical skills, and
                    ethical values to address societal challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our History
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The journey of our department through the years.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-secondary/20 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-primary">2005</h3>
                    <p className="text-lg font-medium">Establishment</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground">
                    The Department of Computer Engineering was established as
                    part of the Faculty of Engineering at Madonna University.
                    The program was designed to meet the growing demand for
                    computer engineers in Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-accent/20 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-accent">2008</h3>
                    <p className="text-lg font-medium">First Graduation</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground">
                    The department celebrated its first set of graduates, who
                    have gone on to make significant contributions to the
                    technology sector in Nigeria and abroad.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-secondary/20 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-primary">2012</h3>
                    <p className="text-lg font-medium">Curriculum Expansion</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground">
                    The department expanded its curriculum to include emerging
                    areas such as artificial intelligence, robotics, and
                    embedded systems, ensuring that students receive up-to-date
                    education.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-accent/20 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-accent">2015</h3>
                    <p className="text-lg font-medium">Laboratory Upgrade</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground">
                    The department upgraded its laboratories with
                    state-of-the-art equipment, providing students with hands-on
                    experience in various aspects of computer engineering.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-secondary/20 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-primary">2020</h3>
                    <p className="text-lg font-medium">Research Center</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground">
                    The department established a research center focused on
                    developing technological solutions to local challenges,
                    fostering innovation and entrepreneurship among students and
                    faculty.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="bg-accent/20 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-accent">Present</h3>
                    <p className="text-lg font-medium">Continued Growth</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground">
                    Today, the department continues to grow, with increasing
                    student enrollment, expanding research activities, and
                    strengthening industry partnerships to ensure that our
                    graduates are well-prepared for the challenges of the
                    digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-secondary/10 dark:bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Accreditation & Achievements
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our recognitions and accomplishments over the years.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Accreditations</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="bg-secondary/20 p-2 rounded-full mt-1">
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
                          className="h-4 w-4 text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          National Universities Commission (NUC)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Fully accredited program that meets all quality
                          standards for engineering education in Nigeria.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-secondary/20 p-2 rounded-full mt-1">
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
                          className="h-4 w-4 text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Council for the Regulation of Engineering in Nigeria
                          (COREN)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Recognized program that meets professional engineering
                          standards in Nigeria.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-secondary/20 p-2 rounded-full mt-1">
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
                          className="h-4 w-4 text-primary">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Nigerian Society of Engineers (NSE)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Recognized program that prepares students for
                          membership in the professional engineering society.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Achievements</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="bg-accent/20 p-2 rounded-full mt-1">
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
                          className="h-4 w-4 text-accent">
                          <path d="M12 2v20"></path>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Best Engineering Department Award (2018)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Recognized by the Faculty of Engineering for
                          excellence in teaching, research, and community
                          service.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-accent/20 p-2 rounded-full mt-1">
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
                          className="h-4 w-4 text-accent">
                          <path d="M12 2v20"></path>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          National Robotics Competition Winner (2019)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Our students won the national robotics competition
                          organized by the Nigerian Society of Engineers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-accent/20 p-2 rounded-full mt-1">
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
                          className="h-4 w-4 text-accent">
                          <path d="M12 2v20"></path>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Research Grant from the Nigerian Government (2021)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Received a substantial research grant for developing
                          innovative solutions to local technological
                          challenges.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-accent/20 p-2 rounded-full mt-1">
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
                          className="h-4 w-4 text-accent">
                          <path d="M12 2v20"></path>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Industry Partnership Excellence Award (2022)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Recognized for outstanding collaboration with industry
                          partners in research and student internships.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The core principles that guide our teaching, research, and
                  service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white dark:bg-background">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-secondary/20 p-3">
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
                      className="h-6 w-6 text-primary">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Excellence</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    We strive for excellence in all our academic and
                    professional endeavors.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-background">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-accent/20 p-3">
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
                      className="h-6 w-6 text-accent">
                      <path d="M2 12h5"></path>
                      <path d="M17 12h5"></path>
                      <path d="M12 2v5"></path>
                      <path d="M12 17v5"></path>
                      <path d="M12 12 2 2"></path>
                      <path d="m12 12 10 10"></path>
                      <path d="m12 12 10-10"></path>
                      <path d="m12 12-10 10"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Innovation</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    We foster creativity and innovative thinking to address
                    technological challenges.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-background">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-secondary/20 p-3">
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
                      className="h-6 w-6 text-primary">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <line x1="10" y1="9" x2="8" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Integrity</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    We uphold the highest standards of ethical conduct in all
                    our activities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-background">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 rounded-full bg-accent/20 p-3">
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
                      className="h-6 w-6 text-accent">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Collaboration</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    We value teamwork and partnerships that enhance learning and
                    research.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-secondary/10 to-primary/10 dark:bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Facilities
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our state-of-the-art facilities for teaching and research.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="overflow-hidden">
                <Image
                  src="/images/complap.webp"
                  width={400}
                  height={200}
                  alt="Computer Laboratory"
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Computer Laboratory
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Equipped with the latest hardware and software for
                    programming, simulation, and data analysis.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/images/electlab.avif"
                  width={400}
                  height={200}
                  alt="Electronics Laboratory"
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Electronics Laboratory
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Features equipment for circuit design, testing, and
                    implementation of electronic systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/images/microlab.avif"
                  width={400}
                  height={200}
                  alt="Microprocessor Laboratory"
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Microprocessor Laboratory
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dedicated to the study of microprocessors, microcontrollers,
                    and embedded systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/images/networking.avif"
                  width={400}
                  height={200}
                  alt="Networking Laboratory"
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Networking Laboratory
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Provides hands-on experience with network design,
                    configuration, and security.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <Image
                  src="/images/research.avif"
                  width={400}
                  height={200}
                  alt="Research Center"
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">Research Center</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A dedicated space for faculty and students to conduct
                    research in various areas of computer engineering.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our department? Get in touch with us.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/contact">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
