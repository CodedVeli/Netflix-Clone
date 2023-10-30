import { AiOutlinePlus, AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

const About = () => {

    const items = [
        
        {
          id: 2,
          label: 'What is Netflix',
          content: ' Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!'
        },
        {
          id: 3,
          label: 'How do much does netflix cost?',
          content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Ksh 200 to Ksh 1,100 a month. No extra costs, no contracts.'
        },
        {
          id: 4,
          label: 'How do I cancel?',
          content: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
             },
        {
          id: 5,
          label: 'How can I watch on Netflix?',
          content: ' Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },
        {
            id: 6,
            label: 'Is Netflix good for kids?',
            content: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
        }
      ]
    

    const [expandedIndex, setExpandedIndex] = useState(null);

    const renderedItems = items.map((item, index)=> {

        const isExpanded = index === expandedIndex;

        const handleClicked = (nextIndex) => {
            if (index === expandedIndex) {
                setExpandedIndex(null);
            } else {
                setExpandedIndex(nextIndex);
            }
        }


        const icon = <span className=" text-2xl">
            {isExpanded ? <AiOutlineClose /> : <AiOutlinePlus /> }
        </span>

return (
    <div key={item.id} className=" bg-gray-800 w-full  ">
    <div className=" flex flex-row justify-between p-7 bg-gray-800 w-full border-b items-center cursor-pointer  " onClick={() => handleClicked(index)}>  {item.label} {icon}</div>
    
    <div className=" flex flex-wrap w-full border-2 "> {isExpanded && <div className=" border-b p-5">{item.content}</div>}</div>
    </div>
);
});  

    return (
         <div className=" bg-black">
        <div className=" flex flex-col items-center justify-center p-10  lg:pr-80 lg:pl-80 space-y-3  lg:text-2xl  text-xl text-white" >
            <h1 className=" text-white lg:text-5xl text-xl font-bold lg:mb-7">Frequently Asked Questions</h1>
            
            {renderedItems}

            <div className=" lg:p-16 space-y-5 ">
            <p className=" text-white text-lg lg:text-2xl">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="lg:flex  flex-row items-center lg:space-y-0 space-y-6 lg:gap-1 text-white">
                    <input type="text" placeholder="Email address" className= " bg-transparent border-2 border-slate-400 lg:w-auto w-72 px-4 py-2 rounded-md" />
                    <button className= " flex flex-row lg:ml-0 ml-12  gap-1 bg-red-600 text-white px-4 py-2 rounded-md ">Get Started <AiOutlineRight className=" mt-1"/></button>

                    </div>
            </div>
        </div>
        <p className="w-full bg-gray-800 rounded-l-full rounded-r-full h-[5px] mt-7" />

        </div>
    );
};

export default About;
