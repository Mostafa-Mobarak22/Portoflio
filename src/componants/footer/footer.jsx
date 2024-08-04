import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-white d-flex justify-content-between align-items-center py-5 px-5">
        <div className="get d-flex flex-column justify-content-center">
            <h4 className='pb-3'>GET IN TOUCH</h4>
            <a href="mailto:mostafamobarak89@gmail.com" className='text-white text-decoration-none'><i class="fa-solid fa-envelope me-2"></i>mostafamobarak89@gmail.com</a>
            <a href="tel:+02001093059405" className='text-white text-decoration-none'><i class="fa-solid fa-id-card me-2"></i>+020-0109-3059-405</a>
        </div>
        <div className="get d-flex flex-column justify-content-center align-items-center">
            <button className='btn btn-black text-white'>CONTACT ME</button>
        </div>
        <div>
        <i class="fa-brands fa-linkedin px-3"></i>
        <i class="fa-brands fa-facebook-f px-3"></i>
        <i class="fa-brands fa-twitter px-3"></i>
        <p>Copyright &copy; 2019 KR</p>
        </div>
    </div>
  )
}
