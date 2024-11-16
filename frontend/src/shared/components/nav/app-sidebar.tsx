import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import logo from '@/shared/assets/logo.svg';
import dashboardIcon from '@/shared/assets/icons/dashboard.svg';
import freightsIcon from '@/shared/assets/icons/freights.svg';
import carriersIcon from '@/shared/assets/icons/carriers.svg';
import driversIcon from '@/shared/assets/icons/drivers.svg';
import vehiclesIcon from '@/shared/assets/icons/vehicles.svg';
import settingsIcon from '@/shared/assets/icons/settings.svg';
import helpIcon from '@/shared/assets/icons/help.svg';
import exitIcon from '@/shared/assets/icons/exit.svg';
import { useState } from "react";


export default function AppSidebar() {
  const [currentUrl, setCurrentUrl] = useState('Dashboard')

  const menuItemsTop = [
    {
      name: 'Dashboard',
      icon: dashboardIcon,
    },
    {
      name: 'Fretes',
      icon: freightsIcon,
    },
    {
      name: 'Transportadoras',
      icon: carriersIcon,
    },
    {
      name: 'Motoristas',
      icon: driversIcon,
    },
    {
      name: 'Veículos',
      icon: vehiclesIcon,
    },
  ]

  const menuItemsBottom = [
    {
      name: 'Configurações',
      icon: settingsIcon,
    },
    {
      name: 'Ajuda',
      icon: helpIcon,
    },
    {
      name: 'Sair',
      icon: exitIcon,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="bg-primary p-4 rounded-b-lg">
          <img src={logo} alt="Logo" className="w-1/2 m-auto" />
      </SidebarHeader>
      <SidebarContent className="gap-28 mt-14">

        <SidebarGroup className="p-0">
          <SidebarMenu className="flex flex-col gap-5">
            {menuItemsTop.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild isActive={item.name === currentUrl}
                                    onClick={() => setCurrentUrl(item.name)}
                                    className={item.name === currentUrl ? '!bg-transparent !rounded-r-none border-r-4 border-r-primary' : 'text-black/60'}>
                  <a href="#" className="px-8">
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarMenu className="flex flex-col gap-5">
            {menuItemsBottom.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild isActive={item.name === currentUrl}
                                    onClick={() => setCurrentUrl(item.name)}
                                    className={item.name === currentUrl ? '!bg-transparent !rounded-r-none border-r-4 border-r-primary' : 'text-black/60'}>
                  <a href="#" className="px-8">
                    <img src={item.icon} alt={item.name} />
                    {item.name}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
