import { OurLinks, OurServices, OtherLinks } from "@/Constants";
import { LinksType } from "@/Types";
import { Mail } from "@/Content";

const Footer = () => {
    return (
        <div className="w-full pl-40 pr-32 py-16 bg-blue-100 flex-col items-center justify-center font-light text-sm">


            <div className="flex justify-between font-bold text-lg mb-10">
                <div className="w-3/12"></div>
                <div className="w-1/12">Our Links</div>
                <div className="w-3/12">Our Services</div>
                <div className="w-2/12">Others links</div>
            </div>

            <div className="flex justify-between">
                <div className="w-3/12">
                    <div>
                        You get just what you need to run your cloud
                        workloads--no more, no less.
                        Deploy from our single pane of glass,
                        manage them with ease and scale
                        up as fast as your workload grows
                    </div>
                    <div className="mt-14 flex justify-between w-8/12">
                        <div className="w-10 h-10 rounded-full bg-blue-300" />
                        <div className="w-10 h-10 rounded-full bg-blue-300 opacity-50" />
                        <div className="w-10 h-10 rounded-full bg-blue-300 opacity-20" />
                        <img className="w-6" src={Mail} alt="error"/>
                    </div>
                </div>
                <div className="w-1/12 flex-row">
                    {
                        OurLinks.map((link: LinksType) => {
                            return (
                                <div
                                    className="mb-4"
                                    key={link.name}
                                >
                                   <a href={link.url}> {link.name} </a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-3/12">
                    {
                        OurServices.map((link: LinksType) => (
                            <div
                                className="mb-4"
                                key={link.name}
                            >
                                <a href={link.url}>{link.name}</a>
                            </div>))
                    }
                </div>
                <div className="w-2/12">
                    {
                        OtherLinks.map((link: LinksType) => (
                            <div
                                className="mb-4"
                                key={link.name}
                            >
                                <a href={link.url}>{link.name}</a>
                            </div>))
                    }
                </div>
            </div>
            <div className="mt-8 grid grid-cols-2">
                <div>Terms & Condition  |   Privacy Policy </div>
                <div>Copyright © 2023 <span className="font-bold">EXOCODE TECHNOLOGIES |</span> All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer;