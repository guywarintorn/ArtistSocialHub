import React from "react";
import Link from "next/link";
import profilePic from "@/app/assets/user-profile.jpeg";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const UserPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-white h-max mt-4 rounded-lg shadow-md content-start">
        <div className="font-bold text-2xl my-4 px-10 py-6 h-10">
          <Link href="/">Artist</Link>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex flex-col gap-2 justify-center">
            <Link href="/user">
              <Image
                src={profilePic}
                alt="profile picture"
                width={100}
                height={100}
                className="rounded-full"
              />
            </Link>
            <p className="text-xl font-bold  text-center mt-3">Guy Warin</p>
            <p className="text-base text-center">@guywarin</p>
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-10 align-center text-center">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">2</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">3</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>

        <div className="mx-auto my-10">
          <button className="bg-violet-600 hover:bg-violet-800 cursor-pointer text-white rounded-lg shadow-lg p-4">
            Edit profile
          </button>
          <button className="bg-violet-600 hover:bg-violet-800 cursor-pointer text-white rounded-lg shadow-lg p-4 ml-3">
            Share profile
          </button>
        </div>

        <div className="text-base font-semibold my-4 px-10 py-6 h-10">
          <Link href="/">Your posts</Link>
        </div>
        <div className="m-5 ml-10 md:m-10 md:ml-20">
          <div className="flex flex-row items-center gap-2 mt-4">
            <div>
              <Link href="/user">
                <Image
                  src={profilePic}
                  alt="profile picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>
            <div className="font-bold text-base my-4">
              <p>Guy Warin</p>
            </div>
          </div>
          <div className="my-8">
            <p>Hello Artists!</p>
          </div>
          <div className="flex flex-row gap-8 mb-4">
            <div>
              <button>
                <FavoriteBorderIcon /> Love
              </button>
            </div>
            <div>
              <button>
                <ChatBubbleOutlineIcon /> Comment
              </button>
            </div>
            <div>
              <button>
                <SendOutlinedIcon /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
