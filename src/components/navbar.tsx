import Image from "next/image";

const Logo: string = "https://res.cloudinary.com/dke9xzbl6/image/upload/v1698699891/XeroCodee/logo_mpe47v.svg";

const Navbar = () => {
    return (
        <div className="fixed w-screen">
            <div className="bg-white
                w-navW h-navH mx-auto my-6
                flex items-center justify-evenly
                border-2  border-slate-100 rounded-xl
                drop-shadow-xl">

                <Image src={Logo} alt="error" width="140" height="140" />

                <div className="w-1/3 flex item-center justify-evenly">
                    <div>Home</div>
                    <div>Team</div>
                    <div>Contact</div>
                    <div>Careers</div>
                </div>

                <button className="px-6 py-1 text-blue-700
                                border-2 border-blue-700 rounded-md">
                    Sign In </button>
            </div>

        </div>
    )
}

export default Navbar;