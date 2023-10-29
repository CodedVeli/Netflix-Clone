import { AiOutlineRight } from "react-icons/ai";

const Header = () => {
  //className="   md:w-[100%] w-screen h-auto  bg-fixed  absolute top-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-800 space-y-36" 
       
    return (
      
        <div className=" lg:w-screen  h-auto bg-fixed -mt-10 "  style={{
            backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/05d8322d-7649-4429-ba92-76c8b3075572/KE-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
            backgroundSize: 'cover',
           backgroundPosition: 'center',
           
            
        }} >
          <div className=" bg-gradient-to-b from-black   via-transparent to-black  w-screen space-y-44 h-auto p-15 ">
           <div className="  flex items-start justify-between p-10 mt-10 mx-8 ">
           <div className=" w-20 lg:w-40"><svg viewBox="0 0 111 30" fill="#e50914" id="netflix-logo" width="100%" height="100%">    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"></path></svg>
           </div>
             <button className="bg-red-600 text-white lg:px-4 lg:py-2 p-1 rounded-md">Sign In</button>
           </div>
           <div className=" flex flex-col items-center justify-center mx-6 lg:gap-7 gap-5 pt-9"> 
           <h1 className=" text-white text-3xl lg:text-5xl font-bold "> Unlimited movies, TV shows, and more</h1>
              <h2 className=" text-white text-2xl">Watch anywhere. Cancel anytime.</h2>
                <p className=" text-white text-2xl">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="lg:flex  flex-row items-center lg:space-y-0 space-y-6 lg:gap-1 text-white">
                    <input type="text" placeholder="Email address" className= " bg-transparent border-2 border-slate-400  px-4 py-2 rounded-md" />
                    <button className= "  flex flex-row lg:ml-0 ml-16  gap-1 bg-red-600 text-white px-4 py-2 rounded-md">Get Started <AiOutlineRight className=" mt-1"/></button>

                    </div>
           </div>
           <p className="w-full bg-gray-800 rounded-l-full rounded-r-full h-[5px] mt-7" />
           </div>
        </div>
        
    );
};

export default Header;