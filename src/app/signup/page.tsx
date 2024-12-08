import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="max-w-[1280px] m-auto min-h-[70vh] p-3">
      <div className="w-full flex flex-col md:flex-row xs:py-20 py-10">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
          <Image
            src="/SideImage2.png"
            alt="Sign Up"
            width={805}
            height={781}
            className="w-full h-auto max-w-[400px] md:max-w-none md:h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full xs:px-8 px-4">
          <div className="max-w-[400px] m-auto">
            {/* Header */}
            <h1 className="text-4xl font-semibold mb-4 text-zinc-800">
              Create an Account
            </h1>
            <p className="text-base text-zinc-600">Enter your details below</p>

            <form action="" className="space-y-6 mt-8">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-500 placeholder:font-medium focus:border-primRed transition duration-200"
                />
              </div>

              {/* Email or Phone Input */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#DB4444] text-white py-3 rounded-md font-medium shadow-md hover:bg-red-700 transition duration-200"
              >
                Create Account
              </button>
            </form>

            {/* Google Sign-Up */}
            <div className="bg-white border border-zinc-400 px-4 py-3 rounded-lg font-medium text-center flex items-center justify-center gap-3 mt-6 hover:shadow-lg transition duration-200 cursor-pointer">
              <div className="w-6 h-6 overflow-hidden">
                <Image
                  src="/Icon-Google.png"
                  alt="Google Icon"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Sign in with Google</span>
            </div>

            {/* Log-In Link */}
            <p className="text-zinc-600 mt-8 text-center">
              Already have an account?
              <Link
                href="/login"
                className="border-b-2 border-zinc-400 font-medium text-zinc-500 hover:text-primRed pb-[0.2rem] pl-2"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
