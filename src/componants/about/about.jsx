import './about.css'
import React from 'react'

export default function About() {
  return (
    <div className='container'>
        <div className="about">
            <h2>About Me</h2>
        </div>
        <div className="info">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero velit rerum unde, eligendi placeat quibusdam iste nulla commodi libero, fugiat temporibus ipsum illum quaerat ex! Sapiente, nesciunt laborum quae laudantium quia alias voluptas? Reprehenderit expedita aliquam magni et repellendus minus possimus. Iure, officiis quae quisquam minima dolor eius sapiente corporis magni molestiae illum eum quo architecto doloribus repellat provident dolore aliquid ex odit! Doloremque fugit recusandae maxime adipisci culpa rerum earum consectetur consequatur nostrum! Et cumque itaque explicabo? Voluptates ipsum blanditiis repudiandae quas non aperiam harum ipsam beatae magni debitis voluptatum commodi ex obcaecati, itaque neque iure, laudantium soluta quis.
            </p>
            <button><a href="../../../public/cv.pdf" download='cv.pdf' className='text-decoration-none text-white'>Download Resume</a></button>
        </div>
    </div>
  )
}
