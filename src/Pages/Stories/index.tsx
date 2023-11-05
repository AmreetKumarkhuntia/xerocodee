'use client'

import { Comma } from "@/Content";
import Avatar from "@/components/avatar";
import { useState } from "react";
import { AllStories } from "@/Constants";

const Stories = () => {
    const [currentStory, setCurrentStory] = useState<number>(0);

    const handleLeft = () => {
        setCurrentStory((currentStory - 1))
        if (currentStory < 0) setCurrentStory(AllStories.length - 1)
    }

    const handleRight = () => {
        setCurrentStory((currentStory + 1) % AllStories.length)
    }

    return (
        <div className="w-9/12">
            <div className="text-3xl font-semibold text-center font-poppins mx-auto mt-20 mb-10">See Our Success Stories</div>
            <div className="flex flex-row items-center justify-between w-full">
                <div className="bg-blue-700 text-2xl text-white w-12 h-12 rounded-full flex justify-center items-center"> <button className="w-full h-full" onClick={() => { handleLeft() }}> &#60; </button> </div>
                <div className="flex flex-row items-center justify-center mx-12 w-9/12 h-72 drop-shadow-2xl">
                    <div className="w-2/12 h-full bg-blue-700 rounded-l-3xl flex items-center justify-center">
                        <img src={Comma} alt="Error" />
                    </div>
                    <div className="w-10/12 h-full p-12 flex justify-between items-center rounded-r-3xl bg-gray-100">
                        <div className="flex flex-col w-8/12">
                            {AllStories[currentStory].text}
                            <div className="text-right">-{AllStories[currentStory].name}</div>
                            <div className="text-right">{AllStories[currentStory].role}</div>
                        </div>
                        <div className="w-4/12 text-right flex items-center justify-center">
                            <Avatar name={AllStories[currentStory].name} url={AllStories[currentStory].url} />
                        </div>
                    </div>
                </div>
                <div className="bg-blue-700 text-2xl text-white w-12 h-12 rounded-full flex justify-center items-center"> <button className="w-full h-full" onClick={() => { handleRight() }}> &#62; </button> </div>
            </div>
            <div className="flex items-center justify-center mt-16 w-full">
                {
                    AllStories.map(
                        (ele) => {
                            return (
                                <div
                                    className={ele.name === AllStories[currentStory].name ? "w-2 h-2 bg-gray-600 rounded-full mx-2" : "w-2 h-2 bg-gray-300 rounded-full mx-2"}
                                    key={ele.name}
                                />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Stories;