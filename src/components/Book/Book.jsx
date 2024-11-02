import React from 'react';

const Book = ({ book }) => {
    const { bookName, author, image } = book;
    return (
        <div className="card bg-gray-300 w-96 shadow-xl p-6 rounded-xl my-4">
            <figure className='bg-base-300 py-8 rounded-xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;