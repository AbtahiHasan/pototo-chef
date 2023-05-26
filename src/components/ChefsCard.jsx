import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";


const ChefsCard = ({chef}) => {


    const {_id, name, image, number_of_recipes, likes, experience} = chef
    return (
        <article className="p-4 rounded border">
            <LazyLoad className="w-full h-[450px]" threshold={0.95}>
                <img className="w-full h-[450px] rounded object-cover" src={image} alt="" />
            </LazyLoad>
            <div className="text-center">
                <h3 className=" text-xl font-bold my-3">{name}</h3>
                <p className="font-bold my-2">Experience : {experience}</p>
                <p className="font-bold my-2">Total likes : {likes}</p>
                <p className="font-bold my-2">recipes : {number_of_recipes}</p>
                <Link className="py-2 px-5 rounded text-white mt-3 inline-block bg-[#289944]" to={`/chef/${_id}`}>View Recipes</Link>
            </div>
        </article>
    );
};

export default ChefsCard;