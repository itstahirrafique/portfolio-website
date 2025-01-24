const Skills = () => {
  return (
    <div className="lg:px-20 px-4 py-10 lg:py-36">
      <div className="flex flex-col gap-4 lg:gap-14">
        <div className="flex flex-col gap-3 text-centerz">
          <h5 className="font-semibold">My Skills</h5>
          <h2 className="font-bold">My Expertise</h2>
        </div>
        <div className="flex flex-wrap lg:flex-row gap-4">
          {/* child divs */}
          <div className="flex flex-col bg-secondary rounded-md shadow-sm px-5 py-5 lg:p-10 gap-4 w-full lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] sm:w-full">
            <img
              src="../assets/images/startegy.png"
              alt="NO IMGE"
              className="w-12 bg-white p-1 rounded-md"
            />
            <h3 className="line-height-sm">Strategy & Direction</h3>
            <h5 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </h5>
          </div>
          <div className="flex flex-col bg-secondary rounded-md shadow-sm px-5 py-5 lg:p-10 gap-4 w-full lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] sm:w-full">
            <img
              src="../assets/images/branding.png"
              alt="NO IMGE"
              className="w-12 bg-white p-1 rounded-md"
            />
            <h3 className="">Branding & Logo</h3>
            <h5 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </h5>
          </div>
          <div className="flex flex-col bg-secondary rounded-md shadow-sm px-5 py-5 lg:p-10 gap-4 w-full lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] sm:w-full">
            <img
              src="../assets/images/uiux.png"
              alt="NO IMGE"
              className="w-12 bg-white p-1 rounded-md"
            />
            <h3 className="">UI & UX Design</h3>
            <h5 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </h5>
          </div>
          <div className="flex flex-col bg-secondary rounded-md shadow-sm px-5 py-5 lg:p-10 gap-4 w-full lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] sm:w-full">
            <img
              src="../assets/images/webflow.png"
              alt="NO IMGE"
              className="w-12 bg-white p-1 rounded-md"
            />
            <h3 className="">Webflow Development</h3>
            <h5 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
