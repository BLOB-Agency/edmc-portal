"use client";
import React from "react";
import { useState } from "react";
import LoginInput from "./components/Login/Input";
import PrimaryBtn from "./components/PrimaryBtn";
import "./globals.css";
import Link from "next/link";
import RememberMe from "./components/Login/RememberMe";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <main className="min-h-screen bg-bg-img-login bg-cover bg-center relative flex justify-center items-center ">
      <div className="  h-[100vh] w-[100vw] opacity-50 bg-gradient-to-t from-secondary to-primary bg-gradient-to-r "></div>
      <div className="flex flex-col gap-[30px] self-center bg-transparentDark p-[30px] h-full absolute justify-center md:justify-start md:h-fit md:drop-shadow-2xl md:rounded-[12px]">
        <div className="flex flex-col gap-[12px]">
          <h1 className="text-6xl text-white">Welcome to Dropper!</h1>
          <span>Enter your account details to get started.</span>
        </div>
        <LoginInput
          label={"E-mail address"}
          icon={"email-icon.png"}
          type={"email"}
          placeholder={"john@doe.com"}
          name={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          type={"password"}
          placeholder={"********"}
          name={"password"}
          icon={"lock-icon.png"}
          label={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <div className="flex justify-between items-center">
            <RememberMe />
            <PrimaryBtn text={"CONTINUE!"} />
          </div>
        </div>
        <span className="h-[1px] bg-secondary w-full"></span>
        <Link href="/forgotpassword" className="underline self-end">
          Forgot your password?
        </Link>
      </div>
    </main>
  );
}
