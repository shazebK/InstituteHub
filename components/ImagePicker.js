"use client"
import { CloseIcon } from "@/assets/Icons";
import { useState } from "react";

export default function ImagePicker({max_images}){
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;
        const files = Array.from(selectedFiles).slice(0, max_images - selectedImages.length);
        
        const imagesArray = Array.from(files).map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages(prevState => )
    };

    const removeImage = (index) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const ImageShow = ({index}) => {
        return (
            <div className="w-48 h-32 relative">
                <img src = {selectedImages[index]} alt = {selectedImages[index]} className="w-full h-full object-cover hover:brightness-50"/>
                <span onClick = {() => removeImage(index)} className="absolute top-0 right-0 cursor-pointer z-10"><CloseIcon color = "#ff2121"/></span>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center">
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                multiple = {true}
                disabled={selectedImages.length >= max_images}
                className="mb-4"
            />
            <div className="w-full grid grid-cols-5 gap-4">
                {
                    selectedImages.map((_,idx) => <ImageShow key = {idx} index = {idx}/>)
                }
            </div>
        </div>
    );
};
