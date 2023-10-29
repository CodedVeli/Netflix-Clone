
const Footer = () => {
    return (
        <div className=" bg-black text-white lg:flex items-start justify-evenly p-16 ">
         <div className="lg:ml-16 lg:mt-4 ml-16"   >
         <p className=" hover:underline">Questions? Contact us.</p>    
           <p className=" hover:underline">FAQ</p>
           <p className=" hover:underline">Investor Relations</p>  
           </div>       
           <footer className=" mx-auto text-slate-200 body-font  ">
  <div className="container px-5 py-8 mx-auto flex text-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className=" mx-auto text-slate-200 text-xl font-ubuntu">Eric Kibuchi</span>
    </a>
    <p className="flex text-center justify-center  text-sm text-slate-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 Eric Kibuchi —
      <a
        href="https://twitter.com/kibuchiIII"
        className="text-slate-200 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @kibuchiIII
      </a>
    </p>

  </div>
</footer>   
        </div>
    );
};

export default Footer;