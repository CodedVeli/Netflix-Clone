
const Download = () => {
    return (
        <div className=" bg-black ">
        <div className="lg:flex flex-row-reverse items-center justify-center mx-auto p-7 lg:p-0   ">
        <div className="text-white space-y-7 mr-20 lg:ml-0 ml-16">
          <h1 className=" lg:text-5xl text-3xl font-bold">Download your shows to watch offline</h1>
          <h1 className=" font-medium text-lg  lg:text-xl">Save your favorites easily and always have something to watch.</h1>
        </div>
        <div className=" mx-auto">
       <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""  />
       <div className=" flex items-center justify-center pb-10 ">
       <div className=" flex flex-row  bg-black border-2 border-gray-500 rounded-xl w-80 p-4  ">
         <img className=" w-16" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
       <div className=" flex flex-col ml-3 mt-3">
       <p className=" text-white"> Stranger Things</p>
       <p className=" text-blue-700">Downloading...</p>
       </div>
        <img className=" w-16 h-16" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
        </div>
        </div>
       </div>
      
        </div>
        <p className="w-full bg-gray-800 rounded-l-full rounded-r-full h-[5px] mt-7" />

      </div>
    );
};

export default Download;