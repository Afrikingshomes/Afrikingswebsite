"use client";
import {
  agentData,
  benefitData,
  blogData,
  propertyData,
  testimonialData,
  testimonialData2,
} from "@/constant";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";

export const Hero = () => {
  return (
    <div className='bg-primary'>
      <Navbar />
      <div className='flex mt-20 '>
        <div className='w-full xl:w-2/6 xl:pl-20 text-white px-5 xl:px-[unset]'>
          <div className='text-white xl:absolute'>
            <div className='text-[42px] sm:text-[63px] font-bold text-center xl:text-start'>
              <h2>Finding a Home</h2>
              <h2 className="-mt-3">Just Got Easy</h2>
            </div>
            <div className='max-w-[500px] mx-auto xl:mx-[unset] xl:max-w-[350px] text-sm text-center xl:text-start'>
              <div className='mt-5'>
                Afrikings Homes LTD is your number one destination for finding
                the perfect home that meets and satisfy your desires.
              </div>
              <div className='mt-2'>
                With massive numbers of properties in Abuja and across Nigeria.
              </div>
            </div>

            <div className='mt-10 pb-20 flex justify-center xl:justify-start'>
              <button className='btn-hero flex h-[90px] max-w-[300px] w-full justify-between px-10 items-center gap-5 rounded-[6px]'>
                <div className='text-2xl font-medium'>Search</div>
                <ArrowLongRightIcon className='text-white w-10 h-10' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex-1 hidden xl:flex'>
          <img src='/images/hero.png' alt='' className='w-full' />
        </div>
      </div>
    </div>
  );
};

export const Achievements = () => {
  return (
    <div className='bg-white rounded-[6px] py-4 grid grid-cols-3 max-w-[800px] mx-auto w-full min-h-[120px] border -translate-y-[80px] z-[1]'>
      <div className='flex flex-col items-center justify-center text-center border-r-2'>
        <div className='text-[24px] sm:text-[30px] font-bold text-black'>
          450+
        </div>
        <div className='text-lg sm:text-2xl font-light'>Properties</div>
      </div>
      <div className='flex flex-col items-center justify-center text-center border-r-2'>
        <div className='text-[24px] sm:text-[30px] font-bold text-black'>
          100+
        </div>
        <div className='text-lg sm:text-2xl font-light'>Location</div>
      </div>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='text-[24px] sm:text-[30px] font-bold text-black'>
          5k+
        </div>
        <div className='text-lg sm:text-2xl font-light'>Clients</div>
      </div>
    </div>
  );
};

export const Explore = () => {
  return (
    <div className='bg-[#F4F6FF] px-10 pt-10 pb-20 z-0 relative'>
      <Achievements />
      <h2 className='text-center text-[24px] sm:text-[30px] font-bold'>
        Explore Now
      </h2>
      <div className='mt-3 text-center max-w-[500px] mx-auto'>
        Discover our range of homes across Nigeria. Make a decision to do
        business with us today because your satisfaction is 100% guaranteed
      </div>
    </div>
  );
};

