const Avatar = ({ name, url }: { name: string, url: string }) => {

    return (
        <div className="bg-blue-600 w-28 h-28 rounded-full flex items-center justify-center text-7xl text-white" >
            {!url ? name.charAt(0) : <img className="w-26 h-26" src={url} alt="error" />}
        </div>
    )
}

export default Avatar;