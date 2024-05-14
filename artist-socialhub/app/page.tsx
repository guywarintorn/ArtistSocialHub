import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@/app/assets/user-profile.jpeg";
import profilePic2 from "@/app/assets/user-2.jpg";
import profilePic3 from "@/app/assets/user-3.jpg";
import profilePic4 from "@/app/assets/user-4.jpg";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="grid col-span-1 h-max md:h-screen bg-slate-500 text-white rounded-lg shadow-md mt-4">
          <div className="md:h-screen px-10 py-6 flex flex-col gap-6">
            <div className="font-bold text-2xl my-4">
              <Link href="/user">Artist</Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-center">
                <Link href="/user">
                  <Image
                    src={profilePic}
                    alt="profile picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </Link>
                <p className="text-base-bold my-3">Guy Warin</p>
              </div>
              <div className="flex justify-between">
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
            </div>
            <hr />
            <div className="bg-white text-gray-400 rounded-lg h-1/2 text-center relative">
              <div className="py-4 md:pt-10 align-middle">
                <p>What is on your mind today?</p>
              </div>
              <div className="absolute invisible md:visible md:bottom-2 md:right-2">
                <button>
                  Post <SendIcon />
                </button>
              </div>
            </div>
            <div className="flex justify-end md:hidden">
              <button>
                Post <SendIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="grid col-span-1 md:col-span-2 h-max px-10 py-6 bg-white rounded-lg   shadow-md mt-4 overscroll-auto">
          <div className="flex flex-col">

            <div className="font-bold text-2xl my-4">
              <Link href="/">Feed</Link>
            </div>

            <div>
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
            <hr />

            <div>
              <div className="flex flex-row items-center gap-2 mt-8">
                <div>
                  <Image
                    src={profilePic2}
                    alt="profile picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div className="font-bold text-base my-4">
                  <p>Jane D.</p>
                </div>
              </div>
              <div className="my-8">
                <p>New platform?</p>
              </div>
              <div className="flex flex-row gap-8 mb-4">
                <div>
                  <button>
                  <FavoriteIcon /> 2 Love
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
            <hr />

            <div>
              <div className="flex flex-row items-center gap-2 mt-8">
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
                  <p>Susan R.</p>
                </div>
              </div>
              <div className="my-8">
                <p>We need media upload function !</p>
              </div>
              <div className="flex flex-row gap-8 mb-4">
                <div>
                  <button>
                    <FavoriteIcon /> 1 Love
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
            <hr />

            <div>
              <div className="flex flex-row items-center gap-2 mt-8">
                <div>
                  <Image
                    src={profilePic4}
                    alt="profile picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div className="font-bold text-base my-4">
                  <p>Mark T.</p>
                </div>
              </div>
              <div className="my-8">
                <p>Hello world.</p>
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
            <hr />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
