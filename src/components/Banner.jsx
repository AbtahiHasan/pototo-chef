import { Link } from "react-router-dom";
import banner from "/banner.jpg"
import { BsArrowUpRight } from "react-icons/bs";
const Banner = () => {
    return (
        <div className="w-full h-[90vh] relative">
            <div className="before:content-[''] w-full h-[90vh] relative before:absolute before:bg-[#000000bb] before:top-0 before:right-0 before:left-0 before:bottom-0">

            <img className="w-full h-full  object-cover" src={banner} alt="" />
            </div>
            
                <div className="absolute max-w-[1240px] w-full mx-auto top-5 left-0 right-0  text-white h-full flex justify-center flex-col">
                    <h2 className="text-4xl sm:text-6xl pl-2 font-bold text-[#289944] leading-normal">Are You Hungry <br /><span className="text-white">Your Food Is Ready</span></h2>
                    <p className="leading-relaxed ml-3 my-5 text-xl">Discover the chef in you with our mouth-watering recipe <br /> Where passion meets flavor in every dish <br /> Taste the difference of our handcrafted dishes
                    </p>
                    <button className="bg-[#289944] text-white px-4 py-3 ml-3 rounded w-[150px]"><Link className="flex justify-center items-center gap-2" to="#our-chefs" ><span>Explore</span><BsArrowUpRight/></Link></button>

                </div>
            
        </div>
    );
};

export default Banner;