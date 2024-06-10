/* eslint-disable no-unused-vars */
import React from 'react'

const GenderCheckBox = ({handleGenderCheckBox}) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label htmlFor="gender" className='label gap-2 cursor-pointer'>
                    <span className='label-text'> Male </span>
                    <input name="gender" type="radio" className='checkbox' value="male" onChange={(e) => handleGenderCheckBox(e.target.value)}/>
                </label>
            </div>
            <div className='form-control'>
                <label htmlFor="gender" className='label gap-2 cursor-pointer'>
                    <span className='label-text'> Female </span>
                    <input name="gender" type="radio" className='checkbox' value="female" onChange={(e) => handleGenderCheckBox(e.target.value)}/>
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox; 