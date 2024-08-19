import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css'
const Home = () => {
    return (
        <div>

            <div className="navbar bg-indigo-300">
                <button className="btn btn-ghost text-xl">
                    <p className='font-bold text-slate-50 text-2xl'>Multi Stage Form</p>
                </button>
            </div>


            <div className='firstRow'>
                <div className='products p-5'>



                    <div className='btn btn-primary'>
                        <Link to='/products' >

                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '25px', width: '25px' }} fill='currentcolor' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                        </Link>
                    </div>


                    <p className='text-lg text-sky-800 font-bold text-center mt-1'>Product Details</p>
                    <p className='text-xs text-slate-400 text-center'>Select from Menu</p>
                    <Link to='/product_list' >
                        <button className='btn'>
                            View Product List
                        </button>
                    </Link>


                </div>
                <div className='inventory'>



                    <div className='btn btn-accent'>
                        <Link to='/inventory' >
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '25px', width: '25px' }} fill='currentcolor' viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" /></svg>
                        </Link>
                    </div>


                    <p className='text-lg text-emerald-500 font-bold text-center mt-1'>Inventory Details</p>
                    <p className='text-xs text-slate-400 text-center'>A Deep Dive into<br></br> Inventory Details</p>
                    <Link to='/inventory_list' >
                        <button className='btn'>
                            Inventory List
                        </button>
                    </Link>

                </div>
            </div>
            <div className='secondRow'>
                <div className='photos p-5'>



                    <div className='btn btn-secondary'>
                        <Link to='/photo' >
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '25px', width: '25px' }} fill='currentcolor' viewBox="0 0 640 512"><path d="M256 0L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128l96 0 0 256 0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32 160 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm336 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z" /></svg>

                        </Link>
                    </div>


                    <p className='text-lg text-fuchsia-500 font-bold text-center mt-1'>Add Photo</p>
                    <p className='text-xs text-slate-400 text-center'>Visual Insights Included</p>



                </div>
                <div className='review p-5'>



                    <div className='btn btn-warning'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '25px', width: '25px' }} fill='currentcolor' viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>


                    </div>

                    <Link to='/products' >
                        <p className='text-lg text-yellow-500 font-bold text-center mt-1'>Review</p>
                        <p className='text-xs text-slate-400 text-center'>A Comprehensive Review</p>

                    </Link>
                </div>
            </div>

        </div >
    );
};

export default Home;