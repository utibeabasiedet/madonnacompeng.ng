"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Search,
  Download,
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  MapPin,
  Filter,
  Star,
  Bell,
} from "lucide-react"

export default function MadonnaUniversityCalendar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("first-semester")

  // Academic Calendar Data
  const academicEvents = {
    "first-semester": [
      // August 2024
      {
        id: 1,
        date: "19-22 Aug 2024",
        title: "Workshops/Seminar/Training for All Staff",
        category: "training",
        description: "Professional development workshops for faculty and staff",
        location: "All Campuses",
        month: "august",
        week: "Pre-Session",
      },
      {
        id: 2,
        date: "26 Aug 2024",
        title: "Supplementary First Semester Examination for 100 Level Students Stream B begins",
        category: "examination",
        description: "Make-up examinations for first semester 100 level students",
        location: "All Campuses",
        month: "august",
        week: "Pre-Session",
      },
      {
        id: 3,
        date: "26 Aug 2024",
        title: "Second Semester Exams (2023/2024) for 400 level and 500 Level Student of Pharmacy",
        category: "examination",
        description: "Final examinations for senior pharmacy students",
        location: "All Campuses",
        month: "august",
        week: "Pre-Session",
      },
      {
        id: 4,
        date: "28 Aug 2024",
        title: "Arrival of Returning Students",
        category: "registration",
        description: "Returning students report to campus",
        location: "All Campuses",
        month: "august",
        week: "Pre-Session",
      },
      {
        id: 5,
        date: "29 Aug 2024",
        title: "Registration/Hostel Allocation of new Students & Senate Meeting",
        category: "registration",
        description: "New student registration and accommodation assignment",
        location: "All Campuses",
        month: "august",
        week: "Pre-Session",
      },
      {
        id: 6,
        date: "31 Aug 2024",
        title: "Arrival of Fresh Students",
        category: "registration",
        description: "New students report to campus for the first time",
        location: "All Campuses",
        month: "august",
        week: "Pre-Session",
      },

      // September 2024
      {
        id: 7,
        date: "2 Sep 2024",
        title: "Portal Opens for Course Registration (All Students)",
        category: "registration",
        description: "Online course registration portal becomes available",
        location: "Online Portal",
        month: "september",
        week: "Pre-Session",
      },
      {
        id: 8,
        date: "3 Sep 2024",
        title: "Supplementary First Semester Examination for 100 Level Students Stream B ends",
        category: "examination",
        description: "Conclusion of make-up examinations",
        location: "All Campuses",
        month: "september",
        week: "Pre-Session",
      },
      {
        id: 9,
        date: "4-8 Sep 2024",
        title: "Feast of our Blessed Mother Mary",
        category: "religious",
        description: "Religious celebration and activities",
        location: "All Campuses",
        month: "september",
        week: "Week 1",
      },
      {
        id: 10,
        date: "9-13 Sep 2024",
        title: "Lectures Begin",
        category: "academic",
        description: "First semester lectures commence",
        location: "All Campuses",
        month: "september",
        week: "Week 1",
      },
      {
        id: 11,
        date: "10 Sep 2024",
        title: "Scholastic Mass on all Campuses",
        category: "religious",
        description: "Academic year opening mass",
        location: "All Campuses",
        month: "september",
        week: "Week 1",
      },
      {
        id: 12,
        date: "11 Sep 2024",
        title: "Freshers Orientation",
        category: "orientation",
        description: "Orientation program for new students",
        location: "All Campuses",
        month: "september",
        week: "Week 1",
      },
      {
        id: 13,
        date: "16 Sep 2024",
        title: "Eid Maulud [Public Holiday]",
        category: "holiday",
        description: "Public holiday celebration",
        location: "All Campuses",
        month: "september",
        week: "Week 2",
      },
      {
        id: 14,
        date: "19 Sep 2024",
        title: "Capacity Building Workshop (Elele Campus)",
        category: "training",
        description: "Faculty and Staff Alignment to University Best Practices",
        location: "Elele Campus",
        month: "september",
        week: "Week 2",
      },
      {
        id: 15,
        date: "25 Sep 2024",
        title: "1st Inaugural Lecture",
        category: "academic",
        description: "First inaugural lecture of the session",
        location: "All Campuses",
        month: "september",
        week: "Week 3",
      },
      {
        id: 16,
        date: "26 Sep 2024",
        title: "Capacity Building Workshop (Okija Campus)",
        category: "training",
        description: "Faculty and Staff Alignment to University Best Practices",
        location: "Okija Campus",
        month: "september",
        week: "Week 3",
      },

      // October 2024
      {
        id: 17,
        date: "1 Oct 2024",
        title: "Nigeria National Independence Day [Public Holiday]",
        category: "holiday",
        description: "National independence day celebration",
        location: "All Campuses",
        month: "october",
        week: "Week 4",
      },
      {
        id: 18,
        date: "3 Oct 2024",
        title: "Capacity Building Workshop (Akpugo Campus)",
        category: "training",
        description: "Faculty and Staff Alignment to University Best Practices",
        location: "Akpugo Campus",
        month: "october",
        week: "Week 4",
      },
      {
        id: 19,
        date: "5 Oct 2024",
        title: "Resumption of Post SIWES Candidates (Science and Engineering)",
        category: "academic",
        description: "Students return from industrial training",
        location: "Science & Engineering Faculties",
        month: "october",
        week: "Week 5",
      },
      {
        id: 20,
        date: "9 Oct 2024",
        title: "Faculty Board Meeting",
        category: "meeting",
        description: "Regular faculty board meeting",
        location: "All Campuses",
        month: "october",
        week: "Week 5",
      },
      {
        id: 21,
        date: "28 Oct 2024",
        title: "Late Registration Begins for All Returning Students",
        category: "registration",
        description: "Late registration period opens",
        location: "All Campuses",
        month: "october",
        week: "Week 8",
      },
      {
        id: 22,
        date: "31 Oct 2024",
        title: "Senate Meeting",
        category: "meeting",
        description: "University senate meeting",
        location: "All Campuses",
        month: "october",
        week: "Week 8",
      },

      // November 2024
      {
        id: 23,
        date: "1 Nov 2024",
        title: "All Saints [Holy Day of Obligation]",
        category: "religious",
        description: "Religious observance",
        location: "All Campuses",
        month: "november",
        week: "Week 9",
      },
      {
        id: 24,
        date: "8 Nov 2024",
        title: "Deadline for Deferment",
        category: "academic",
        description: "Last day to defer academic programs",
        location: "All Campuses",
        month: "november",
        week: "Week 9",
      },
      {
        id: 25,
        date: "13 Nov 2024",
        title: "Faculty Board Meeting",
        category: "meeting",
        description: "Regular faculty board meeting",
        location: "All Campuses",
        month: "november",
        week: "Week 10",
      },
      {
        id: 26,
        date: "20 Nov 2024",
        title: "2nd Inaugural Lecture",
        category: "academic",
        description: "Second inaugural lecture of the session",
        location: "All Campuses",
        month: "november",
        week: "Week 11",
      },
      {
        id: 27,
        date: "21 Nov 2024",
        title: "Department Board Meeting",
        category: "meeting",
        description: "Departmental board meetings",
        location: "All Campuses",
        month: "november",
        week: "Week 11",
      },
      {
        id: 28,
        date: "28 Nov 2024",
        title: "Convocation Lecture",
        category: "academic",
        description: "Pre-convocation lecture",
        location: "All Campuses",
        month: "november",
        week: "Week 12",
      },
      {
        id: 29,
        date: "29 Nov 2024",
        title: "22nd Convocation for Award of First and Higher Degrees",
        category: "graduation",
        description: "University graduation ceremony",
        location: "All Campuses",
        month: "november",
        week: "Week 12",
      },

      // December 2024
      {
        id: 30,
        date: "5 Dec 2024",
        title: "Evaluation coverage of First Semester Courses' Contents by DQA & DAP",
        category: "academic",
        description: "Course content evaluation",
        location: "All Campuses",
        month: "december",
        week: "Week 13",
      },
      {
        id: 31,
        date: "13 Dec 2024",
        title: "Harvest & Bazaar/End of Year Mass",
        category: "religious",
        description: "End of year religious celebration",
        location: "All Campuses",
        month: "december",
        week: "Week 14",
      },
      {
        id: 32,
        date: "14 Dec 2024",
        title: "Departure of all Students for Christmas/New year Break",
        category: "break",
        description: "Students leave for holiday break",
        location: "All Campuses",
        month: "december",
        week: "Week 14",
      },
      {
        id: 33,
        date: "20 Dec 2024",
        title: "Departure of Faculty and Staff for Christmas/New year Break",
        category: "break",
        description: "Faculty and staff holiday break begins",
        location: "All Campuses",
        month: "december",
        week: "Week 14",
      },

      // January 2025
      {
        id: 34,
        date: "7 Jan 2025",
        title: "Faculty and Staff resume work",
        category: "academic",
        description: "Return from holiday break",
        location: "All Campuses",
        month: "january",
        week: "Resumption",
      },
      {
        id: 35,
        date: "9-10 Jan 2025",
        title: "Resumption of all Students from Christmas/New Year Break",
        category: "academic",
        description: "Students return from holiday break",
        location: "All Campuses",
        month: "january",
        week: "Resumption",
      },
      {
        id: 36,
        date: "15 Jan 2025",
        title: "DQA and DAP meet with HODs to Evaluate coverage of First Semester Courses' Contents",
        category: "academic",
        description: "Course evaluation meeting",
        location: "All Campuses",
        month: "january",
        week: "Week 15",
      },
      {
        id: 37,
        date: "16 Jan 2025",
        title: "Meeting of Management with all Exam Invigilators",
        category: "meeting",
        description: "Examination preparation meeting",
        location: "All Campuses",
        month: "january",
        week: "Week 15",
      },
      {
        id: 38,
        date: "20-25 Jan 2025",
        title: "1st Semester Examinations (Except 100 level & 500 Level Pharmacy)",
        category: "examination",
        description: "First semester final examinations",
        location: "All Campuses",
        month: "january",
        week: "Exam Week 1",
      },
      {
        id: 39,
        date: "27 Jan - 1 Feb 2025",
        title: "1st Semester Examinations Continue",
        category: "examination",
        description: "Continuation of first semester examinations",
        location: "All Campuses",
        month: "january",
        week: "Exam Week 2",
      },
      {
        id: 40,
        date: "30 Jan 2025",
        title: "Senate Meeting",
        category: "meeting",
        description: "University senate meeting",
        location: "All Campuses",
        month: "january",
        week: "Exam Week 2",
      },

      // February 2025
      {
        id: 41,
        date: "3-7 Feb 2025",
        title: "1st Semester Examinations (Final Week)",
        category: "examination",
        description: "Final week of first semester examinations",
        location: "All Campuses",
        month: "february",
        week: "Exam Week 3",
      },
      {
        id: 42,
        date: "10-14 Feb 2025",
        title: "Sport and Recreational Activities for students",
        category: "recreation",
        description: "Sports and recreational activities",
        location: "All Campuses",
        month: "february",
        week: "Break Week",
      },
      {
        id: 43,
        date: "10 Feb 2025",
        title: "Conference marking begins",
        category: "academic",
        description: "Examination marking period begins",
        location: "All Campuses",
        month: "february",
        week: "Break Week",
      },
    ],

    "second-semester": [
      // February 2025
      {
        id: 44,
        date: "17-21 Feb 2025",
        title: "Portal Opens for Course Registration (Except 100 level & 500 Level Pharmacy)",
        category: "registration",
        description: "Second semester course registration opens",
        location: "Online Portal",
        month: "february",
        week: "Registration Week",
      },
      {
        id: 45,
        date: "27 Feb 2025",
        title: "3rd Inaugural Lecture",
        category: "academic",
        description: "Third inaugural lecture of the session",
        location: "All Campuses",
        month: "february",
        week: "Registration Week",
      },
      {
        id: 46,
        date: "28 Feb 2025",
        title: "End of Conference Marking",
        category: "academic",
        description: "Completion of examination marking",
        location: "All Campuses",
        month: "february",
        week: "Registration Week",
      },

      // March 2025
      {
        id: 47,
        date: "3-7 Mar 2025",
        title: "Second Semester Lectures begins",
        category: "academic",
        description: "Commencement of second semester lectures",
        location: "All Campuses",
        month: "march",
        week: "Week 1",
      },
      {
        id: 48,
        date: "5 Mar 2025",
        title: "Ash Wednesday",
        category: "religious",
        description: "Religious observance",
        location: "All Campuses",
        month: "march",
        week: "Week 1",
      },
      {
        id: 49,
        date: "10 Mar 2025",
        title: "Supplementary Exams Begins for 100 Level Students",
        category: "examination",
        description: "Make-up examinations for 100 level students",
        location: "All Campuses",
        month: "march",
        week: "Week 2",
      },
      {
        id: 50,
        date: "12 Mar 2025",
        title: "Department Board Meeting (Consideration of 1st Semester Results)",
        category: "meeting",
        description: "Review of first semester academic results",
        location: "All Campuses",
        month: "march",
        week: "Week 2",
      },
      {
        id: 51,
        date: "19 Mar 2025",
        title: "Faculty Board Meeting (Consideration of 1st Semester Results)",
        category: "meeting",
        description: "Faculty review of first semester results",
        location: "All Campuses",
        month: "march",
        week: "Week 3",
      },
      {
        id: 52,
        date: "27 Mar 2025",
        title: "Senate Meeting",
        category: "meeting",
        description: "University senate meeting",
        location: "All Campuses",
        month: "march",
        week: "Week 4",
      },

      // April 2025
      {
        id: 53,
        date: "31 Mar 2025",
        title: "Eid al-Fitr [Public Holiday]",
        category: "holiday",
        description: "Public holiday celebration",
        location: "All Campuses",
        month: "march",
        week: "Week 5",
      },
      {
        id: 54,
        date: "8 Apr 2025",
        title: "Uploading of First Semester Results on Portal",
        category: "academic",
        description: "First semester results published online",
        location: "Online Portal",
        month: "april",
        week: "Week 6",
      },
      {
        id: 55,
        date: "9-12 Apr 2025",
        title: "Feast of Jesus the Saviour",
        category: "religious",
        description: "Religious celebration",
        location: "All Campuses",
        month: "april",
        week: "Week 6",
      },
      {
        id: 56,
        date: "13 Apr 2025",
        title: "Palm Sunday",
        category: "religious",
        description: "Religious observance",
        location: "All Campuses",
        month: "april",
        week: "Week 7",
      },
      {
        id: 57,
        date: "16 Apr 2025",
        title: "Students vacate for Easter Break",
        category: "break",
        description: "Students leave for Easter holiday",
        location: "All Campuses",
        month: "april",
        week: "Week 7",
      },
      {
        id: 58,
        date: "17 Apr 2025",
        title: "Faculty & Staff Vacate for Easter Break",
        category: "break",
        description: "Faculty and staff Easter break begins",
        location: "All Campuses",
        month: "april",
        week: "Week 7",
      },
      {
        id: 59,
        date: "18 Apr 2025",
        title: "Good Friday",
        category: "religious",
        description: "Religious observance",
        location: "All Campuses",
        month: "april",
        week: "Easter Week",
      },
      {
        id: 60,
        date: "20 Apr 2025",
        title: "Easter Sunday",
        category: "religious",
        description: "Easter celebration",
        location: "All Campuses",
        month: "april",
        week: "Easter Week",
      },

      // May 2025
      {
        id: 61,
        date: "1 May 2025",
        title: "Labour Day [Public Holiday]",
        category: "holiday",
        description: "International workers' day",
        location: "All Campuses",
        month: "may",
        week: "Week 8",
      },
      {
        id: 62,
        date: "2 May 2025",
        title: "Resumption of All Students from Easter Break",
        category: "academic",
        description: "Students return from Easter holiday",
        location: "All Campuses",
        month: "may",
        week: "Week 8",
      },
      {
        id: 63,
        date: "14 May 2025",
        title: "Evaluation coverage of Second Semester Courses' Contents by DQA & DAP",
        category: "academic",
        description: "Second semester course evaluation",
        location: "All Campuses",
        month: "may",
        week: "Week 9",
      },
      {
        id: 64,
        date: "28 May 2025",
        title: "Senate Meeting",
        category: "meeting",
        description: "University senate meeting",
        location: "All Campuses",
        month: "may",
        week: "Week 11",
      },
      {
        id: 65,
        date: "29 May 2025",
        title: "Ascension Day [Holy Day of Obligation]",
        category: "religious",
        description: "Religious observance",
        location: "All Campuses",
        month: "may",
        week: "Week 11",
      },

      // June 2025
      {
        id: 66,
        date: "5 Jun 2025",
        title: "Matriculation at Okija Campus",
        category: "graduation",
        description: "New student matriculation ceremony",
        location: "Okija Campus",
        month: "june",
        week: "Week 12",
      },
      {
        id: 67,
        date: "6 Jun 2025",
        title: "Matriculation at Elele Campus",
        category: "graduation",
        description: "New student matriculation ceremony",
        location: "Elele Campus",
        month: "june",
        week: "Week 12",
      },
      {
        id: 68,
        date: "12 Jun 2025",
        title: "Democracy Day [Public Holiday]",
        category: "holiday",
        description: "National democracy day",
        location: "All Campuses",
        month: "june",
        week: "Week 13",
      },
      {
        id: 69,
        date: "13 Jun 2025",
        title: "Career Development Day",
        category: "academic",
        description: "Career guidance and development activities",
        location: "All Campuses",
        month: "june",
        week: "Week 13",
      },
      {
        id: 70,
        date: "16-20 Jun 2025",
        title: "Revision Week",
        category: "academic",
        description: "Examination preparation and revision",
        location: "All Campuses",
        month: "june",
        week: "Week 14",
      },
      {
        id: 71,
        date: "23-27 Jun 2025",
        title: "2nd Semester Examination for ALL Students begins (Except 500 Level Pharmacy)",
        category: "examination",
        description: "Second semester final examinations commence",
        location: "All Campuses",
        month: "june",
        week: "Exam Week 1",
      },

      // July 2025
      {
        id: 72,
        date: "30 Jun - 4 Jul 2025",
        title: "2nd Semester Examination Continues",
        category: "examination",
        description: "Continuation of second semester examinations",
        location: "All Campuses",
        month: "july",
        week: "Exam Week 2",
      },
      {
        id: 73,
        date: "7-11 Jul 2025",
        title: "2nd Semester Examination Continues and ends",
        category: "examination",
        description: "Final week of second semester examinations",
        location: "All Campuses",
        month: "july",
        week: "Exam Week 3",
      },
      {
        id: 74,
        date: "14 Jul 2025",
        title: "Conference marking in all campuses begins",
        category: "academic",
        description: "Examination marking period begins",
        location: "All Campuses",
        month: "july",
        week: "Post-Exam",
      },
      {
        id: 75,
        date: "15 Jul 2025",
        title: "Students Long Vacation begins",
        category: "break",
        description: "Summer vacation period begins",
        location: "All Campuses",
        month: "july",
        week: "Post-Exam",
      },
      {
        id: 76,
        date: "21 Jul 2025",
        title: "Supplementary Lectures for 100 Level Students Stream B begins",
        category: "academic",
        description: "Remedial lectures for 100 level students",
        location: "All Campuses",
        month: "july",
        week: "Post-Exam",
      },
      {
        id: 77,
        date: "25 Jul 2025",
        title: "Conference Marking ends",
        category: "academic",
        description: "Completion of examination marking",
        location: "All Campuses",
        month: "july",
        week: "Post-Exam",
      },
      {
        id: 78,
        date: "30 Jul 2025",
        title: "Department Board Meeting (Consideration of 2nd Semester Results)",
        category: "meeting",
        description: "Review of second semester academic results",
        location: "All Campuses",
        month: "july",
        week: "Post-Exam",
      },
      {
        id: 79,
        date: "31 Jul 2025",
        title: "Senate Meeting",
        category: "meeting",
        description: "University senate meeting",
        location: "All Campuses",
        month: "july",
        week: "Post-Exam",
      },

      // August 2025
      {
        id: 80,
        date: "1 Aug 2025",
        title: "Faculty Board Meeting (Consideration of 2nd Semester Results)",
        category: "meeting",
        description: "Faculty review of second semester results",
        location: "All Campuses",
        month: "august",
        week: "Post-Exam",
      },
      {
        id: 81,
        date: "15 Aug 2025",
        title: "Assumption of the Blessed Virgin Mary [Holy Day of Obligation]",
        category: "religious",
        description: "Religious observance",
        location: "All Campuses",
        month: "august",
        week: "Vacation",
      },
      {
        id: 82,
        date: "19 Aug 2025",
        title: "Supplementary First Semester Examination for 100 Level Students Stream B begins",
        category: "examination",
        description: "Make-up examinations for 100 level students",
        location: "All Campuses",
        month: "august",
        week: "Vacation",
      },
      {
        id: 83,
        date: "27 Aug 2025",
        title: "Supplementary First Semester Examination for 100 Level Students Stream B ends",
        category: "examination",
        description: "Conclusion of make-up examinations",
        location: "All Campuses",
        month: "august",
        week: "Vacation",
      },
      {
        id: 84,
        date: "27 Aug 2025",
        title: "Arrival of Freshers on Campus for 2025/2026 Academic session",
        category: "registration",
        description: "New students arrive for next academic session",
        location: "All Campuses",
        month: "august",
        week: "New Session Prep",
      },
      {
        id: 85,
        date: "30 Aug 2025",
        title: "Arrival of returning Students to campus for 2025/2026 Academic session",
        category: "registration",
        description: "Returning students arrive for next academic session",
        location: "All Campuses",
        month: "august",
        week: "New Session Prep",
      },

      // September 2025
      {
        id: 86,
        date: "2 Sep 2025",
        title: "Screening/Registration of new and old Student & Senate Meeting",
        category: "registration",
        description: "Student screening and registration for new session",
        location: "All Campuses",
        month: "september",
        week: "New Session",
      },
      {
        id: 87,
        date: "4-8 Sep 2025",
        title: "Feast of our Blessed Mother Mary",
        category: "religious",
        description: "Religious celebration",
        location: "All Campuses",
        month: "september",
        week: "New Session",
      },
      {
        id: 88,
        date: "9-13 Sep 2025",
        title: "Lectures for 2025/2026 session begins",
        category: "academic",
        description: "Commencement of new academic session",
        location: "All Campuses",
        month: "september",
        week: "Week 1 (New Session)",
      },
    ],
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: "bg-blue-100 text-blue-800",
      examination: "bg-red-100 text-red-800",
      registration: "bg-green-100 text-green-800",
      religious: "bg-purple-100 text-purple-800",
      holiday: "bg-yellow-100 text-yellow-800",
      meeting: "bg-gray-100 text-gray-800",
      training: "bg-orange-100 text-orange-800",
      orientation: "bg-indigo-100 text-indigo-800",
      break: "bg-pink-100 text-pink-800",
      graduation: "bg-emerald-100 text-emerald-800",
      recreation: "bg-cyan-100 text-cyan-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      academic: <BookOpen className="w-4 h-4" />,
      examination: <Clock className="w-4 h-4" />,
      registration: <Users className="w-4 h-4" />,
      religious: <Star className="w-4 h-4" />,
      holiday: <Calendar className="w-4 h-4" />,
      meeting: <Users className="w-4 h-4" />,
      training: <GraduationCap className="w-4 h-4" />,
      orientation: <Users className="w-4 h-4" />,
      break: <Calendar className="w-4 h-4" />,
      graduation: <GraduationCap className="w-4 h-4" />,
      recreation: <Users className="w-4 h-4" />,
    }
    return icons[category as keyof typeof icons] || <Calendar className="w-4 h-4" />
  }

  const filteredEvents = useMemo(() => {
    const events = academicEvents[activeTab as keyof typeof academicEvents] || []
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesMonth = selectedMonth === "all" || event.month === selectedMonth
      const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
      return matchesSearch && matchesMonth && matchesCategory
    })
  }, [activeTab, searchTerm, selectedMonth, selectedCategory])

  const downloadCalendar = () => {
    // In a real application, this would generate and download a PDF or ICS file
    alert("Calendar download feature would be implemented here")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">MU</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Madonna University, Nigeria</h1>
                <p className="text-gray-600">Academic Calendar 2024/2025 Session</p>
                <p className="text-sm text-gray-500">Document No: MUN_DAP_012 | Date Issued: 01/07/2024</p>
              </div>
            </div>
            <Button onClick={downloadCalendar} className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download Calendar
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Events</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {academicEvents["first-semester"].length + academicEvents["second-semester"].length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Examinations</p>
                  <p className="text-3xl font-bold text-red-600">
                    {
                      [...academicEvents["first-semester"], ...academicEvents["second-semester"]].filter(
                        (e) => e.category === "examination",
                      ).length
                    }
                  </p>
                </div>
                <Clock className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Academic Events</p>
                  <p className="text-3xl font-bold text-green-600">
                    {
                      [...academicEvents["first-semester"], ...academicEvents["second-semester"]].filter(
                        (e) => e.category === "academic",
                      ).length
                    }
                  </p>
                </div>
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Graduations</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {
                      [...academicEvents["first-semester"], ...academicEvents["second-semester"]].filter(
                        (e) => e.category === "graduation",
                      ).length
                    }
                  </p>
                </div>
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="first-semester">First Semester</TabsTrigger>
            <TabsTrigger value="second-semester">Second Semester</TabsTrigger>
          </TabsList>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">
                    {activeTab === "first-semester" ? "First Semester Events" : "Second Semester Events"}
                  </CardTitle>
                  <CardDescription>
                    {activeTab === "first-semester" ? "August 2024 - February 2025" : "February 2025 - September 2025"}
                  </CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-800">{filteredEvents.length} Events</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <Input
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Months</SelectItem>
                    <SelectItem value="august">August</SelectItem>
                    <SelectItem value="september">September</SelectItem>
                    <SelectItem value="october">October</SelectItem>
                    <SelectItem value="november">November</SelectItem>
                    <SelectItem value="december">December</SelectItem>
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="february">February</SelectItem>
                    <SelectItem value="march">March</SelectItem>
                    <SelectItem value="april">April</SelectItem>
                    <SelectItem value="may">May</SelectItem>
                    <SelectItem value="june">June</SelectItem>
                    <SelectItem value="july">July</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="examination">Examinations</SelectItem>
                    <SelectItem value="registration">Registration</SelectItem>
                    <SelectItem value="religious">Religious</SelectItem>
                    <SelectItem value="holiday">Holidays</SelectItem>
                    <SelectItem value="meeting">Meetings</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="graduation">Graduation</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedMonth("all")
                    setSelectedCategory("all")
                  }}
                  className="flex items-center"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className={`${getCategoryColor(event.category)} border-0 flex items-center`}>
                              {getCategoryIcon(event.category)}
                              <span className="ml-1 capitalize">{event.category}</span>
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {event.week}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Bell className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredEvents.length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria or filters</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </Tabs>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              <strong>Madonna University, Nigeria</strong> - Academic Calendar 2024/2025 Session
            </p>
            <p className="text-sm">Document No: MUN_DAP_012 | Date Issued: 01/07/2024 | Page 1-3</p>
            <p className="text-sm mt-2">For more information, contact the Academic Planning Department</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
