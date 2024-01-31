"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageCreator({ liquor }) {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked");

    try {
      const response = await fetch("/api/image-gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: e.target.prompt.value,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        setError(errorMessage.error);
        return;
      }

      const { images } = await response.json();

      const imageURL = `data:image/jpeg;base64,${images[0].imageData}`;
      setPrediction({ imageURL });
    } catch (error) {
      console.error(error);
      setError("Failed to generate image");
    }
  };

  return (
    <div className="">
      {prediction && (
        <Image
          src={prediction.imageURL}
          alt="output"
          width={1000}
          height={1000}
        />
      )}
    </div>
  );
}
