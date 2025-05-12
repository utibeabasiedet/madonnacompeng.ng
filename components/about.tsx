import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Download } from 'lucide-react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const About = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-secondary/10 to-primary/10 dark:bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                  About Our Department
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Department of Computer Engineering at Madonna University is dedicated to providing students with a
                  solid foundation in both hardware and software aspects of computing systems.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our curriculum combines theoretical knowledge with practical skills, preparing students for successful
                  careers in the rapidly evolving field of computer engineering.
                </p>
                <p className="text-muted-foreground mb-6">
                  With state-of-the-art laboratories and experienced faculty members, we offer a conducive environment
                  for learning and innovation.
                </p>
                <Link href="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </div>
              <div className="space-y-4">
                <Tabs defaultValue="vision">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="vision">Vision</TabsTrigger>
                    <TabsTrigger value="mission">Mission</TabsTrigger>
                    <TabsTrigger value="values">Values</TabsTrigger>
                  </TabsList>
                  <TabsContent value="vision" className="p-4 border rounded-md mt-2">
                    <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be a leading center of excellence in computer engineering education, research, and innovation
                      in Nigeria and beyond.
                    </p>
                  </TabsContent>
                  <TabsContent value="mission" className="p-4 border rounded-md mt-2">
                    <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To produce competent and innovative computer engineers equipped with technical knowledge,
                      practical skills, and ethical values to address societal challenges.
                    </p>
                  </TabsContent>
                  <TabsContent value="values" className="p-4 border rounded-md mt-2">
                    <h3 className="text-lg font-bold mb-2">Our Values</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Excellence in teaching and research</li>
                      <li>Innovation and creativity</li>
                      <li>Integrity and ethical conduct</li>
                      <li>Collaboration and teamwork</li>
                    </ul>
                  </TabsContent>
                </Tabs>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Department Brochure</h3>
                      <p className="text-sm text-muted-foreground">Download our comprehensive department guide</p>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
