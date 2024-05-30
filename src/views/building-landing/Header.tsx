'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">오피스너</span>
            <svg width="60" height="20" viewBox="0 0 132 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.8156 15.8866C29.8156 17.0213 29.6265 18.0851 29.2482 19.078C28.87 20.0473 28.3381 20.9102 27.6525 21.6667C26.9906 22.4232 26.1986 23.0497 25.2766 23.5461C24.3783 24.0426 23.3854 24.3854 22.2979 24.5745V29.5036H34.8865C35.4539 29.5036 35.7376 30.0828 35.7376 31.2412C35.7376 32.3759 35.4539 32.9433 34.8865 32.9433H5.27661V29.5036H18.3617V24.539C17.2979 24.3263 16.3168 23.9717 15.4185 23.4752C14.5201 22.9787 13.74 22.3523 13.078 21.5958C12.4397 20.8393 11.9315 19.9882 11.5532 19.0426C11.1986 18.0733 11.0213 17.0213 11.0213 15.8866C11.0213 14.5863 11.2577 13.3925 11.7305 12.305C12.227 11.2175 12.8889 10.2837 13.7163 9.50357C14.5674 8.72343 15.5603 8.12059 16.6951 7.69506C17.8534 7.26953 19.0946 7.05676 20.4185 7.05676C21.7423 7.05676 22.9716 7.26953 24.1064 7.69506C25.2648 8.12059 26.2577 8.72343 27.0851 9.50357C27.9362 10.2837 28.5981 11.2175 29.0709 12.305C29.5674 13.3925 29.8156 14.5863 29.8156 15.8866ZM25.9149 15.8866C25.9149 15.0828 25.7612 14.3499 25.4539 13.688C25.1702 13.0024 24.7802 12.435 24.2837 11.9858C23.7873 11.513 23.2081 11.1466 22.5461 10.8866C21.8842 10.6265 21.175 10.4965 20.4185 10.4965C19.662 10.4965 18.9527 10.6265 18.2908 10.8866C17.6289 11.1466 17.0497 11.513 16.5532 11.9858C16.0568 12.435 15.6549 13.0024 15.3475 13.688C15.0638 14.3499 14.922 15.0828 14.922 15.8866C14.922 16.714 15.0638 17.4587 15.3475 18.1206C15.6549 18.7825 16.0568 19.3499 16.5532 19.8227C17.0497 20.2719 17.6289 20.6265 18.2908 20.8865C18.9527 21.1466 19.662 21.2766 20.4185 21.2766C21.175 21.2766 21.8842 21.1466 22.5461 20.8865C23.2081 20.6265 23.7873 20.2719 24.2837 19.8227C24.7802 19.3499 25.1702 18.7825 25.4539 18.1206C25.7612 17.4587 25.9149 16.714 25.9149 15.8866Z"
                fill="#2563EB"
              />
              <path
                d="M51.0071 10.8865H46.078V23.9362H51.0071V10.8865ZM57.6738 7.44681C58.2412 7.44681 58.5248 8.02601 58.5248 9.1844C58.5248 10.3191 58.2412 10.8865 57.6738 10.8865H55.0142V23.9362H58.7376C59.305 23.9362 59.5887 24.5154 59.5887 25.6738C59.5887 26.8085 59.305 27.3759 58.7376 27.3759H38.7376V23.9362H42.1064V10.8865H38.7376V7.44681H57.6738ZM65.4043 34.1844C65.4043 34.4681 65.2152 34.669 64.8369 34.7872C64.4823 34.9291 64.0213 35 63.4539 35C62.8865 35 62.4137 34.9291 62.0355 34.7872C61.6572 34.669 61.4681 34.4681 61.4681 34.1844V5H65.4043V34.1844Z"
                fill="#2563EB"
              />
              <path
                d="M68.4042 32.766V29.3263H98.0142C98.5815 29.3263 98.8652 29.9055 98.8652 31.0639C98.8652 32.1986 98.5815 32.766 98.0142 32.766H68.4042ZM94.078 23.5107C93.156 23.1561 92.1867 22.7069 91.1702 22.1631C90.1536 21.6194 89.1607 21.0048 88.1915 20.3192C87.2458 19.61 86.3593 18.8535 85.5319 18.0497C84.7281 17.2459 84.0898 16.4066 83.617 15.5319C83.1442 16.3594 82.5059 17.1868 81.7021 18.0142C80.8983 18.8416 80.0118 19.6218 79.0425 20.3546C78.0733 21.0875 77.0804 21.7613 76.0638 22.3759C75.0473 22.9906 74.1016 23.487 73.2269 23.8653C72.9669 23.9835 72.7305 23.9244 72.5177 23.688C72.3049 23.4516 72.0331 23.097 71.7021 22.6241C71.3239 22.0804 71.0993 21.6785 71.0284 21.4185C70.9811 21.1584 71.0756 20.9693 71.312 20.8511C73.3924 19.7636 75.2009 18.6525 76.7376 17.5178C78.2742 16.383 79.4208 15.2128 80.1773 14.0071C80.721 13.1797 81.052 12.3996 81.1702 11.6667C81.2884 10.9102 81.3475 10.1655 81.3475 9.43265V7.23407H85.6028V9.5745C85.6028 10.3546 85.6619 11.0757 85.7801 11.7376C85.8983 12.3996 86.2411 13.1561 86.8085 14.0071C87.234 14.6454 87.7896 15.2837 88.4752 15.922C89.1607 16.5367 89.8936 17.1277 90.6737 17.6951C91.4775 18.2624 92.3049 18.7944 93.156 19.2908C94.0307 19.7873 94.8581 20.2128 95.6383 20.5674C95.8983 20.6856 96.0047 20.8747 95.9574 21.1348C95.9101 21.3712 95.7328 21.7613 95.4255 22.305C95.1418 22.8251 94.9054 23.1915 94.7163 23.4043C94.5508 23.5934 94.338 23.6289 94.078 23.5107Z"
                fill="#2563EB"
              />
              <path
                d="M126.723 34.1844C126.723 34.4681 126.534 34.669 126.156 34.7872C125.778 34.9291 125.305 35 124.738 35C124.17 35 123.697 34.9291 123.319 34.7872C122.965 34.669 122.787 34.4681 122.787 34.1844V17.1277H114.702V13.6879H122.787V5H126.723V34.1844ZM105.943 27.1986C105.541 27.1986 105.08 27.0331 104.56 26.7021C104.064 26.3712 103.626 26.0047 103.248 25.6028C102.894 25.2482 102.574 24.8463 102.291 24.3972C102.007 23.948 101.865 23.5579 101.865 23.2269V7.44681H105.801V22.5887C105.801 22.9905 105.884 23.2861 106.05 23.4752C106.215 23.6643 106.499 23.7589 106.901 23.7589H117.929C118.496 23.7589 118.78 24.3381 118.78 25.4965C118.78 26.6312 118.496 27.1986 117.929 27.1986H105.943Z"
                fill="#2563EB"
              />
            </svg>
          </a>
        </div>
        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/facility/metting-rooms" className="text-sm font-semibold leading-6 text-gray-900">
            회의실
          </Link>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={twMerge(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  회의실
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
}
