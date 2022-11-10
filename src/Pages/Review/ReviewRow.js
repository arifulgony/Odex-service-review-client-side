import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete}) => {
    const { _id, serviceName,  service,  message, } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://service-review-server-indol.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])


    return (
        <>
            <div className='mask  w-24 h-24'>{ reviewService?.img && 
                        <img src={reviewService.img} alt="img" />}</div>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{message}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/update/${review._id}`}>
                            <button className='btn btn-outline btn-success mr-2'>Update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error'>Delete </button>
                                 <Toaster
                                        position="top-center"
                                        reverseOrder={false}
                                        />
                      </div>
                </div>
           
        </>
    );
};

export default ReviewRow;