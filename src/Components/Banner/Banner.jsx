import {
    Slide
} from "react-awesome-reveal";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/chx3ZXf/sneakers-3714730.jpg)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <Slide triggerOnce direction='up'>
                            <h1 className="mb-5 text-5xl font-bold">BuyBox- Where Every Step Tells a Story</h1>
                        </Slide>
                        <Slide triggerOnce direction='up'>
                            <p className="mb-5">Stride in Style with Us</p>
                        </Slide>
                        <Slide triggerOnce direction='up'>
                            <button className="btn btn-outline rounded-none border-white border-2 hover:bg-white hover:text-black">Shop Now</button>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;