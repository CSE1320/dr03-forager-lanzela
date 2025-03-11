"use client";
import { useRouter, usePathname } from "next/navigation";
import { FaCamera, FaHome } from "react-icons/fa";
import { TbMushroom } from "react-icons/tb";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  // Our navigation helper:
  function setScreen(path) {
    router.push(path);
  }

  if (pathname !== "/photosearch") {
    return (
      <div className="sticky z-20 bottom-0 left-0 w-full 
      flex justify-around items-center 
      bg-[#589477] py-2 text-white 
      rounded-ss-3xl rounded-se-3xl"
      >
        <a
          href="/mushroom"
          onClick={(e) => {
            e.preventDefault();
            setScreen("/mushroom");
          }}
          className="flex flex-col items-center justify-center text-xl"
        >
          <TbMushroom />
        </a>
      
        <a
          href="/dashboard"
          onClick={(e) => {
            e.preventDefault();
            setScreen("/dashboard");
          }}
          className="flex flex-col items-center justify-center text-xl"
        >
          <FaHome />
        </a>
      
        <a
          href="/photosearch"
          onClick={(e) => {
            e.preventDefault();
            setScreen("/photosearch");
          }}
          className="flex flex-col items-center justify-center text-xl"
        >
          <FaCamera />
        </a>
      </div>
      
          );
        } else {
          return null;
        }
      }
