import React from 'react'
import {NavLink} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deleniti qui vel eaque placeat et fuga sit earum debitis repellat nam incidunt id deserunt iste voluptate adipisci vero totam a, officia illo omnis? Velit deserunt nam, ipsam eius officia ullam expedita libero deleniti at, ex in odio veritatis minus nesciunt.</p>
                    <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact Us</NavLink>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src="/assets/images/about.png" alt="About Us" height='400px' width='400px' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About