import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:px-20 lg:py-20 bg-secondary px-4 py-5">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row  sm:items-center sm:justify-between gap-4">
          <div>
            <img
              src="../assets/images/navbarlogo.svg"
              alt=""
              className="min-w-24"
            />
          </div>
          <div className=" flex  flex-col sm:flex-row gap-4">
            <h5>Home</h5>
            <h5>Portfolio</h5>
            <h5>About </h5>
            <h5>Contact</h5>
            <h5>Testimonials</h5>
          </div>
          <div className="flex gap-4 text-2xl items-center">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <FaLinkedin />
          </div>
        </div>
        <div className="h-[1px] w-full bg-muted"></div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between sm:gap-14">
          <div>
            <p className="bg-slate-400 text-white font-semibold">Made with 💖 by Tahir...!🙊</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-14">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
