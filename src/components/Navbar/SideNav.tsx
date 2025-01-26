import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type SideNavProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideNav = ({ mobileMenuOpen, setMobileMenuOpen }: SideNavProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary sm:bg-primary/90 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src="/svgs/logo.svg" alt="" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-white hover:text-primary hover:bg-gray-50"
              >
                Features
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-white hover:text-primary hover:bg-gray-50"
              >
                Marketplace
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-white hover:text-primary hover:bg-gray-50"
              >
                Company
              </Link>
            </div>
            <div className="py-6">
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-white hover:text-primary hover:bg-gray-50"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default SideNav;
