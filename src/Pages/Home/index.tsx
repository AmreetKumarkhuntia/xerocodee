import { Sponsors } from "@/Constants";
import { GroupImage } from "@/Content";
import Feature from "./Feature";
import NewsLetter from "../Newsletter";
import Stories from "../Stories";

const HomePage = () => {
    return (
        <div className="w-screen flex flex-col items-center">
            {/* LANDING SECTION */}

            <div
                className=" text-5xl font-bold text-center font-poppins
                            mx-auto my-6 px-1 w-3/5">
                Build your audience and grow your brand
            </div>
            <div
                className=" mx-auto w-3/5 px-8 w-7/12
                            text-center text-gray-400 text-lg">
                no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.
            </div>
            <button
                className=" mx-auto my-10 px-8 py-2
                            bg-blue-600 rounded-md
                            text-white">
                Get Started Now
            </button>
            <img
                className="mx-auto"
                src={GroupImage}
                alt="Error"
                height={1000}
                width={1000} />

            {/* SPONSORS SECTION */}

            <div
                className="flex flex-wrap w-full justify-center">
                {
                    Sponsors.map((url: string) => {
                        return (<img
                            className="mx-28 my-4 w-32 h-auto"
                            src={url}
                            alt="error"
                            key={url}
                        />)
                    })
                }</div>

            {/* FEATURES SECTION */}
            
            <Feature />

            {/* STORIES SECTION */}

            <Stories />

            {/* NEWS SECTION */}

            <NewsLetter />
        </div>
    )
}


export default HomePage;