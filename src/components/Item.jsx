import { useState } from 'react';
import ImgHoverEffect from './ImgHoverEffect';
import { Link } from 'react-router-dom';

const Item = ({ id, brand, model, img1, img2, price, n_img }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<div className="fullCard  col-md-3 mt-2">
			<div className="card cardItemStyle rounded-0">
				<Link to={`/item/${id}`} className='text-decoration-none'>
					<div className="img_list_container background-primary d-flex justify-content-center align-items-center" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
						<ImgHoverEffect isHovered={isHovered} img1={img1} img2={img2} model={model} n_img={n_img} />
					</div>
					<div className="card-body text-start pb-0">
						<div className='mb-4'>
							<h6 className="card-subtitle mb-2 text-body-secondary text-dark">{brand}</h6>
							<h5 className="card-title text-dark">{model}</h5>
						</div>
						<div className='d-flex justify-content-start align-items-end m-0'>
							<p className="card-text text-dark  fs-6 priceItem"><span>${price}</span></p>
						</div>
					</div>
				</Link>
			</div>
			<div className="d-grid mt-2">
				<Link to={`/item/${id}`} className="btn btn-dark rounded-0 btn-buyNow background-secondary">VIEW PRODUCT</Link>
			</div>
		</div >
	)
}

export default Item