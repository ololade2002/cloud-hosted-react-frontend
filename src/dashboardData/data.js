
import { BookMarkedIcon, ShieldCheck, BookOpenCheckIcon ,Layers, DatabaseZap, CloudCogIcon, FileBracesCorner, FolderOpenDot } from "lucide-react"


export const statsCardData = [
    {
        title:'Courses In Progress',
        value:18,
        icon:BookMarkedIcon,
        id:1,
        bg:'bg-[#3B82F6]',
        iconColor:'text-[#3B82F6]'
       
    },
    {
        title:"Courses Completed",
        value:79,
        icon:BookOpenCheckIcon,
        id:2,
        bg:'bg-[#4C3FD9]',
        iconColor: 'text-[#4C3FD9]'
    },
    {
        title:"Certifications Earned",
        value:26,
        icon:ShieldCheck,
        id:3,
        bg:'bg-[#FFB86B]',
        iconColor:'text-[#FFB86B]'
    }
]

export const scheduleData = [
    {
        title: "AWS Cloud Computing",
        dateTime: "Feb 11 2026, 10:30am",
        bg:'bg-[#F1EDFF]',
        iconColor:'text-[#6D5DF6]',
        id:1,
        icon:CloudCogIcon,
    },
    {
        title:"AI & Machine Learning",
        dateTime:"Feb 15 2026, 12:00pm",    
        bg:'bg-[#FFF4E6]',
        iconColor:'text-[#F4A261]',
        id:2,
        icon:Layers,
    },
    {
        title:"Python for Data Science",
        dateTime:"Feb 20 2026, 9:00am",
        bg:'bg-[#E9F8EE]',
        iconColor:'text-[#6FCF97]',
        id:3,
        icon:DatabaseZap,
    }
]

export const taskData = [
    {
        title:"App Development",
        progress:70,
        id:1,
        task:'17 tasks'
    },
    {
        title:"Algorithm Design",
        progress:45,
        id:2,
        task:'26 tasks'
    },
    {   title  :"AWS Lambda",
        progress:85,
        id:3,
        task:'8 tasks'
    }
]

export const coursesData = [
  {
    id: 1,
    name: "Basic Algorithm",
    lessons: 26,
    startDate: "27 Jan, 2023",
    completed: 10,
    duration: "14h 38m 56s",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-600",
    icon:Layers,
  },
  {
    id: 2,
    name: "Web Development",
    lessons: 45,
    startDate: "23 Feb, 2023",
    completed: 40,
    duration: "36h 30m 00s",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-600",
    icon:FileBracesCorner,
  },
  {
    id: 3,
    name: "Basic Data Science",
    lessons: 37,
    startDate: "14 Jan, 2023",
    completed: 9,
    duration: "37h 00m 00s",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-600",
    icon:DatabaseZap,
  },
  {
    id: 4,
    name: "Project Management",
    lessons: 32,
    startDate: "19 Feb, 2023",
    completed: 26,
    duration: "16h 40m 50s",
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
    icon:FolderOpenDot,
  },
];
