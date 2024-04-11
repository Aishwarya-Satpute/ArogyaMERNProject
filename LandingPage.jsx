import React from 'react'
import { CAlert } from '@coreui/react'


const LandingPage = () => {
  return (
    <>
    <div className="w-full h-full">
          <h1 className="ml-52 mt-52 font-sans font-bold text-7xl antialiased text-skyBlue">
            Welcome to <a class="underline decoration-wavy decoration-zinc-900">AROGYA</a>
          </h1>
          <p className="ml-52 mt-52 font-sans font-thin text-xl italic mt-6 mb-3">
            Here your Healthy  beginning awaits
          </p>
          {/* <CButton color="primary" variant="outline">Primary</CButton> */}
          <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer drop-shadow-lg ml-52 mt-2 font-sans font-semibold leading-normal border-solid border-2 border-sky-300 border-cyan-400 text-xl border-color: rgb(34 211 238); rounded-full  hover:bg-sky-300 py-2 px-6 hover:blue ">
            <a href="https://tailwindcss.com/">Sign up</a>   
          </button>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer drop-shadow-lg ml-5 mt-2 font-sans  font-semibold border-solid border-2 border-sky-300 border-cyan-400 text-lg border-color: rgb(34 211 238); rounded-full  hover:bg-sky-300 py-2 px-6 hover:blue ">
            Login   
          </button>
    </div>


    {/* signup/login start*/}
    <div className="h-full w-full mt-32 mb-32">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://ouch-cdn2.icons8.com/zx6JpeABmUGyWbv5X-Pf4LPWacrqIGRB7OetmcDEkuk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQw/L2YyZjA1MzFhLTQx/N2QtNDM3MC1hOGQy/LWYxMGEyZjZmZDhi/Yi5wbmc.png"
            alt="Your Company"
          />
          <h1 className="mt-10 text-center text-2xl font-bold leading-9" >Welcome to AROGYA</h1>
          <h2 className="mt-10 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-skyBlue hover:text-sky-600">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-skyBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have account?{' '}
            <a href="#" className="font-semibold leading-6 text-skyBlue hover:text-sky-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* signup/login end */}

    <div className="h-full w-full mt-32 mb-32">
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10  duration-300 cursor-pointer drop-shadow-lg min-h-14 w-full bg-zinc-800 rounded-full bg-opacity-10 ">
        <div>
        <img
            className="mx-left-3 h-10 w-auto"
            src="https://ouch-cdn2.icons8.com/zx6JpeABmUGyWbv5X-Pf4LPWacrqIGRB7OetmcDEkuk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQw/L2YyZjA1MzFhLTQx/N2QtNDM3MC1hOGQy/LWYxMGEyZjZmZDhi/Yi5wbmc.png"
            alt="Arogya"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage