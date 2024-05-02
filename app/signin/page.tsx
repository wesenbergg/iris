"use client";

import Input from "@/components/form/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const submit = async (fd: FormData) => {
    const { email, password } = Object.fromEntries(fd);
    console.log(email, password);
    try {
      await signIn("credentials", {
        email,
        password,
        // redirect: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-auto flex h-screen max-w-screen-md flex-row space-x-8">
      <div className="h-96 w-96 self-center rounded bg-slate-600 bg-gradient-to-r from-purple-800 to-purple-300 shadow" />
      <div className="flex flex-col items-start justify-center space-y-8">
        <h1 className="text-2xl">Fill in information to proceed</h1>
        <form className="space-y-4" action={submit}>
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="sample@mail.com"
            required
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="***************"
            required
          />
          <button
            className="rounded-lg bg-purple-700 px-5 py-2.5 font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
            type="submit"
          >
            Sign in
          </button>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="signup" className="text-purple-700">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
