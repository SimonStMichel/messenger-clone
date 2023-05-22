// Next
import Image from "next/image";

// Components
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
      <div className="flex flex-col min-h-full py-12 bg-gray-100 || sm:px-6 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <Image src="/img/logo.png"  height="48" width="48" className="mx-auto w-auto" alt="logo" />
              <h2 className="mt-6 text-center text-3xl font-bold -tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <AuthForm/>
      </div>
    )
  }