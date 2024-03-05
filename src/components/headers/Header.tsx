import { Disclosure } from "@headlessui/react";
import Divider from "../Divider";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Presale Benefits", href: "#", current: true },
  { name: "Features", href: "#", current: false },
  { name: "Referral Program", href: "#", current: false },
  { name: "Tokenomics", href: "#", current: false },
  { name: "Market", href: "#", current: false },
  { name: "Roadmap", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-[106px]"
                    src="/assets/logo.svg"
                    alt="Sharkroll Logo"
                  />
                </div>
              </div>
              <div className="hidden sm:ml-6 lg:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-white"
                          : "text-gray-300 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex -mr-2 lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">
                    {open ? "Close main menu" : "Open main menu"}
                  </span>
                  {open ? (
                    <img
                      className="w-8 h-8"
                      src="/assets/mobile-logo-menu-close.svg"
                      alt="Close menu"
                    />
                  ) : (
                    <img
                      className="w-auto h-8"
                      src="/assets/mobile-logo-menu.svg"
                      alt="Open menu"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden h-screen w-screen relative flex flex-col gap-[40px]">
            <img
              className="absolute lg:hidden top-[0px] h-screen w-screen right-0 z-[-1]"
              src="/assets/ellipse5.svg"
              alt="Background design"
              loading="lazy"
            />
            <div className="items-start px-2 pt-12 pb-3 space-y-1">
              {navigation.map((item) => (
                <>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-gray-300 hover:text-[#69EAFF]",
                      "flex items-center gap-5 px-3 py-4 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                  <Divider />
                </>
              ))}
            </div>
            <button className="button-gradient-1 py-3 px-8 rounded-[6px] w-[230px] text-[#FFF] text-[19px] mx-auto leading-7 uppercase mt-7">
              JOIN COMMUNITY
            </button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
