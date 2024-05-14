import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic2 from "@/app/assets/user-2.jpg";
import profilePic3 from "@/app/assets/user-3.jpg";
import profilePic4 from "@/app/assets/user-4.jpg";
import CircleIcon from '@mui/icons-material/Circle';
import SendIcon from "@mui/icons-material/Send";

const ChatPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-white h-screen mt-4 rounded-lg shadow-m content-start align-middle">
        <div className="font-bold text-2xl my-4 px-10 py-6">
          <Link href="/">Chat</Link>
        </div>

        <div>
          <div className="flex flex-row pb-4 items-center justify-center md:justify-start md:ml-8 md: gap-11">
            <div>
              <Link href="/user">
                <Image
                  src={profilePic2}
                  alt="profile picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>
            <div>
              <Link href="/user">
                <Image
                  src={profilePic3}
                  alt="profile picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>
            <div>
              <Link href="/user">
                <Image
                  src={profilePic4}
                  alt="profile picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
          <hr />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 h-full">
            <p className="font-bold pt-6 pl-6">Artist</p>
            
            <div className="invisible md:visible flex flex-row items-center gap-2 mt-8 ml-8 border-b-2 mr-8 pb-4">
              <div>
                <Image
                  src={profilePic3}
                  alt="profile picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="font-bold text-base my-4">
                    <p className="inline pr-2">Susan R.</p><span className="text-green-500 border-1"><CircleIcon /></span>
              </div>
            </div>

          </div>
          <div className="col-span-1 md:col-span-2 md:border-l-2 mt-10 md:mt-4 text-center h-96 relative">
            <p className="font-bold pt-6 pl-6">Susan R. <span className="text-green-500 border-1"><CircleIcon /></span></p>
            <p className="absolute md:right-6 bottom-6 text-white bg-blue-600 p-5 rounded-md shadow-md">Hey there.</p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ChatPage;
