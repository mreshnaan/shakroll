import { Disclosure } from '@headlessui/react'

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
                        src="/assets/mobile-logo-menu.svg"
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
