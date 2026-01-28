import React, { useState } from "react"
import { LayoutDashboard, FileText, Mail, Flame, BookOpenText, Settings } from "lucide-react"
import logo from "../assets/logo3.png"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard },
  { title: "My Courses", url: "#", icon: FileText },
  { title: "Messages", url: "#", icon: Mail },
  { title: "Lessons", url: "#", icon: Flame },
  { title: "Ebooks", url: "#", icon: BookOpenText },
  { title: "Settings", url: "#", icon: Settings },
]

const AppSidebar = () => {
  const [active, setActive] = useState("Dashboard")

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center justify-center mt-4">
              <img className=" h-12 w-16 -mr-4.5 " src={logo} alt="Logo" />
              <h1 className="text-gray-700 font-semibold font-raleway text-[26px]">Dayly</h1>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="pt-12 space-y-0.5">
              {items.map((item) => {
                const isActive = active === item.title

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <button type="button" onClick={() => setActive(item.title)}
                        className={`flex w-full items-center font-raleway gap-3 rounded-lg px-3 py-6 text-[16px] font-medium transition
                          ${isActive ? "bg-bgLightPurple text-textPurple hover:text-textPurple" : "text-gray-500 hover:bg-bgLightPurple hover:text-textPurple"}`}>
                        <item.icon className="h-8 w-8" />
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="bg-bgLightPurple font-raleway  flex flex-col items-center justify-center px-4 pt-10 pb-6 rounded-tl-2xl rounded-tr-2xl text-center">
        <h2 className=" font-bold text-[20px]">Dayly for Mobile</h2>
        <p className="text-gray-600 text-[13px] pb-10">Get everything in your phone now.</p>
        <button className="text-white w-full py-3 rounded-lg font-medium bg-bgPurple">Download now</button>
      </div>
    </Sidebar>
  )
}

export default AppSidebar
