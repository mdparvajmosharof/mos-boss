import React from 'react'

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className=''>
            <div className='text-center w-1/2 mx-auto my-10'>
                <p className='text-emerald-600'>{subHeading}</p>
                <p className='font-bold border-y-2 py-5 text-4xl  '>{heading}</p>
            </div>

        </div>
    )
}

export default SectionTitle
