import React from 'react'

const SingUp = () => {
    return (
        <div>
            <div className='card shadow-xl'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto card-body shadow-xl my-20">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogIn} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block ">Your Email</label>
                            <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md " />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block ">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md " />
                            <div className="flex justify-end text-xs ">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <input type="submit" className="block w-full p-3 text-center rounded-sm btn btn-success" value="Sign In" />
                    </form>                    
                    <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                        <Link to={"/login"}><button className="underline ml-3 text-emerald-500">Log In</button></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingUp
