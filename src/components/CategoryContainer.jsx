import { Link } from 'react-router-dom'


const CategoryContainer = () => {
    
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col text-center"><h2 className='m-2'>Shop by Category</h2></div>
            </div>
            <div className="row">
                <div className="col d-flex flex-wrap gap-3 justify-content-center m-3 p-3">

                    <div className="card col-md-2 categoryCard border-0">
                        <Link to="/category/gshock" className='text-decoration-none'>
                            <img src="./img/categories/gshock.jpeg" alt="G-SHOCK" className='img-fluid img_cat' />
                            <div className="card-body text-center align-items-end">
                                <h5 className="card-title mb-2  text-dark">G-SCHOK</h5>
                                <p className="card-subtitle text-body-secondary text-dark">Absolute Toughness</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card col-md-2 categoryCard border-0">
                        <Link to="/category/watches" className='text-decoration-none'>
                            <img src="./img/categories/watches.jpeg" alt="ALL WATCHES" className='img-fluid img_cat' />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2 text-dark">CASIO WATCHES</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="card col-md-2 categoryCard border-0">
                        <Link to="/category/music" className='text-decoration-none'>
                            <img src="./img/categories/music.jpeg" alt="ELECTRONIC MUSICAL INSTRUMENTS" className='img-fluid img_cat' />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2 text-dark">ELECTRONIC MUSICAL INSTRUMENTS</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="card col-md-2 categoryCard border-0">
                        <Link to="/category/calculators" className='text-decoration-none'>
                            <img src="./img/categories/calculators.jpeg" alt="CALCULATORS" className='img-fluid img_cat' />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2  text-dark">CALCULATORS</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="card col-md-2 categoryCard border-0">
                        <Link to="/category/medical" className='text-decoration-none'>
                            <img src="./img/categories/medical.jpeg" alt="medical" className='img-fluid img_cat' />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-2  text-dark">MEDICAL DEVICES</h5>
                            </div>
                        </Link>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default CategoryContainer