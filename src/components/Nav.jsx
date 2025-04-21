import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Github, LinkedinIcon } from "lucide-react";

export default function Nav() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="px-4 py-2 hover:bg-gray-100 block">
              <span className="text-blue-600 font-bold">React-Blog</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a
                href="https://github.com/codeartisanriz/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 hover:bg-gray-100 block"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="https://www.linkedin.com/in/codeartisanriz/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 hover:bg-gray-100 block"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}