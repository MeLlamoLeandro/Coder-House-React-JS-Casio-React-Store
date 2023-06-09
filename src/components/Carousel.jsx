const Carousel = () => {
  return (
    <div >
      <div className="container-fluid mb-md-0">
        <div className="row">
          <div className="col header-carousel__items">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active text-center">
            <p>Free Shipping on Watch Orders over $99</p>
          </div>
          <div className="carousel-item text-center">
            <p>Free Shipping on Calculator orders over $25</p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel