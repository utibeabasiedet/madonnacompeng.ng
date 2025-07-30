// import { Facebook, Instagram, Twitter } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-800 py-10">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Logo + Department Name */}
//         <div>
//           <Link href="/" className="flex items-center space-x-3">
//             <Image
//               src="/images/MadonnaUniversityNigeria.png"
//               alt="Logo"
//               width={150}
//               height={50}
//               className="w-48 md:w-72 object-contain"
//             />
//             <span className="font-semibold text-lg leading-tight">
//               Computer Engineering <br /> Department
//             </span>
//           </Link>
//           <p className="mt-4 text-sm text-gray-600">
//             Building the future of technology through education, innovation, and
//             research.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-[#192F59]">
//             Quick Links
//           </h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link
//                 href="/about"
//                 className="hover:text-[#D11479] transition-colors">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/curriculum"
//                 className="hover:text-[#D11479] transition-colors">
//                 Curriculum
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/staff"
//                 className="hover:text-[#D11479] transition-colors">
//                 Faculty
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/research"
//                 className="hover:text-[#D11479] transition-colors">
//                 Research
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/news"
//                 className="hover:text-[#D11479] transition-colors">
//                 Events & News
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="hover:text-[#D11479] transition-colors">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 text-[#192F59]">Contact</h4>
//           <ul className="text-sm space-y-2 text-gray-600">
//             <li>
//               <span>📍 Madonna University, Nigeria</span>
//             </li>
//             <li>
//               <span>📞 +234 123 456 7890</span>
//             </li>
//             <li>
//               <span>✉️ dept.computereng@madonna.edu.ng</span>
//             </li>
//           </ul>
//           <div className="flex space-x-4 mt-4">
//             <Link href="#" className="hover:text-[#D11479]">
//               <Facebook className="h-5 w-5 text-gray-700" />
//             </Link>
//             <Link href="#" className="hover:text-[#D11479]">
//               <Twitter className="h-5 w-5 text-gray-700" />
//             </Link>
//             <Link href="#" className="hover:text-[#D11479]">
//               <Instagram className="h-5 w-5 text-gray-700" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-200 mt-8 pt-4 text-center text-xs text-gray-500">
//         © {new Date().getFullYear()} Madonna University Computer Engineering
//         Department. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-[#192F59] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/realmadonalogo.png"
                alt="Madonna University Logo"
                width={50}
                height={50}
                className="rounded-md bg-white p-1"
              />
              <div>
                <h3 className="text-lg font-bold">Madonna University</h3>
                <p className="text-sm text-[#64BBE7]">Computer Engineering Department</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Empowering the next generation of computer engineers with quality education, innovative research, and
              ethical values to address technological challenges in Nigeria and beyond.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#64BBE7]/20 text-[#64BBE7] transition-colors hover:bg-[#64BBE7]/30"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#64BBE7]/20 text-[#64BBE7] transition-colors hover:bg-[#64BBE7]/30"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#64BBE7]/20 text-[#64BBE7] transition-colors hover:bg-[#64BBE7]/30"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#64BBE7]/20 text-[#64BBE7] transition-colors hover:bg-[#64BBE7]/30"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#64BBE7]/20 text-[#64BBE7] transition-colors hover:bg-[#64BBE7]/30"
              >
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <Separator className="bg-[#64BBE7]/30 w-16" />
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-[#64BBE7] flex items-center">
                  <ArrowRight size={14} className="mr-2 text-[#D11479]" />
                  About Department
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-gray-300 hover:text-[#64BBE7] flex items-center">
                  <ArrowRight size={14} className="mr-2 text-[#D11479]" />
                  Research
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-sm text-gray-300 hover:text-[#64BBE7] flex items-center">
                  <ArrowRight size={14} className="mr-2 text-[#D11479]" />
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-gray-300 hover:text-[#64BBE7] flex items-center">
                  <ArrowRight size={14} className="mr-2 text-[#D11479]" />
                  Research
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-sm text-gray-300 hover:text-[#64BBE7] flex items-center">
                  <ArrowRight size={14} className="mr-2 text-[#D11479]" />
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-300 hover:text-[#64BBE7] flex items-center">
                  <ArrowRight size={14} className="mr-2 text-[#D11479]" />
                  Events
                </Link>
              </li>
            
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-[#64BBE7] flex items-center">
                  <ArrowRight size={14} className="mr-2 text-[#D11479]" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <Separator className="bg-[#64BBE7]/30 w-16" />
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-[#D11479]" />
                <span className="text-sm text-gray-300">
                  Department of Computer Engineering,
                  <br />
                  Faculty of Engineering,
                  <br />
                  Madonna University Nigeria,
                  <br />
                  Akpugo Campus, Enugu State
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-[#D11479]" />
                <a href="tel:+2348012345678" className="text-sm text-gray-300 hover:text-[#64BBE7]">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-[#D11479]" />
                <a
                  href="mailto:computerengineering@madonnauniversity.edu.ng"
                  className="text-sm text-gray-300 hover:text-[#64BBE7]"
                >
                  computerengdeptmadonnaun@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-lg bg-[#64BBE7]/10 p-4">
              <h4 className="mb-2 text-sm font-semibold">Office Hours</h4>
              <p className="text-sm text-gray-300">Monday - Friday: 8:00 AM - 4:00 PM</p>
              <p className="text-sm text-gray-300">Saturday: 9:00 AM - 12:00 PM</p>
              <p className="text-sm text-gray-300">Sunday: Closed</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <Separator className="bg-[#64BBE7]/30 w-16" />
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter to receive updates on news, events, and opportunities.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-[#D11479] hover:bg-[#D11479]/90">Subscribe</Button>
            </div>
            <div className="mt-6 rounded-lg bg-[#D11479]/10 p-4">
              <h4 className="mb-2 text-sm font-semibold">Upcoming Event</h4>
              <p className="text-sm text-gray-300 font-medium">Annual Tech Exhibition</p>
              <p className="text-sm text-gray-300">May 15, 2025 | 10:00 AM</p>
              <p className="text-sm text-gray-300">Engineering Complex</p>
             
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0F1D38] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Madonna University Nigeria. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-[#64BBE7]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-xs text-gray-400 hover:text-[#64BBE7]">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="text-xs text-gray-400 hover:text-[#64BBE7]">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
