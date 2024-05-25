import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    ListItem
  } from "@/components/ui/navigation-menu";
  import Link from "next/link";
  import {ThemeToggle} from "@/components/ui/theme-toggle";
  import Container from "@/components/ui/container"
  import Logo from '../public/market-optimizer-logo.jpg';
  
  export default function Navbar() {
    return(
      <div className="flex p-4 h-24 w-[100%]">
        <Container>
          <img src={Logo.src} alt="Logo"/>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
  
                <NavigationMenuTrigger>Mercadona</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-4">
                    <ListItem>
                    <Link href="/mercadona/categorias">
                      <NavigationMenuLink>Categorías</NavigationMenuLink>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link href="/mercadona/categorias/112">
                      <NavigationMenuLink>Productos</NavigationMenuLink>
                    </Link>
                    </ListItem>
                  </li>
                </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
  
              <NavigationMenuItem>
                <NavigationMenuTrigger>Lidl</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-2">
                    <ListItem>
                      <Link href="/lidl/productos">
                      <NavigationMenuLink>Productos</NavigationMenuLink>
                      </Link>
                    </ListItem>
                  </li>
                </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
  
              <NavigationMenuItem>
                <NavigationMenuTrigger>Caprabo</NavigationMenuTrigger>
                <NavigationMenuContent>
                <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem>
                    <Link href="/caprabo/productos">
                      <NavigationMenuLink>Productos</NavigationMenuLink>
                    </Link>
                    </ListItem>
                  </li>
                </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
  
              <NavigationMenuItem>
                <NavigationMenuTrigger>Comparación de cadenas</NavigationMenuTrigger>
              </NavigationMenuItem>
  
            </NavigationMenuList>
          </NavigationMenu>
          <ul className="absolute p-2 right-px ">
          <ThemeToggle/>
          </ul>
        </Container>
      </div>
    )
  }
  