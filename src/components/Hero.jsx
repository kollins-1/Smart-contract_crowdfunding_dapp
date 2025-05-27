import { setGlobalState, useGlobalState } from "../store/index"

const Hero = () => {
    const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6 ">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
            <span className="capitalize">Lets bring creative ideas to life on</span>
            <br />
            <span className="uppercase text-red-600">Muhendislik.</span>
        </h1>
        <div className="flex justify-center items-center space-x-3">
            <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400" onClick = {() => setGlobalState('createModal', 'scale-100')}>
                Add your project
            </button>
            <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400">
                Fund a project
            </button>
        </div>
        <div className="flex justify-center items-center mt-10">
            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
                <span className="text-lg font-bold text-red-600">
                    {stats?.totalProjects || 0}
                </span>
                <span>Projects</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
                <span className="text-lg font-bold text-red-600">
                    {stats?.totalBacking || 0}
                </span>
                <span>Fundings</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 border shadow-md w-full">
                <span className="text-lg font-bold text-red-600">
                    {stats?.totalDonations || 0} ETH
                </span>
                <span>Donated</span>
            </div>
        </div>
    </div>
  )
}

export default Hero