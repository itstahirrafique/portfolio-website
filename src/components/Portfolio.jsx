const Portfolio = () => {
  return (
    <div className="lg:px-20 lg:py-32 px-4 py-20">
      <div className="flex flex-col gap-6 lg:gap-20">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col gap-3">
            <h5 className="text-12 font-semibold">Recent Projects</h5>
            <h2 className="text-18 font-bold">My Portfolio</h2>
          </div>
          <div className="flex sm:justify-center items-center  ">
            <button className="flex items-center  gap-1 bg-[#E62872] rounded-md px-3 lg:px-5 py-1 sm:py-2 lg:py-5 text-inverted">
              <i className="ri-global-line text-2xl"></i>
              <h5>Vistie My Dribble </h5>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:justify-center sm:items-center sm:flex-row gap-4">
          <div className="image-project rounded-md flex flex-col gap-4 sm:gap-10 shadow-md">
            <img
              src="../assets/images/ahouse.png"
              alt=""
              className="rounded-md"
            />
            <div className="flex flex-col gap-1 px-4">
              <h3>Ahuse</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </h5>
              <div className="flex gap-2 items-center">
                <p className="underline underline-offset-2">View In Dribbble</p>
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4  ">
            <div className="image-project rounded-md flex flex-col gap-4 sm:gap-10 shadow-md">
              <img
                src="../assets/images/appdashbord.png"
                alt=""
                className=" rounded-md "
              />
              <div className="flex flex-col gap-1 px-4 ">
                <h3>AppDashboard </h3>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </h5>
                <div className="flex gap-2 items-center">
                  <p className="underline underline-offset-2">
                    View In Dribbble
                  </p>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4  ">
            <div className="image-project rounded-md flex flex-col gap-4 sm:gap-10 shadow-md">
              <img
                src="../assets/images/rent.png"
                alt=""
                className="rounded-md"
              />
              <div className="flex flex-col gap-1 px-4">
                <h3>Easy Rent</h3>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </h5>
                <div className="flex gap-2 items-center">
                  <p className="underline underline-offset-2">
                    View In Dribbble
                  </p>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
