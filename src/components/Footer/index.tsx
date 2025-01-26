import { MapPinIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className='app-width mt-20'>
      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
        <div className='col-span-2'>
          <img className='h-12 w-auto' src='/svgs/logo-1.svg' alt='' />
          <div className='mt-5 flex gap-5'>
            <img src='/svgs/b-ig.svg' alt='' className='w-4' />
            <img src='/svgs/b-fb.svg' alt='' className='w-4' />
            <img src='/svgs/b-x.svg' alt='' className='w-4' />
            <img src='/svgs/b-in.svg' alt='' className='w-4' />
          </div>
          <div className='mt-3 max-w-[250px] font-medium text-[#0B1B3B]'>
            Be the first to get the latest on our projects and offers
          </div>
        </div>
        <div>
          <h3 className='text-2xl text-secondary font-semibold mb-4'>
            Projects
          </h3>
          <ul className='grid gap-3'>
            <li className='text-xl text-[#0B1B3B]'>Features</li>
            <li className='text-xl text-[#0B1B3B]'>Pricing</li>
            <li className='text-xl text-[#0B1B3B]'>Case studies</li>
            <li className='text-xl text-[#0B1B3B]'>Reviews</li>
            <li className='text-xl text-[#0B1B3B]'>Pricing</li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl text-secondary font-semibold mb-4'>
            Company
          </h3>
          <ul className='grid gap-2'>
            <li className='text-xl text-[#0B1B3B]'>About</li>
            <li className='text-xl text-[#0B1B3B]'>Contact us</li>
            <li className='text-xl text-[#0B1B3B]'>Careers</li>
            <li className='text-xl text-[#0B1B3B]'>Culture</li>
            <li className='text-xl text-[#0B1B3B]'>Agents</li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl text-secondary font-semibold mb-4'>
            Sopport
          </h3>
          <ul className='grid gap-2'>
            <li className='text-xl text-[#0B1B3B]'>Getting started</li>
            <li className='text-xl text-[#0B1B3B]'>Help Center</li>
            <li className='text-xl text-[#0B1B3B]'>Server Status</li>
            <li className='text-xl text-[#0B1B3B]'>Report a bug</li>
            <li className='text-xl text-[#0B1B3B]'>Chat support</li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl text-secondary font-semibold mb-4'>
            Contact Us
          </h3>
          <ul className="grid gap-2">
            <li className="flex items-center gap-1">
              <div className="h-8 w-8">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <div>info@afrikingshomes.com</div>
            </li>
            <li className="flex items-center gap-1">
              <div className="h-8 w-8">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>(+234) 811 111 1637</div>
            </li>
            <li className="flex  gap-1">
              <div className="h-8 w-8">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                44 Haile Selassie St. Asokoro, Abuja, 900103, Federal Capital
                Territory Nigeria
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center md:justify-between gap-3 border-t border-black mt-10 py-3'>
        <div>Copyright {year} Afrikingshomes. All Rights Reserved</div>
        <div>
          <span>User Terms & Conditions</span> | <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
