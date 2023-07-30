import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setOpen] = useState(false);
  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const router = useRouter();

  const routing = (route) => {
    router.push(route);
    setOpen(false);
  };

  const processor = "processor";
  const motherboard = "motherboard";
  const ram = "ram";
  const powerSupply = "powerSupply";
  const monitor = "monitor";
  const storage = "storage";

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-white text-2xl">
              <Link href={"/"}>PC BUILDER</Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
            <div className="relative ml-3">
              <div>
                <button
                  onClick={handleDropDown}
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-400"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Featured Categories
                </button>
              </div>

              <div
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${
                  isOpen ? "inline-block" : "hidden"
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <Link
                  href={`/category/${processor}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  CPU / Processor
                </Link>
                <Link
                  href={`/category/${motherboard}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Motherboard
                </Link>
                <Link
                  href={`/category/${ram}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  RAM
                </Link>
                <Link
                  href={`/category/${powerSupply}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Power Supply Unit
                </Link>
                <Link
                  href={`/category/${storage}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Storage Device
                </Link>
                <Link
                  href={`/category/${monitor}`}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Monitor
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Others
                </Link>
              </div>
            </div>
            {!session?.user ? (
              <button
                onClick={() => routing("/login")}
                type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/login" })
                }
                type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Logout
              </button>
            )}
            <button
              onClick={() => routing("/PcBuilder")}
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              PC BUILDER
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
