const ImgHoverEffect = ({ isHovered, img1, img2, model, n_img }) => {

  return (
    <>
      {n_img > 1 ? (
        <img src={isHovered ? img2 : img1} className="img_list img-fluid" alt={model} />
      ) : (
        <img src={img1} className="img_list img-fluid" alt={model} />
      )
      }
    </>
  )
}

export default ImgHoverEffect