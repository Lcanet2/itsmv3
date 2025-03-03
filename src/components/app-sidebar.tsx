import * as React from "react";
import { Ticket, Home, Computer, List, Wrench, UserCog, Settings, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const groups = [
  {
    label: "Resources",
    defaultOpen: true,
    items: [
      {
        title: "Assets",
        url: "Assets",
        icon: Computer,
      },
      {
        title: "Assistance",
        url: "Assistance",
        icon: Ticket,
      }
    ]
  },
  {
    label: "Operations",
    defaultOpen: false,
    items: [
      {
        title: "Management",
        url: "Management",
        icon: List,
      },
      {
        title: "Tools",
        url: "Tools",
        icon: Wrench,
      }
    ]
  },
  {
    label: "System",
    defaultOpen: false,
    items: [
      {
        title: "Administration",
        url: "Administration",
        icon: UserCog,
      },
      {
        title: "Setup",
        url: "Setup",
        icon: Settings,
      }
    ]
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {groups.map((group) => (
          <Collapsible 
            key={group.label} 
            defaultOpen={group.defaultOpen} 
            className="group/collapsible mb-2"
          >
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center">
                  {group.label}
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url} className="flex items-center">
                            <item.icon className="mr-2 h-4 w-4" />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}