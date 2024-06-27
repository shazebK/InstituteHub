"use client"

import { useEffect, useState } from "react"
import Image from "next/image";

export default function ImageSlideShow({images,delay}){
    const [imageIdx,setImageIdx] = useState(0);
    useEffect(() => {
        const changeImage = setInterval(() => {
            setImageIdx(prevImgIdx => (prevImgIdx + 1)%images.length);
        },delay)

        return () => clearInterval(changeImage);
    },[])

    return (
        <Image src = {images[imageIdx].src} alt = {images[imageIdx].alt} fill className="object-cover rounded-md" priority/>
    )
}