import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#192F59]/10 to-[#64BBE7]/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our Computer Engineering
              program
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                What is Computer Engineering?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Computer Engineering is a field that combines elements of
                electrical engineering and computer science. It focuses on
                designing, developing, and testing computer systems and hardware
                like processors, memory devices, networking components, and
                embedded systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                What are the admission requirements for the Computer Engineering
                program?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>
                  Admission requirements typically include a strong background
                  in mathematics, physics, and computer science from high
                  school. Specific requirements (like entrance exam scores or
                  GPA) may vary by institution.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                What is the difference between Computer Engineering and Computer
                Science?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Computer Engineering focuses more on hardware and the
                integration of hardware and software, while Computer Science
                mainly deals with software, algorithms, and programming.
                Computer Engineering students learn both software and hardware
                design.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                What career opportunities are available for graduates?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>
                  Computer Engineering graduates have diverse career
                  opportunities including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Hardware Engineer</li>
                  <li>Software Developer</li>
                  <li>Network Engineer</li>
                  <li>Systems Analyst</li>
                  <li>IT Consultant</li>
                  <li>Embedded Systems Engineer</li>
                  <li>Telecommunications Engineer</li>
                  <li>Robotics Engineer</li>
                  <li>AI/Machine Learning Engineer</li>
                  <li>IoT Developer</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                What programming languages do students learn in the program?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul>
                  <li>IT Consultant</li>
                  <li>Embedded Systems Engineer</li>
                  <li>Telecommunications Engineer</li>
                  <li>Robotics Engineer</li>
                  <li>AI/Machine Learning Engineer</li>
                  <li>IoT Developer</li>
                </ul>
                
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Don&apos;t see your question here? Contact us for more information.
          </p>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
