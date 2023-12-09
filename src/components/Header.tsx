import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import React from "react"
import { ThemeToggler } from "./ThemeToggler"

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-b-slate-500 px-6 py-3">
      <Link href="/" className="font-bold text-xl">
        FileSphere
      </Link>
      <div className="flex items-center gap-6">
        <ThemeToggler />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  )
}

export default Header
