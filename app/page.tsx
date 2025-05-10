import Hero from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen, Calendar, ChevronRight, Cpu, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#192F59]">
              Explore Our Department
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
              Find essential resources and stay connected with our programs and
              activities.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Courses */}
            <Card className="transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6 group">
                <BookOpen className="h-14 w-14 text-[#64BBE7] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-bold mt-4">Courses</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Explore our comprehensive curriculum
                </p>
                <Link
                  href="/curriculum"
                  className="text-sm flex items-center text-[#D11479] hover:underline">
                  View Courses <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Faculty */}
            <Card className="transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6 group">
                <Users className="h-14 w-14 text-[#64BBE7] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-bold mt-4">Faculty</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Meet our experienced lecturers
                </p>
                <Link
                  href="/staff"
                  className="text-sm flex items-center text-[#D11479] hover:underline">
                  View Faculty <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Research */}
            <Card className="transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6 group">
                <Cpu className="h-14 w-14 text-[#64BBE7] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-bold mt-4">Research</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Discover our research initiatives
                </p>
                <Link
                  href="/research"
                  className="text-sm flex items-center text-[#D11479] hover:underline">
                  View Research <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Events */}
            <Card className="transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6 group">
                <Calendar className="h-14 w-14 text-[#64BBE7] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-bold mt-4">Events</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Stay updated with department events
                </p>
                <Link
                  href="/news"
                  className="text-sm flex items-center text-[#D11479] hover:underline">
                  View Events <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-secondary/10 dark:bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Message from the Head of Department
              </h2>
              <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground mb-6">
                &quot;Our department is committed to providing quality education
                that prepares students for the challenges of the rapidly
                evolving field of computer engineering. We strive to foster
                innovation, critical thinking, and ethical values in our
                students.&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/Registrar.jpg"
                  width={80}
                  height={80}
                  alt="HOD Portrait"
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">Prof. John Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Head of Department
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Key Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary/20 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">
                        25+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Faculty Members
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/20 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Students
                      </div>
                    </div>
                    <div className="text-center p-4 bg-accent/20 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-1">
                        8
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Laboratories
                      </div>
                    </div>
                    <div className="text-center p-4 bg-accent/20 rounded-lg">
                      <div className="text-3xl font-bold text-accent mb-1">
                        15+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Research Projects
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Accreditation</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <Image
                        src="/images/nuc.jfif"
                        width={40}
                        height={40}
                        alt="NUC Logo"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        National Universities Commission (NUC)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fully Accredited
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <Image
                        src="/images/COREN.jpg"
                        width={40}
                        height={40}
                        alt="COREN Logo"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Council for the Regulation of Engineering in Nigeria
                        (COREN)
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fully Accredited
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
