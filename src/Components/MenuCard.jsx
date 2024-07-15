import React from 'react'

const MenuCard = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                items.map(item => <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={item.image}
                                alt="Shoes" />
                        </figure>
                        <p className='absolute top-3 right-5 text-white bg-gray-800 py-2 px-4 text-sm'>$ {item.price}</p>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}!</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    )
}

export default MenuCard