export const Benefits = () => {
  return (
    <div>
      <div className='benefit mt-20'>
        <div className='app-width pt-20'>
          <div className='flex gap-2 justify-center items-center'>
            <div className='w-8 h-[3px] rounded bg-tertiary' />
            <h4 className='text-tertiary text-2xl'>Benefits</h4>
          </div>
          <h2 className='font-bold text-[24px] sm:text-[30px] lg:text-[48px] text-center max-w-[500px] mx-auto'>
            What Makes Us the Preferred Choice?
          </h2>
          <div className='mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {benefitData.map((benefit, index) => (
              <div
                className='px-5 py-6 rounded-[16px] bg-[#0123790A]/20'
                key={index}>
                <img src={benefit.icon} alt={benefit.title} />
                <div className='mt-5 text-lg font-bold'>{benefit.title}</div>
                <div className='mt-3'>{benefit.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-20 app-width'>
        <div className='flex flex-col sm:flex-row justify-between gap-5 font-bold text-white'>
          <div className='flex justify-center sm:justify-start'>
            <button className='flex justify-center items-center gap-3 bg-secondary px-6 py-3'>
              <img src='/svgs/bronchure-icon.svg' alt='' />
              <div className='text-sm sm:text-base md:text-xl'>
                Download Brochure
              </div>
            </button>
          </div>
          <div className='flex justify-center sm:justify-start'>
            <a
              href='https://youtube.com/@AfrikingsHomes?si=Ltkt6B-EnHxy-V1C'
              className='flex justify-center items-center gap-3 bg-secondary px-6 py-3'>
              <img src='/svgs/video-icon.svg' alt='' />
              <div className='text-sm sm:text-base md:text-xl'>
                Watch Videos
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Properties = () => {
  const router = useRouter();
  return (
    <div className='app-width py-20'>
      <div className='flex gap-2 justify-center items-center overflow-hidden'>
        <div className='w-8 h-[3px] rounded bg-tertiary' />
        <h4 className='text-tertiary text-2xl'>Our Properties</h4>
      </div>
      <h3 className='text-center font-bold text-[24px] md:text-[30px] mt-3'>
        Your Dream Home Awaits
      </h3>

      <div className="mt-20 flex flex-wrap justify-center">
        {propertyData.map((property, index) => (
          <div
            key={index}
            className="p-5 hover:bg-[#D9D9D924]/10 rounded-lg cursor-pointer w-full sm:max-w-[370px]"
            onClick={() => router.push(`/property/${property.slug}`)}
          >
            <img
              src={property.image}
              alt=''
              className='rounded-[40px] w-full'
            />
            <div className='mt-5 flex justify-between items-center'>
              <div className='text-lg text-[#989898]'>{property.location}</div>
              <div className='flex gap-3'>
                <div className='flex items-center gap-1'>
                  <img src='/svgs/clinic.svg' alt='' />
                  <div className='text-xs'>{property.clinic}</div>
                </div>
                <div className='flex items-center gap-1'>
                  <img src='/svgs/cart.svg' alt='' />
                  <div className='text-xs'>{property.cart}</div>
                </div>
              </div>
            </div>
            <div className='mt-3'>
              <h2 className='font-bold text-[24px] lg:text-[30px]'>
                {property.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type AgentProps = {
  image: string;
  name: string;
  text: string;
};

const AgentCard = ({ image, name, text }: AgentProps) => {
  return (
    <div className='p-5 px-5 flex flex-col sm:flex-row items-center sm:items-end gap-5'>
      <img src={image} alt={name} className='rounded-[40px] max-w-[300px]' />
      <div className='mb-4'>
        <div className='font-bold text-2xl mx-auto mt-3 text-primary'>
          {name}
        </div>
        <div className='mt-3 text-sm'>{text}</div>
      </div>
    </div>
  );
};

export const Agents = () => {
  return (
    <div className='app-width py-20'>
      <div className='flex gap-2 justify-center items-center'>
        <div className='w-8 h-[3px] rounded bg-tertiary' />
        <h4 className='text-tertiary text-2xl'>Agents</h4>
      </div>
      <h3 className='text-center font-bold text-[24px] md:text-[30px] mt-3 max-w-[400px] mx-auto'>
        Unlocking Opportunities, One Agent at a Time
      </h3>
      <div className='mt-10 grid xl:grid-cols-2 gap-5 place-items-center'>
        {agentData.map((item, index) => (
          <AgentCard
            key={index}
            image={item.image}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export const Testimonial = () => {
  return (
    <div className='app-width py-20'>
      <div className='flex gap-2 justify-center items-center'>
        <div className='w-8 h-[3px] rounded bg-tertiary' />
        <h4 className='text-tertiary text-2xl'>Testimonials</h4>
      </div>
      <h3 className='text-center font-bold text-[24px] md:text-[30px] mt-3 max-w-[400px] mx-auto'>
        Our Clients Testimonials
      </h3>
      <div className='mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center p-5 bg-[#01237908]/5 hover:bg-[#012379C2]/70 hover:text-white rounded-xl'>
            <img src='/svgs/quote.svg' className='-translate-y-[50px]' />
            <div className='-translate-y-[20px] sm:text-lg'>{item.text}</div>
            <div className='flex gap-2 justify-center items-center'>
              <div className='w-8 h-[3px] rounded bg-tertiary' />
              <h4 className='text-tertiary text-lg'>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 bg-[#01237908]/5 p-6 rounded-xl'>
        {testimonialData2.map((item, index) => (
          <div
            key={index}
            className={`px-5 ${
              index === 2 ? "border-transparent" : "lg:border-r border-black"
            }`}>
            <div>
              You are not just a real estate agent; you are a dream maker. You
              took the time to understand our vision for our dream home and
              worked tirelessly until we found it. Thank you, for making our
              dreams come true!
            </div>
            <div className='mt-3 font-bold text-xl'>Matthew and Sonai</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Blog = () => {
  const router = useRouter();
  return (
    <div className='app-width py-20'>
      <div className='flex gap-2 justify-center items-center'>
        <div className='w-8 h-[3px] rounded bg-tertiary' />
        <h4 className='text-tertiary text-2xl'>Blogs/Newsletter</h4>
      </div>
      <h3 className='text-center font-bold text-[24px] md:text-[30px] mt-3'>
        Our Latest Blogs and Newsletter
      </h3>
      <div className='mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {blogData.map((item, index) => (
          <div
            key={index}
            className='bg-[#01237908]/5 rounded-lg cursor-pointer'
            onClick={() => router.push(`/blog/${item.slug}`)}>
            <img src={item.image} alt='' className='w-full' />
            <div className='px-3'>
              <div className='mt-5 text-secondary'>{item.title}</div>
              <div className='mt-6 font-bold'>{item.desc}</div>
              <div className='my-3 flex gap-6'>
                <div className='flex items-center gap-2'>
                  <img src='/svgs/profile.svg' className='w-5' alt='' />
                  <div className='text-[#989898]'>by {item.author}</div>
                </div>
                <div className='flex items-center gap-2 flex-1 pb-3'>
                  <img src='/svgs/calender.svg' alt='' className='w-5' />
                  <div className='text-[#989898]'>{item.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className='text-center font-bold text-[24px] md:text-[30px] mt-20 max-w-[550px] mx-auto'>
        Subscribe to Our Newsletter to Get Updates to Our Latest Projects
      </h3>
      <div className='mt-3 text-sm text-[#989898] text-center'>
        Get 20% off on your purchase just by subscribing to our newsletter
      </div>

      <div className='flex flex-col sm:flex-row gap-5 justify-center mt-10'>
        <div className='flex gap-2 border rounded-md p-2'>
          <img src='/svgs/mail.svg' alt='' className='' />
          <input
            type='text'
            placeholder='Enter Email Address'
            className='min-w-[250px] outline-none'
          />
        </div>
        <div className='flex justify-center'>
          <button className='py-2 px-6 font-semibold bg-secondary text-white rounded-md'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className='app-width mt-20'>
      <div className='contact px-8 pt-8 pb-20 rounded-md text-white flex flex-col xl:flex-row gap-10'>
        <div>
          <div className='text-[32px] sm:text-[42px] md:text-[54px] font-bold'>
            Follow us to get the Latest
          </div>
          <div className='max-w-[180px] text-xs'>
            Be the first to get the latest on our projects and offers
          </div>
        </div>
        <div className='flex gap-5'>
          <img
            src='/svgs/fb.svg'
            alt='facebook'
            className='w-[30px] md:w-[unset]'
          />
          <img
            src='/svgs/ig.svg'
            alt='instagram'
            className='w-[30px] md:w-[unset]'
          />
          <img src='/svgs/x.svg' alt='x' className='w-[30px] md:w-[unset]' />
          <img
            src='/svgs/linkedin.svg'
            alt='linkedIn'
            className='w-[30px] md:w-[unset]'
          />
        </div>
      </div>
    </div>
  );
};
