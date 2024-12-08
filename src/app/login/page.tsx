import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto min-h-[70vh] p-3">
      <div className="w-full py-10 flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full px-4 md:px-0 mb-8 md:mb-0">
          <Image
            src="/SideImage2.png"
            alt="Side Illustration"
            width={805}
            height={781}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Login Form Section */}
        <div className="md:w-1/2 w-full px-4 md:px-10">
          <div className="max-w-[400px] mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-zinc-800">
              Log in to Exclusive
            </h1>
            <p className="text-base text-zinc-600">Enter your details below</p>

            <form action="" className="space-y-6 mt-8">
              {/* Email or Phone Number Input */}
              <div className="relative">
                <input
                  type="text"
                  name="emailorphone"
                  placeholder="Email or Phone Number"
                  className="w-full bg-transparent border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-500 placeholder:font-medium focus:border-primRed transition duration-200"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-transparent border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-500 placeholder:font-medium focus:border-primRed transition duration-200"
                />
              </div>

              {/* Submit Button and Forgot Password */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3 bg-[#DB4444] text-white font-medium rounded-md shadow-md hover:bg-[#db4444e6] transition duration-200"
                >
                  Log In
                </button>
                <Link
                  href="/forgot-password"
                  className="font-medium hover:underline text-[#DB4444]"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
