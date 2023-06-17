import { Link } from 'react-router-dom';
import { ReactComponent as IconArrow } from "./images/banner-arrow.svg";

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/newband-gbdh2000-1920x612.avif" className="d-block w-100" alt="newband-gbdh2000" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="col-3 d-flex justify-content-start ">
                                <div className="text-start">
                                    <h4 className='fs-2'><b>G-SHOCK</b></h4>
                                    <p><i><b>MOVE</b></i></p>
                                    <h2 className="fs-1"><b><span>GBDH2000</span></b></h2><br />
                                    <div className="d-grid mt-2">
                                        <Link to={`/item/S3cAtgwq9arTxwX5lHQx`} className="btn btn-outline-dark btn-banner__white text-white border-1 rounded-0 ">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/gmwb2100gd-1920x612.avif" className="d-block w-100" alt="gmwb2100gd" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="col-3 d-flex justify-content-start ">
                                <div className="text-start">
                                    <h4 className='fs-2'><b>G-SHOCK</b></h4>
                                    <p><b>FULL METAL</b></p>
                                    <h2 className="fs-1"><b><span>GMB2100</span></b></h2><br />
                                    <div className="d-grid mt-2">
                                        <Link to={`/item/aZMtO6STfEJre3E7jlHn`} className="btn btn-outline-dark btn-banner__white text-white border-1 rounded-0 ">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/bgd565-1920x612.avif" className="d-block w-100" alt="bgd565-1920x612" />
                        <div className="carousel-caption d-none d-md-block text-black">
                            <div className="col-3 d-flex justify-content-start">
                                <div className="text-start">
                                    <h4 className='fs-2'><b>BABY-G</b></h4>
                                    <p><b>Be You. Be me</b></p>
                                    <h2 className="fs-1"><b><span>BGD565SC SERIES</span></b></h2><br />
                                    <div className="d-grid mt-2">
                                        <Link to={`/item/tKCHf6lrHozROev5JBH2`} className="btn btn-outline-dark btn-banner__black  border-1 rounded-0 ">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/privia-px-s7000hm-1920x612.avif" className="d-block w-100" alt="privia-px-s7000hm" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="col-6 d-flex justify-content-start">
                                <div className="text-start pt-3">
                                    <h4 className='fs-2'><b>PRIVIA</b></h4>
                                    <span className='fs-4'><b>EXPERIENCE<br />
                                        BREATHTAKING STYLE,<br />
                                        SOUND AND TOUCH<br />
                                    </b></span>
                                    <span className='fs-6'>INTRODUCING THE PRIVIA<br />
                                        PX-S7000, PX-S6000 AND&nbsp;PX-S5000</span>
                                <div className="d-grid mt-2">
                                    <Link to={`/item/vVIqoZqT8dtyMnv2oWFq`} className="btn btn-outline-dark btn-banner__white text-white border-1 rounded-0 ">LEARN MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/dwh5600-cai-1920x612.avif" className="d-block w-100" alt="dwh5600-cai" />
                    <div className="carousel-caption d-none d-md-block text-black">
                        <div className="col-3 d-flex justify-content-start">
                            <div className="text-start">
                                <h4 className='fs-2'><b>G-SHOCK</b></h4>
                                <p><b>MOVE</b></p>
                                <h2 className="fs-1"><b><span>DWH5600</span></b></h2><br />
                                <div className="d-grid mt-2">
                                    <Link to={`/item/vAfTBNrslCOX0IedKdRJ`} className="btn btn-outline-dark btn-banner__black  border-1 rounded-0 ">LEARN MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./img/transparentgold-1920x612.avif" className="d-block w-100" alt="transparentgold" />
                    <div className="carousel-caption d-none d-md-block  text-black">
                        <div className="col-3 d-flex justify-content-start">
                            <div className="text-start">
                                <h4 className='fs-2'><b>G-SHOCK</b></h4>
                                <br />
                                <h4 ><b><span>Transparent Gold Coleection</span></b></h4><br />
                                <div className="d-grid mt-2">
                                    <Link to={`/item/JSUSgSWLv6ubZCK2OVS0`} className="btn btn-outline-dark btn-banner__black  border-1 rounded-0 ">LEARN MORE</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span className="carousel-control-prev-icon" aria-hidden="true"><IconArrow/></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"><IconArrow/></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div >
    )
}

export default Banner;