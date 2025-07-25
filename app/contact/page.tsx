
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Banner from "@/components/banner"


export default function ContactPage() {
  return (
    <div className="flex min-h-screen mt-[12vh]  flex-col">
     
      <main className="flex-1">
        
        <Banner
          image="/images/banner-2.avif"
          heading=" Contact Us"
          text="Get in touch with the Department of Computer Engineering at Madonna University"
        />

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="md:grid gap-10 md:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    We&apos;d love to hear from you. Please fill out the form below or use our contact information to reach
                    out to us with any questions, inquiries, or feedback.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-none shadow-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-[#192F59] text-white p-6 md:w-1/3 flex items-center justify-center">
                          <MapPin className="h-10 w-10" />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="font-bold text-lg mb-2">Our Location</h3>
                          <p className="text-muted-foreground">
                            Department of Computer Engineering,
                            <br />
                            Faculty of Engineering,
                            <br />
                            Madonna University Nigeria,
                            <br />
                            Akpugo Campus, Enugu State
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-[#64BBE7] text-white p-6 md:w-1/3 flex items-center justify-center">
                          <Phone className="h-10 w-10" />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="font-bold text-lg mb-2">Phone</h3>
                          <p className="text-muted-foreground">
                            Department Office: +234 801 234 5678
                            <br />
                            HOD&apos;s Office: +234 802 345 6789
                            <br />
                            Faculty Office: +234 803 456 7890
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-[#D11479] text-white p-6 md:w-1/3 flex items-center justify-center">
                          <Mail className="h-10 w-10" />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="font-bold text-lg mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            General Inquiries:{" "}
                            <a
                              href="mailto:computerengineering@madonnauniversity.edu.ng"
                              className="hover:text-[#D11479]"
                            >
                                computerengdeptmadonnaun@gmail.com
                            </a>
                            <br />
                            Admissions:{" "}
                            <a href="mailto:admissions@madonnauniversity.edu.ng" className="hover:text-[#D11479]">
                              admissions@madonnauniversity.edu.ng
                            </a>
                            <br />
                           
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-[#EC85BA] text-white p-6 md:w-1/3 flex items-center justify-center">
                          <Clock className="h-10 w-10" />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 8:00 AM - 4:00 PM
                            <br />
                            Saturday: 9:00 AM - 12:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                      <p className="text-muted-foreground">
                        Fill out the form below and we&aposll get back to you as soon as possible.
                      </p>
                    </div>
                    <form className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First Name
                          </label>
                          <Input id="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last Name
                          </label>
                          <Input id="last-name" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="How can we help you?" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-[#192F59] hover:bg-[#192F59]/90">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#192F59]/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Find Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Visit our campus to learn more about our programs and facilities
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286255269573!2d7.4989533!3d6.4240392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d8f51f6071%3A0x6b07f5ee68d7e660!2sMadonna%20University!5e0!3m2!1sen!2sng!4v1620120000000!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madonna University Location"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-[#192F59] to-[#64BBE7]">
          <div className="container px-4 md:px-6 text-white">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Visit Our Department</h2>
                <p className="mb-6">
                  We welcome prospective students, parents, and visitors to tour our department and learn more about our
                  programs, facilities, and community. Schedule a visit today to experience firsthand what makes our
                  Computer Engineering Department special.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-[#192F59] hover:bg-white/90">
                    Schedule a Visit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Virtual Tour
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/electlab.avif"
                    alt="Computer Lab"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/microlab.avif"
                    alt="Lecture Hall"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/complab.avif"
                    alt="Electronics Lab"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/networking.avif"
                    alt="Campus View"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
   
    </div>
  )
}
