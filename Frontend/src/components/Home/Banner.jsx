import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.freepik.com/free-photo/community-concept-with-group-people_23-2147993333.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://cdn.prod.website-files.com/5e90f906f70fbb3b0effa52a/63d19756cde80f5277d4af32_blog%20story%20covers%20(1080%20x%20720%20px)%20(1).png"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h2 className='text-center mt-1 text-md text-gray-700 font-merienda'>Moments at BARTA</h2>
        </div>
    );
};

export default Banner;