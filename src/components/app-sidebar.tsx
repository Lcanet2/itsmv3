import * as React from "react"
import {
  ShieldUser,
  BriefcaseBusiness,
  Headset,
  Cog,
  User,
  GalleryVerticalEnd,
  Wrench,
  Warehouse,
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
          title: "Moniteurs",
          url: "#",
        },
        {
          title: "Logiciels",
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
          title: "Problèmes",
          url: "#",
        },
        {
          title: "Changements",
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
          title: "Licenses",
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
          title: "Projet",
          url: "#",
        },
        {
          title: "Notes",
          url: "#",
        },
        {
          title: "flux RSS",
          url: "#",
        },
        {
          title: "Base de connaissances",
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
      items : [
       {
          title: "Intitulés",
          url: "#",
         },
         {
          title: "Composants",
          url: "#",
         },
         {
          title: "Notifications",
          url: "#",
         },
          {
          title: "Niveau de service",
           url: "#",
         },
           {
          title: "Générale",
            url: "#",
            },
            {
            title: "Unicité des champs",
              url: "#",
            },
            {
              title: "Action automatique",
                url: "#",
            },
            {
             title: "Authentification",
               url: "#",
            },
            {
               title: "Collecteur",
                 url: "#",
            },
            {
              title: "Liens externes",
                url: "#",
            },
            {
              title: "Plugins",
              url: "#",
            },
     ],
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
