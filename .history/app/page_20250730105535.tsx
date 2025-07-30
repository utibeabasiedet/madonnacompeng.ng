"use client"
import Hero from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen, Calendar, ChevronRight, Cpu, Users } from "lucide-react";
import Link from "next/link";
import About from "@/components/about";
import Faq from "@/components/faq";
import blog1 from '../public/images/bg-1.jpg'
import { useEffect, useState } from "react";
// import { getBlogPosts } from "../lib/sanity"

import { Button } from "@/components/ui/button";

 // Default blog posts to use when Sanity is not configured or when loading fails
 const defaultBlogPosts = [
  {
    image: "/images/networking.avif?height=200&width=400",
    date: "May 5, 2025",
    title: "Annual Tech Exhibition",
    description:
      "Join us for the annual technology exhibition showcasing innovative projects by our final year students.",
    category: "event",
    link: "/news/tech-exhibition",
  },
  {
    image: "/images/microlab.avif? height=200&width=400",
    date: "April 28, 2025",
    title: "New Laboratory Equipment",
    description: "The department has acquired new state-of-the-art equipment for the microprocessor laboratory.",
    category: "news",
    link: "/news/new-equipment",
  },
  {
    image: "/images/microlab.avif?height=200&width=400",
    date: "May 15, 2025",
    title: "Guest Lecture Series",
    description:
      "Distinguished professor from MIT to deliver a lecture on Artificial Intelligence and Machine Learning.",
    category: "event",
    link: "/news/guest-lecture",
  },
]

export default  function Home() {
  const [blogPosts, setBlogPosts] = useState(defaultBlogPosts)
  const [loading, setLoading] = useState(false)


// Fetch blog posts only if Sanity is configured
useEffect(() => {
  async function fetchBlogPosts() {
    try {
      setLoading(true)
      
      // Simulated delay and fetch:
      // const posts = await getBlogPosts()
      // setBlogPosts(posts)

      // Simulate fallback
      await new Promise((res) => setTimeout(res, 2000)) // simulate delay
      setBlogPosts(defaultBlogPosts) // or your fetched posts
    } catch (error) {
      console.error("Failed to load posts", error)
      setBlogPosts(defaultBlogPosts)
    } finally {
      setLoading(false)
    }
  }

  fetchBlogPosts()
}, [])
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
      <About />
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
                {/* <Image
                  src="/images/Registrar.jpg"
                  width={80}
                  height={80}
                  alt="HOD Portrait"
                  className="rounded-full"
                /> */}
                <div>
                  <h3 className="font-bold">Engr. Dr. Uzoamaka J. Eze</h3>
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
                    <div className="text-center p-4 bg-[#64BBE7]/20 rounded-lg">
                      <div className="text-3xl font-bold text-[#192F59] mb-1">
                        25+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Faculty Members
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[#64BBE7]/20 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Students
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[#EC85BA]/20 rounded-lg">
                      <div className="text-3xl font-bold text-[#D11479] mb-1">
                        8
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Laboratories
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[#EC85BA]/20 rounded-lg">
                      <div className="text-3xl font-bold text-[#D11479] mb-1">
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
                        src="/images/NUC-LOGO.webp"
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
      <section  className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="animate-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Latest News
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest articles and insights from our department.
                </p>
               
              </div>
            </div>
           
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {loading
                ? // Loading state
                  Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <Card key={index} className="news-card overflow-hidden">
                        <div className="relative">
                          <div className="w-full h-48 bg-muted animate-pulse" />
                        </div>
                        <CardContent className="p-4">
                          <div className="h-4 w-24 bg-muted animate-pulse mb-2" />
                          <div className="h-6 w-full bg-muted animate-pulse mb-2" />
                          <div className="h-4 w-full bg-muted animate-pulse mb-4" />
                          <div className="h-4 w-full bg-muted animate-pulse mb-4" />
                          <div className="h-4 w-24 bg-muted animate-pulse" />
                        </CardContent>
                      </Card>
                    ))
                : // Blog posts
                  blogPosts.map((post, index) => (
                    <Card key={index} className="news-card overflow-hidden">
                      <div className="relative">
                        <Image
                          src={post.image || blog1 }
                          width={400}
                          height={200}
                          alt={post.title}
                          className="w-full object-cover h-48"
                        />
                        <div
                          className={`absolute top-2 right-2 ${
                            post.category === "event" ? "bg-accent" : "bg-secondary"
                          } text-white text-xs px-2 py-1 rounded`}
                        >
                          {post.category === "event" ? "Event" : "News"}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                        <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {post.description.length > 120
                            ? `${post.description.substring(0, 120)}...`
                            : post.description}
                        </p>
                        {/* <Link href={post.link} className="text-sm text-primary flex items-center">
                          Read More <ChevronRight className="h-4 w-4 ml-1" />
                        </Link> */}
                      </CardContent>
                    </Card>
                  ))}
            </div>
            <div className="flex justify-center">
              {/* <Link href="/blog">
                <Button variant="outline">View All Blog Posts</Button>
              </Link> */}
            </div>
          </div>
        </section>
      {/* blog */}
      {/* {blogPosts} */}
      <Faq/>
    </div>
  );
}
