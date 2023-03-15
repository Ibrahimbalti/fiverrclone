import React from 'react';

const Sigin = () => {
  return (
    <>
    <div  className="flex min-h-full items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
  <div  className="w-full max-w-md space-y-8">
    <div>
      <h2  className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign In to Fiver</h2>
  
    </div>
    <form  className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div  className="-space-y-px rounded-md shadow-sm ">
        <div>
          <label for="email-address"  className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 my-4" placeholder="  Email/ Username" />
        </div>
        <div>
          <label for="password"  className="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" Password"/>
        </div>
      </div>

      <div  className="flex items-center justify-between">
        <div  className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox"  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label for="remember-me"  className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div  className="text-sm">
          <a href="#"  className="font-medium text-green-500 hover:underline">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit"  className="group relative flex w-full justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        
          Sign in
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <span>Not a member yet?</span>
        <a href="/signup" className=" text-green-600 hover:underline">Join now</a>
      </div>
    </form>
  </div>
</div>  
    </>
  );
}

export default Sigin;
