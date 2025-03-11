"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PhotoSearchPage() {
  const router = useRouter();

  // Camera references/states
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const streamRef = useRef(null);

  // Track camera
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(false);

  // Set constraints for environment camera
  const constraints = {
    video: {
      facingMode: "environment",
      width: { ideal: 1280 },
      height: { ideal: 720 },
      zoom: 1, // Explicitly set zoom to default
      aspectRatio: 16 / 9, // Ensures the correct width/height ratio
    },
  };

  // Loading overlay states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !cameraActive) {
      startCamera();
    }
    
    return () => {
      stopCamera(); // Ensure cleanup when unmounting
    };
  }, []);
  
  
  // Start camera
  async function startCamera() {
    try {
      setCameraError(false);
  
      // Stop any existing stream before starting a new one
      if (streamRef.current) {
        stopCamera();
      }
  
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
  
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
  
        // Wait for the video element to load metadata before playing
        videoRef.current.onloadedmetadata = async () => {
          try {
            await videoRef.current.play();
            setCameraActive(true);
          } catch (playError) {
            console.error("Video playback failed:", playError);
          }
        };
      }
    } catch (err) {
      console.error("Camera access denied:", err);
      setCameraError(true);
    }
  }
  


  // Stop camera
  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  // Capture from camera → dataURL
  async function captureImage() {
    if (!cameraActive || !videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");

    // For example, we'll show loading → success, then go back
    stopCamera(); // optional if you want to stop after capturing
    await saveImage(imageData);
  }

  // Dummy function to “save” the image
  async function saveImage(imageData) {
    try {
      setIsLoading(true);

      // Simulate an async request
      await new Promise((res) => setTimeout(res, 1000));

      // On success
      setIsSuccess(true);
      await new Promise((res) => setTimeout(res, 1000));
      router.push("/dashboard");
    } catch (error) {
      console.error("Failed to save image:", error);
      setIsLoading(false);
      setIsSuccess(false);
    }
  }

  // Gallery input
  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      // We have a dataURL from the file
      const dataURL = event.target.result;
      stopCamera();
      await saveImage(dataURL);
    };
    reader.readAsDataURL(file);
  }

  function openFileInput() {
    fileInputRef.current?.click();
  }

  // The user might also want a “Flip” for front camera if desired
  async function flipCamera() {
    // If you want to actually flip to front, you can change constraints to "user"
    constraints.video.facingMode = "user";
    stopCamera();
    startCamera();
  }

  function handleBack() {
    stopCamera();
    router.push("/dashboard");
  }

  function handleFlash() {
    // Just a placeholder. Real flash/torch is not widely supported.
    alert("Flash toggled (UI only).");
  }

  return (
    <div className="relative w-full h-screen flex flex-col bg-black">
      {/* TOP BAR */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-black bg-opacity-75">
        {/* Back Button */}
        <button onClick={handleBack}>
          {/* Use your own icon path or a local file */}
          <img src="/icons/back.svg" alt="Back" className="w-6 h-6" />
        </button>
        {/* Flash Button */}
        <button onClick={handleFlash}>
          <img src="/icons/flash.svg" alt="Flash" className="w-6 h-6" />
        </button>
      </div>

      {/* CAMERA PREVIEW OR ERROR */}
      <div className="flex-1 relative w-full h-full">
        {cameraError ? (
          // If user denied camera
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <p className="text-lg mb-4">📷 Please allow camera access</p>
            <button
              onClick={startCamera}
              className="px-4 py-2 bg-white text-black rounded-md"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {/* Camera Preview */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full contain"
            />

            {/* Focus Box in the center */}
            {cameraActive && (
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-32 h-32 border-2 border-white sm:w-48 sm:h-48" />
              </div>
            )}
          </>
        )}
      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between p-6 pt-4 bg-black bg-opacity-75">
        {/* Gallery Button */}
        <button onClick={openFileInput}>
          <img src="/icons/album.svg" alt="Gallery" className="w-8 h-8" />
        </button>

        {/* Shutter Button */}
        <button
          onClick={captureImage}
          className="w-16 h-16 bg-white rounded-full shadow-lg"
        />

        {/* Flip Button */}
        <button onClick={flipCamera}>
          <img src="/icons/flip.svg" alt="Flip Camera" className="w-8 h-8" />
        </button>
      </div>

      {/* LOADING OVERLAY */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            className="w-20 h-20 bg-black bg-opacity-80 rounded-lg flex items-center justify-center"
            animate={{ scale: isSuccess ? 1.2 : 1 }}
          >
            {isSuccess ? (
              // Checkmark
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-12 h-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <path
                  fillRule="evenodd"
                  d="M9 19.414l-5.707-5.707 1.414-1.414L9 16.586l10.293-10.293 1.414 1.414z"
                />
              </motion.svg>
            ) : (
              // Spinning circle
              <motion.div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
            )}
          </motion.div>
        </motion.div>
      )}

      {/* HIDDEN FILE INPUT for "Gallery" */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* HIDDEN CANVAS for Capturing */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
