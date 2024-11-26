import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font mt-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Revamp you Styylee with E-Commerce
            </h1>
            <p className="mb-8 leading-relaxed">
              Your one stop shopping spree starts here with E-Commerce. Buy
              whatever whenever and have it delivered to your doorstep.
            </p>
            <p className="mb-8 leading-relaxed">
              Explore different categories of products.
            </p>
            <div className="flex justify-center">
              <Link
                to={"/products"}
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Categories
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
