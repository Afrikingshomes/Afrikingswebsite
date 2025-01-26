"use client";

import Navbar from "@/components/Navbar/Navbar";
import { blogData } from "@/constant";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetails = () => {
  const params = useParams();
  const blogObj = blogData.find((ppt) => ppt.slug === params.blogId);

  return (
    <div>
      <div className="bg-primary">
        <Navbar />
      </div>
      <div className="app-width mt-10">
        <div className="flex flex-col items-center md:flex-row gap-5">
          <div className="md:w-[40%]">
            <img src={blogObj?.image} alt="" />
          </div>
          <div className="flex-1">
            <div className="p-10 bg-[#F4F6FF] flex flex-col justify-center">
              <h2 className="text-[24px] lg:text-[32px] xl:text-[40px] font-bold">
                {blogObj?.desc}
              </h2>
              <div className="mt-3 ml-3 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <img src="/svgs/profile.svg" className="w-5" alt="" />
                  <div className="text-[#989898]">by {blogObj?.author}</div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <img src="/svgs/calender.svg" alt="" className="w-5" />
                  <div className="text-[#989898]">{blogObj?.date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-10">
          {blogObj && (
            <div className="w-1/2" dangerouslySetInnerHTML={{ __html: blogObj?.longText }} />
          )}
          {blogObj && (
            <div className="w-1/2" dangerouslySetInnerHTML={{ __html: blogObj?.longText2 }} />
          )}
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
