const About = () => {
  return (
    <div className="lg:px-20 lg:py-20 px-4">
      <div className="lg:flex-row lg:gap-10 flex flex-col gap-4">
        <div className="flex justify-center">
          <img
            src="../assets/images/aboutavatar.png"
            alt=""
            className="image-about"
          />
        </div>
        <div className="flex justify-center flex-col gap-3 ">
          <div className="flex flex-col  gap-3">
            <h5 className="font-semibold">About</h5>
            <h2 className="font-bold">About Me </h2>
          </div>
          <h4 className="line-height-lg text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.{" "}
            <br /> <br /> Sit turpis pretium eget maecenas. Vestibulum dolor
            mattis consectetur eget commodo vitae. Amet pellentesque sit
            pulvinar lorem mi a, euismod risus r.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
