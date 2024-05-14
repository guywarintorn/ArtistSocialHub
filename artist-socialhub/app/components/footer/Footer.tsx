import Link from "next/link";

const Footer = () => {
  return (
    <div className="container flex flex-row h-2 p-4 lg:p-10 justify-between items-center bg-slate-700 rounded-md shadow-md mt-5">
      <div className="font-bold text-base text-white">
        <Link href="/">Copyright © 2024</Link>
      </div>
      <div className="flex items-center text-white gap-5 font-sm lg:font-medium text-base">
        <Link href="/" className="hover:text-green-700">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer;