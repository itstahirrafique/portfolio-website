const Form = () => {
  return (
    <div className="lg:px-20 lg:py-20 px-4 py-10">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-14 sm:items-center">
        <div className="flex flex-col justify-center lg:items-center text-center">
          <h5 className="font-semibold">Get In Touch</h5>
          <h2 className="font-bold">Contact me</h2>
          <h4 className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </h4>
        </div>
        <form action="" className="md:max-w-[600px] flex flex-col gap-4">
          <div className="sm:flex-row flex flex-col gap-4 w-full justify-between">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                id="name"
                className="md:w-[290px] border border-light rounded-md p-2 cursor-pointer input-size"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                id="name"
                className="md:w-[290px] border border-light rounded-md p-2 cursor-pointer input-size"
              />
            </div>
          </div>

          <div className="sm:flex-row flex flex-col gap-4 justify-center w-full">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                id="name"
                className="md:w-[290px] border border-light rounded-md p-2 cursor-pointer input-size"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Phone number</label>
              <input
                type="text"
                id="name"
                className="md:w-[290px] border border-light rounded-md p-2 cursor-pointer input-size"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 cursor-pointer">
            <label htmlFor="name">Choose a topic</label>
            <select
              type="text"
              id="name"
              className="w-full  border border-light rounded-md p-2 cursor-pointer input-size"
            >
              <option value="option1"></option>
            </select>
          </div>

          <div className="flex flex-col gap-1 ">
            <label htmlFor="name">Message</label>
            <textarea
              type="text"
              id="name"
              className="w-full border border-light rounded-md p-2 cursor-pointer input-size"
              placeholder="Type your message here"
            />
          </div>

          <div className="flex items-center gap-2  ">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="cursor-pointer"
            />
            <label htmlFor="check" className="cursor-pointer para">
              I accept the terms
            </label>
          </div>

          <div className="flex justify-center btn-nav">
            <button className="bg-light text-inverted  rounded-md px-4 py-2 cursor-pointer input-size">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
