import * as React from "react"
import {
  ShieldUser,
  BriefcaseBusiness,
  Headset,
  Cog,
  User,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Wrench,
  Warehouse,
  icons,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Léo Canet",
    email: "leo.canet@itsm-ng.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ITSM-NG",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Assets",
      url: "#",
      icon: Warehouse,
      isActive: true,
      items: [
        {
          title: "Ordinateurs",
          url: "#",
        },
        {
          title: "PDU",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Assistance",
      url: "#",
      icon: Headset,
      items: [
        {
          title: "Ticket",
          url: "#",
        },
        {
          title: "Créer un ticket",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Gestion",
      url: "#",
      icon: BriefcaseBusiness,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Outils",
      url: "#",
      icon: Wrench,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Administration",
      url: "#",
      icon: ShieldUser,
      items: [
        {
          title: "Utilisateurs",
          url: "#",
          icons: User,
        },
        {
          title: "Groupes",
          url: "#",
        },
        {
          title: "Entités",
          url: "#",
        },
        {
          title: "Règles",
          url: "#",
         }, 
        {
          title: "Dictionnaires",
          url: "#",
        },
        {
          title: "Profils",
          url: "#",
        },
        {
          title: "File d'attente des notifications",
          url: "#",
        },
        {
          title: "File d'attente pour le chat",
          url: "#",
        },
        {
          title: "Journaux",
          url: "#",
        },
       ]
    },
    {
      title: "Configuration",
      url: "#",
      icon: Cog,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
