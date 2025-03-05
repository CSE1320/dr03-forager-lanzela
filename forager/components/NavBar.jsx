"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCamera, FaHome } from "react-icons/fa";
import { TbMushroom } from "react-icons/tb";
import styles from "../styles/NavBar.module.css"; // Import the styles for the NavBar

export default function NavBar(a) {
  const pathname = usePathname();

  if (pathname !== "/photosearch")
    return (
      <div className="sticky z-20 bottom-0 left-0 w-full flex justify-around items-center bg-[#589477] py-2 text-white rounded-ss-3xl rounded-se-3xl">
        <Link href="/mushroom" passHref>
          <div
            className={`${styles.navItem} hover:bg-green-900/30 ${
              (pathname === "/mushroom" || pathname === "/comparison") &&
              "text-green-300"
            }`}
          >
            <TbMushroom />
          </div>
        </Link>
        <Link href="/dashboard" passHref>
          <div
            className={`${styles.navItem} hover:bg-green-900/30 ${
              pathname === "/dashboard" && "text-green-300"
            }`}
          >
            <FaHome />
          </div>
        </Link>
        <Link href="/photosearch" passHref>
          <div
            className={`${styles.navItem} hover:bg-green-900/30 ${
              pathname === "/photosearch" && "text-green-300"
            }`}
          >
            <FaCamera />
          </div>
        </Link>
      </div>
    );
}
