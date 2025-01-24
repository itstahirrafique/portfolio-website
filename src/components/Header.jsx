const Header = () => {
  return (
    <div className="bg-secondary lg:px-20 lg:py-32 py-8 px-4 ">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-col  justify-center gap-3 lg:gap-5">
            <h5 className="font-semibold">Hey, I am John</h5>
            <h1 className="font-bold line-height-lg ">
              I create{" "}
              <span className="text-light">product design </span>
              and brand experience
            </h1>
            <h4 className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </h4>
          </div>
          <div>
            <button className="bg-light px-4 py-2 lg:px-8 lg:py-4 rounded-md text-inverted">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="./assets/images/headeravtar.png"
            alt=""
            className="lg:min-w-36 object-cover image-width-header"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
