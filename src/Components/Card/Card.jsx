/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Card = ({ collection }) => {
    const { id, name, image, category, price } = collection;
    return (
        <div className="flex flex-grow card">
            <div className="card group p-2 bg-base-100 rounded-none">
                <figure>
                    <img className="group-hover:scale-110 transition h-32 sm:h-36 md:h-40 lg:h-44 xl:h-60 w-full" src={image} alt="Shoes" />
                </figure>
                <div className="bg-base-100 bg-opacity-50 gap-1">
                    <h2 className="mt-2 text-base group-hover:underline">{name}</h2>
                    <p className="text-lg">${price} CAD</p>
                </div>
            </div>
        </div>
    );
};

export default Card;