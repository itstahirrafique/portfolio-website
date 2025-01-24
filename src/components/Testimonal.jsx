const Testimonal = () => {
  return (
    <div className="lg:px-20 lg:py-32 px-4 py-10 bg-secondary">
      <div className="flex flex-col  gap-4 lg:gap-14">
        <div className="flex flex-col gap-3 text-centerz">
          <h5 className="font-semibold">Clients Feedback</h5>
          <h2 className="font-bold">Customer testimonials</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 border border-testomonil p-4 lg:p-10 rounded-md">
            <div>★★★★★</div>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </h5>
            <div className="flex flex-col items-start lg:flex-row gap-4">
              <div>
                <img
                  src="../assets/images/danial.png "
                  alt=""
                  className=" rounded-full"
                />
              </div>
              <div>
                <h5 className="font-semibold">Dianne Russell</h5>
                <h5>Starbucks</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-testomonil p-4 lg:p-10 rounded-md">
            <div>★★★★★</div>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </h5>
            <div className="flex flex-col items-start lg:flex-row gap-4">
              <div>
                <img
                  src="../assets/images/kriston.png "
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div>
                <h5 className="font-semibold">Kristin Watson</h5>
                <h5>LouisVuitton</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-testomonil p-4 lg:p-10 rounded-md">
            <div>★★★★★</div>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </h5>
            <div className="flex flex-col items-start lg:flex-row gap-4">
              <div>
                <img
                  src="../assets/images/kathryan.png "
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div>
                <h5 className="font-semibold">Kathryn Murphy</h5>
                <h5>McDonald's</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
