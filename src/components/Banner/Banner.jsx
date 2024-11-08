import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-300 min-h-screen  my-5  rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-[#23BE0A] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;