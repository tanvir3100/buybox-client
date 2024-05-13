/* eslint-disable react/prop-types */


const Divbox = ({ children }) => {
    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
            {children}
        </div>
    );
};

export default Divbox;