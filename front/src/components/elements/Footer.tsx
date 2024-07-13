const Footer = () => {
  return (
    <footer className="px-[10%] py-8 bg-gray-50 mt-10">
      <div className="max-w-screen flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">

          <div className="text-gray-900 text-sm font-light flex flex-col md:ml-4">
            <p className="hover:bg-cyan-600 px-4 py-2 rounded-lg ease-in-out text-white bg-gray-900">
              Contact us: tesoro.ec@gmail.com
            </p>
            <p className="hover:bg-gray-100 px-4 py-2 rounded-lg ease-in-out ">
              Phone: (123) 99991233
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <a
            href="/privacy-policy"
            className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg ease-in-out text-sm font-light"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg ease-in-out text-sm font-light"
          >
            Terms of Service
          </a>
          <a
            href="/about-us"
            className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg ease-in-out text-sm font-light"
          >
            About Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
