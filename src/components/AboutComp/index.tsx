import Navbar from "../Navbar/Navbar";

export const Hero = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="flex justify-center">
        <video width="1100" height="400" loop={true} autoPlay playsInline muted>
          <source src="/video/about.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            // srclang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export const AboutDetail = () => {
  return (
    <div className="app-width flex flex-col sm:flex-row gap-10 my-20">
      <div className="w-full sm:w-1/3">
        <img src="/images/about.png" alt="" />
      </div>
      <div className="flex-1">
        <div>
          <div>
            <span className="font-bold">Afrikings Homes LTD</span> is a firm of
            skilled System personnel specially trained in real estate and
            project management.
          </div>
          <div className="mt-2">
            The company was legally incorporated under the companies and Allied
            Matters Act 1990 on the 13th July, 2020 with RC No: 1686534 and, was
            incorporated as a limited liability entity under the laws of the
            Federal Republic of Nigeria. It is registered with the Federal
            Inland Revenue Services (FIRS).
          </div>
          <div className="mt-3">
            We have a team of qualified and seasoned professionals, with several
            years of experience in the ICT, Civil/Building Engineering, and
            Sales/Supplies and Procurement professionals. Afrikings Homes LTD
            guarantees a quality and safe service delivery.
          </div>
          <div className="mt-6">
            <div className=" flex items-center gap-6">
              <div className="bg-[#989898]/70 rounded-md p-1">
                <img src="/svgs/mission.svg" alt="" />
              </div>
              <h1 className="font-bold text-secondary text-[24px] sm:text-[30px]">
                Mission
              </h1>
            </div>
            <div className="mt-3 max-w-[500px]">
              We exist to give optimal satisfaction to our clients through the
              delivery of world class services in the area of our competence
            </div>
          </div>
          <div className="mt-6">
            <div className=" flex items-center gap-6">
              <div className="bg-[#989898]/70 rounded-md p-1">
                <img src="/svgs/vission.svg" alt="" />
              </div>
              <h1 className="font-bold text-secondary text-[24px] sm:text-[30px]">
                Vission
              </h1>
            </div>
            <div className="mt-3 max-w-[500px]">
              We exist to give optimal satisfaction to our clients through the
              delivery of world class services in the area of our competence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
