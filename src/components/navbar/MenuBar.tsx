import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Link } from "react-router-dom"
  
  export function MenuBar() {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Java</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
                <Link to="/java/modulo-1">Modulo 1</Link>
            </MenubarItem>
            <MenubarItem>
                <Link to="/java/modulo-2">Modulo 2</Link>
            </MenubarItem>
            <MenubarItem>
                <Link to="/java/modulo-3">Modulo 3</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Spring Boot</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
                <Link to="/spring-boot/modulo-1">Modulo 1</Link>
            </MenubarItem>
            <MenubarItem>
                <Link to="/spring-boot/modulo-2">Modulo 2</Link>
            </MenubarItem>
            <MenubarItem>
                <Link to="/spring-boot/modulo-3">Modulo 3</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  