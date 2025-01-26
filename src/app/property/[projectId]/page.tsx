"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { propertyData } from "@/constant";
import { useParams } from "next/navigation";

const ProjectDetail = () => {
  const params = useParams();
  const singleProperty = propertyData.find(
    (ppt) => ppt.slug === params.projectId
  );

  console.log(singleProperty);

  return (
    <div>
      <div className='bg-primary'>
        <Navbar />
      </div>
      <div className='app-width mt-10'>
        <div className='flex flex-col xl:flex-row gap-5'>
          <div className='flex-1'>
            <img src={singleProperty?.d_image} alt='' className='' />
          </div>
          <div className='flex flex-wrap xl:grid gap-5'>
            {singleProperty?.images.map((img, index) => (
              <div className='sm:max-w-[300px] w-full' key={index}>
                <img src={img} key={index} className='w-full' />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-primary font-bold text-[24px] md:text-[32px] lg:text-[40px]'>
            {singleProperty?.title}
          </h2>
          <div className='mt-4 grid gap-5'>
            <div className='flex gap-3 items-center'>
              <img src='/svgs/location.svg' alt='' />
              <div className='text-lg md:text-2xl'>
                {singleProperty?.location}
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <img src='/svgs/room-type.svg' alt='' />
              <div className='text-lg md:text-2xl'>{singleProperty?.type}</div>
            </div>
            <div className='flex gap-3 items-center'>
              <img src='/svgs/facility.svg' alt='' />
              <div className='text-lg md:text-2xl'>
                {singleProperty?.facility}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
