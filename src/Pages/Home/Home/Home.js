import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {

    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://service-review-server-indol.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Banner></Banner>
            <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl py-5 font-semibold">Our Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(0,3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
           <div className="text-center py-10">
           <Link to='/services'> <button className="btn btn-outline px-10"> SEE ALL </button>  </Link>
           </div>
           
            
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card card-compact w-96 bg-base-100 bg-color shadow-xl">
                        hello Lorem ipsum dolor sit amet.
                    </div>
                    <div className="card card-compact w-96 bg-base-100 bg-color shadow-xl">
                        hello Lorem ipsum dolor sit amet.
                    </div>
                    <div className="card card-compact w-96 bg-base-100 bg-color shadow-xl">
                        hello Lorem ipsum dolor sit amet.
                    </div>
                </div>


           
        </div>
       
        

    );
};

export default Home;