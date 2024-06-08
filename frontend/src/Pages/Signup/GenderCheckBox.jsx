/* eslint-disable no-unused-vars */
import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label htmlFor="male" className='label gap-2 cursor-pointer'>
                    <span className='label-text'> Male </span>
                    <input type="checkbox" className='checkbox' />
                </label>
            </div>
            <div className='form-control'>
                <label htmlFor="female" className='label gap-2 cursor-pointer'>
                    <span className='label-text'> Female </span>
                    <input type="checkbox" className='checkbox' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox; 