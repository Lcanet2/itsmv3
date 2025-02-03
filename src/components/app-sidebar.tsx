import * as React from "react";
import { Ticket, Home, Computer, List, Wrench, UserCog, Settings } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Home",
    url: "Home",
    icon: Home,
  },
  {
    title: "Assets",
    url: "Assets",
    icon: Computer,
  },
  {
    title: "Assistance",
    url: "Assistance",
    icon: Ticket,
  },
  {
    title: "Management",
    url: "Management",
    icon: List,
  },
  {
    title: "Tools",
    url: "Tools",
    icon: Wrench,
  },
  {
    title: "Administration",
    url: "Administration",
    icon: UserCog,
  },
  {
    title: "Setup",
    url: "Setup",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

