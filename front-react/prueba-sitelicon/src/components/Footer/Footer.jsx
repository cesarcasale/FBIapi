import React from 'react'
import logoSite from '../../assets/logo1.png'
import logoPersonal from '../../assets/logo-nombre.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="container-fluid text-center p-0 m-0">
                    <div class="row d-flex align-items-center">
                        <div class="col">
                            <img className="w-75" src={logoSite} alt="logo-sitelicon" />
                        </div>
                        <div class="col d-flex flex-column align-items-center">
                            <Link className='btn btn-warning mx-2 w-25' to="">Home</Link>
                            <Link className='btn btn-warning mx-2 w-25' to="">About</Link>
                        </div>
                        <div class="col">
                            <img className="w-50 rounded" src={logoPersonal} alt="Cesar Casale" />
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer