"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function PhotoSearchPage() {
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(true);
  const pathname = usePathname();
  const streamRef = useRef(null);
  const router = useRouter();

  const stopCamera = () => {
    if (streamRef.current) {
      let tracks = streamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
      streamRef.current = null;
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  useEffect(() => {
    if (cameraActive) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          stopCamera(); // Ensure previous stream is stopped before starting a new one
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => console.error("Error accessing camera:", error));
    } else {
      stopCamera();
    }
  }, [cameraActive]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [pathname]);

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center -mb-[60px]">
      <button
        className="z-10 absolute top-4 left-4 text-white flex items-center gap-1 border border-white p-1 rounded-lg"
        onClick={() => {
          stopCamera();
          router.push("/dashboard");
        }}
      >
        <FaChevronLeft /> Back
      </button>
      {cameraActive ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="absolute w-full h-full object-cover"
        ></video>
      ) : (
        <h1 className="text-white text-2xl">Please Allow Your Camera</h1>
      )}
    </div>
  );
}
