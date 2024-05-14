import Link from "next/link";
import TryOutlinedIcon from '@mui/icons-material/TryOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Navbar = () => {
  return (
      <div className="container flex flex-row h-10 lg:h-20 p-4 lg:p-10 justify-between items-center bg-slate-700 rounded-full shadow-md mt-3">
        <div className="flex flex-row font-bold text-xl items-center">
          <Link href="/"><span className="text-green-500">Art</span><span className="text-white">istPlace</span></Link>
          <div className="invisible md:visible border-2 rounded-full text-white p-2 text-sm ml-5">
            <TryOutlinedIcon />
            <span className="font-bold ml-1">New features</span> &#183; is coming in update 1.05
            <ChevronRightOutlinedIcon />
          </div>
        </div> 
        <div className="flex items-center text-white gap-5 font-sm lg:font-medium text-base">
          <Link href="/" className="active:text-white hover:text-green-700">Home</Link>
          <Link href="/user" className="active:text-white hover:text-green-700">User</Link>
          <Link href="/chat" className="active:text-white hover:text-green-700">Chat</Link>
        </div>
      </div>
  )
}

export default Navbar;