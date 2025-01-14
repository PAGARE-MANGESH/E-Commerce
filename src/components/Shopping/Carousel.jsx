

import React from 'react'

import watch1 from '../../assets/banner1.png';
import watch2 from '../../assets/banner2.png';
import watch3 from '../../assets/banner3.png';

function Carousel() {
    return (
        <div id="carouselExampleControls" className=" carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={watch1} className="w-full h-64 d-block object-fit " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={watch2} className="w-full h-64 d-block object-fit " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={watch3} className="w-full h-64 d-block object-fit " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel


