import { Disclosure } from '@headlessui/react'
import Divider from '../Divider'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Presale Benefits', href: '#', current: true },
  { name: 'Features', href: '#', current: false },
  { name: 'Referral Program', href: '#', current: false },
  { name: 'Tokenomics', href: '#', current: false },
  { name: 'Market', href: '#', current: false },
  { name: 'Roadmap', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false },
]

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-[106px]"
                    src="/assets/logo.svg"
                    alt="Your Company"
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
                        item.current ? 'text-white' : 'text-gray-300  hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <>
                      <img
                        className="h-8 w-8"
                        src="/assets/mobile-logo-menu-close.svg"
                        alt="Your Company"
                      />

                    </>

                  ) : (
                    <img
                      className="h-8 w-auto"
                      src="/assets/mobile-logo-menu.svg"
                      alt="Your Company"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden h-screen w-screen relative flex flex-col gap-[40px]">
            <img className=" absolute lg:hidden top-[0px] h-screen w-screen right-0 z-[-1]" src="/assets/ellipse5.svg" loading='lazy' />

            <div className="space-y-1 px-2 pb-3 pt-12 items-start  ">
              {navigation.map((item) => (
                <>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-white' : 'text-gray-300 hover:text-[#69EAFF]',
                      'flex items-center gap-5 px-3 py-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928933C8.95262 0.538409 8.31946 0.538409 7.92893 0.928933C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM-8.74228e-08 9L15 9L15 7L8.74228e-08 7L-8.74228e-08 9Z" fill="currentColor" />
                    </svg>
                    {item.name}
                  </Disclosure.Button>
                  <Divider />
                </>
              ))}

            </div>
            <button className='button-gradient-1  py-3 px-8 rounded-[6px] w-[230px] text-[#FFF] text-[19px] mx-auto leading-7 uppercase mt-7'>JOIN COMMUNITY</button>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
