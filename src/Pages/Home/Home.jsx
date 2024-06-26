/* eslint-disable react/no-unknown-property */
import collections from '../../../public/collection.json'
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import Divbox from '../../Components/divbox/Divbox';
import { Slide } from "react-awesome-reveal";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner />
            <Divbox>
                <div>
                    <Slide triggerOnce direction='up'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center mt-10 mb-5'>Obsessive Attention. Intelligent Effort.</h1>
                    </Slide>
                    <Slide triggerOnce direction='up'>
                        <p className='text-center mb-10'>Functional handbags made of luxurious materials to improve peoples lives in small but mighty ways.</p>
                    </Slide>
                </div>
            </Divbox>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/Zf4BC8H/depositphotos-59288653-stock-illustration-hill-shoes-and-sneakers-seamless.webphttps://i.ibb.co/r2sv7JS/pixelcut-export.jpg)' }}>
                <div className="bg-opacity-40"></div>
                <Divbox>
                    <div className='my-5
                    grid 
                    grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-4 
                    2xl:grid-cols-5 
                    '>
                        <Slide triggerOnce direction='up'>
                            {
                                collections.map(collection => <Card key={collection.id} collection={collection} />)
                            }
                        </Slide>
                    </div>
                </Divbox>
            </div>
        </div>
    );
};

export default Home;



