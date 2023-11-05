"use client"

import { useState } from "react";
import { FeatureType, AdvantageType } from "@/Types";
import { Features, Advantages, MoreAdvantages, YourApps } from "@/Constants";
import {
    Apps, Without, With, Rocket, Arrow, InYourCloud, ConfigureAndDeploy,
    PushToDeploy, MultipleRuntime, ScaleInfinitely, CostDashboard, PreviewCost, Observability
} from "@/Content";

const Feature = () => {
    const [ActiveFeature, setActiveFeature] = useState<string>("Apps");
    const [ActiveShownApp, setActiveShownApp] = useState<string>("Your Cloud");

    return (
        <div
            className=" flex flex-col items-center w-inherit justify-center
                    w-full">
            <button
                className=" bg-blue-100
                        my-20 px-8 py-4 w-32 rounded-3xl
                        text-blue-700 font-bold text-center-base"
            >
                Features
            </button>

            {/* APPS SECTION */}

            <div
                className="
                    text-3xl font-semibold text-center font-poppins
                    mx-auto my-6 px-1 w-3/5"
            >
                <span className="text-blue-700">Save 1000s </span>
                of expensive coder hours
            </div>

            <div
                className="
                    text-lg text-purple-950
                    mb-8">
                With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.
            </div>

            <div
                className=" flex justify-evenly
                        mb-8 w-9/12
                        text-sm">
                {
                    Features.map((Feature: FeatureType) => {
                        return (
                            <div
                                className="flex flex-col"
                                key={Feature.name}>

                                <button
                                    className={Feature.name === ActiveFeature ? "w-32 px-4 py-2 border border-white" : "w-32 px-4 py-2 border border-gray-100"}
                                    onClick={() => setActiveFeature(Feature.name)}
                                >
                                    {Feature.name}
                                </button>

                                {
                                    Feature.name === ActiveFeature ?
                                        <div
                                            className=" bg-blue-700 h-1 rounded-md
                                            animate-animationWidth"
                                        /> : ""
                                }
                            </div>
                        )
                    })
                }
            </div>

            {/* DIFFERENCE SECTION */}

            <img
                className="w-8/12 mt-8"
                src={Apps}
                alt="error"
            />

            <div
                className=" flex flex-row justify-evenly w-9/12 mt-28
                            text-bold text-xl">
                <div className="flex flex-col items-center justify-center">
                    Without Xerocodee
                    <img className="w-9/12 pt-10" src={Without} alt="error" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    With Xerocodee
                    <img className="w-96 pt-10" src={With} alt="error" />
                </div>
            </div>

            {/* ADVANTAGES SECTION */}

            <div
                className="
            text-3xl font-semibold text-center font-poppins
            mx-auto mt-32 mb-8 px-16 w-7/12">
                Self serve infrastructure platform for
                <span className="text-blue-700"> scaling teams </span>
            </div>

            <div
                className=" grid grid-cols-2 w-9/12">
                {
                    Advantages.map((ele: AdvantageType) => {
                        return (<div className=" flex items-center m-6 p-4 w-10/12
                                                rounded-2xl bg-white drop-shadow-xl">
                            <div className="p-3 bg-white rounded-2xl drop-shadow-lg">
                                <img src={ele.url} alt="error"></img>
                            </div>
                            <div className="ml-6">
                                <div className="font-poppins text-lg font-semibold">{ele.name}</div>
                                <div className="text-sm font-light">{ele.text}</div>
                            </div>

                        </div>);
                    })
                }
            </div>

            <div className="bg-blue-700 w-10/12 mt-10 px-32 py-16 text-white rounded-3xl">
                <div className=" text-3xl font-semibold text-center font-poppins px-12 mx-auto">
                    Modernize apps, infrastructure with cloud native tech for resilience, scalability.
                </div>

                <div className="flex flex-col mt-10">
                    <div className="flex flex-row">
                        <img className="w-8/12" src={MoreAdvantages[0].url} alt="error" />
                        <div className="flex flex-col justify-center">
                            <div className=" text-3xl font-semibold text-left font-poppins">
                                {MoreAdvantages[0].name}
                            </div>
                            <div className="mt-10 text-lg leading-loose">
                                {MoreAdvantages[0].text}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-center">
                            <div className=" text-3xl font-semibold text-left font-poppins">
                                {MoreAdvantages[1].name}
                            </div>
                            <div className="mt-10 text-lg leading-loose">
                                {MoreAdvantages[1].text}
                            </div>
                        </div>
                        <img className="w-5/12" src={MoreAdvantages[1].url} alt="error" />
                    </div>

                </div>
            </div>

            {/* SHOWCASE SECTION */}

            <div className="flex flex-col items-center w-10/12">

                <div className=" flex justify-center text-3xl font-semibold text-center font-poppins mx-auto mt-32 mb-8 px-16 w-7/12">
                    The Xerocodee way
                    <img className="pl-4 w-14" src={Rocket} alt="error" />
                </div>

                {/* 01 */}

                <div className="w-full flex flex-col items-center">

                    <div
                        className=" flex justify-center
                text-3xl font-semibold text-center font-poppins
                mt-14 w-7/12">
                        01
                    </div>
                    <div className="border-blue"></div>

                    <img src={Arrow} alt="error"></img>

                    <div className="text-xl font-semibold text-center font-poppins mt-14 mb-6 w-7/12">
                        Self serve Infrastructure
                    </div>

                    <div className="">
                        Accelerate by self-serving production-ready infrastructure and customize as you scale.
                    </div>

                    <div className="w-full flex flex-row mt-16">
                        {
                            YourApps.map((app: FeatureType) => {
                                return (
                                    <div
                                        className="flex flex-col"
                                        key={app.name}>

                                        <button
                                            className={app.name === ActiveShownApp ? "mx-3 px-4 py-2 border border-white" : "mx-3 px-4 py-2 border border-gray-100"}
                                            onClick={() => setActiveShownApp(app.name)}
                                        >
                                            {app.name}
                                        </button>

                                        {
                                            app.name === ActiveShownApp ?
                                                <div className=" bg-blue-700 h-1 rounded-md animate-animationWidth" /> : ""
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="w-10/12 flex flex-row">
                        <div className="w-1/2 flex justify-center">
                            <img src={InYourCloud} alt="Error" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">In Your Cloud</div>
                            <div>Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon)</div>
                        </div>
                    </div>

                </div>

                {/* 02 */}

                <div className="w-full flex flex-col items-center">

                    <div className=" flex justify-center text-3xl font-semibold text-center font-poppins mt-14 w-7/12">02</div>
                    <div className="border-blue" />

                    <img src={Arrow} alt="error" />

                    <div className="text-xl font-semibold text-center font-poppins mt-14 mb-6 w-7/12">
                        Deploy applications, fast!
                    </div>

                    <div className="">
                        Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.
                    </div>

                    <div className="w-10/12 flex flex-row my-16">
                        <div className="w-1/2 flex justify-center">
                            <img src={ConfigureAndDeploy} alt="Error" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">Configurable Build and Deploy pipelines</div>
                            <div>Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.</div>
                        </div>
                    </div>

                    <div className="w-10/12 flex flex-row my-16">
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">Push to Deploy</div>
                            <div>Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.</div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={PushToDeploy} alt="Error" />
                        </div>
                    </div>

                    <div className="w-10/12 flex flex-row my-16">
                        <div className="w-1/2 flex justify-center">
                            <img src={MultipleRuntime} alt="Error" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">Multiple runtimes</div>
                            <div>Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.</div>
                        </div>
                    </div>

                    <div className="w-10/12 flex flex-row my-16">
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">Scale infinitely</div>
                            <div>Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.</div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={ScaleInfinitely} alt="Error" />
                        </div>
                    </div>

                </div>

                {/* 03 */}

                <div className="w-full flex flex-col items-center">

                    <div className=" flex justify-center text-3xl font-semibold text-center font-poppins mt-14 w-7/12">03</div>
                    <div className="border-blue"></div>

                    <img src={Arrow} alt="error"></img>

                    <div className="text-xl font-semibold text-center font-poppins mt-14 mb-6 w-7/12">
                        Visibility into costs and metrics
                    </div>

                    <div className="">
                        Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.
                    </div>

                    <div className="w-10/12 flex flex-row my-16">
                        <div className="w-1/2 flex justify-center">
                            <img src={CostDashboard} alt="Error" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">Customizable cost dashboards and reports</div>
                            <div>Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.</div>
                        </div>
                    </div>

                    <div className="w-10/12 flex flex-row my-16">
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">Preview infra costs</div>
                            <div>See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.</div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={PreviewCost} alt="Error" />
                        </div>
                    </div>

                    <div className="w-10/12 flex flex-row my-16">
                        <div className="w-1/2 flex justify-center">
                            <img src={Observability} alt="Error" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="my-4 font-bold text-lg">Observability from day one</div>
                            <div>Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>)
}

export default Feature;