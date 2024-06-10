
import { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignup from '../../Hooks/useSignUp.js';

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        bio: "",
    })
    // eslint-disable-next-line no-unused-vars
    const { loading, signup } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input);
    }

    const handleGenderCheckBox = (selectedGender) => {
        setInput({ ...input, gender: selectedGender });
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <form className='form-control' onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Name" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Username" value={input.username} onChange={(e) => setInput({ ...input, username: e.target.value })} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="email" className="grow" placeholder="Email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" placeholder='Password' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" placeholder='Confirm password' value={input.confirmPassword} onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })} />
                    </label>
                    <GenderCheckBox handleGenderCheckBox={handleGenderCheckBox} />
                    <textarea className="textarea textarea-bordered flex items-center gap-2 mt-2 w-full" placeholder="Bio" value={input.bio} onChange={(e) => setInput({ ...input, bio: e.target.value })}></textarea>
                    {!loading ?
                        <button type='submit' className="btn btn-primary w-full mt-4">Signup</button>
                        :
                        <button type='submit' className="btn btn-primary w-full mt-4" disabled={loading}>
                            <span className="loading loading-dots loading-md"></span>
                        </button>}
                </form>
                <div className='mt-4'>Already have an account? <Link to="/login" className='link'>Login</Link></div>
            </div>
        </div>
    )
}

export default Signup;
