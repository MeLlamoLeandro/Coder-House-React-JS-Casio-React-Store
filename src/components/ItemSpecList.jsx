const ItemSpecList = ({ prodDetail }) => {
    /*show images*/
    const imageUrls = [];

    for (let i = 1; i <= prodDetail.n_img; i++) {
        const imageUrl = prodDetail[`img${i}`];
        if (imageUrl) {
            imageUrls.push(imageUrl);
        }
    }

    const images = imageUrls.map((imageUrl, index) => (
        <img src={imageUrl} alt="CASIO REACT STORE" key={index} className={"img_detail_list img-fluid"} />
    ));

    // show specs squares
    const specElements = [];

    for (let i = 1; i <= prodDetail.n_spec; i++) {
        const specImageUrl = prodDetail[`spc_img_${i}`];
        const specText = prodDetail[`spc_txt_${i}`];

        if (specImageUrl) {
            const specElement = (
                <div className="spec-element col d-flex flex-wrap justify-content-center gap-1 m-1 p-1" key={i}>
                    <div className="d-flex flex-column justify-content-between align-items-center background-primary" style={{ maxHeight: "350px" }}>
                        <img src={specImageUrl} alt={specText} className="img_spec_list img-fluid" />
                        <span className="spec-text my-1">{specText}</span>
                    </div>
                </div>
            );
            specElements.push(specElement);
        }
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col d-flex flex-wrap gap-3 justify-content-center m-3 p-3">
                    {images}
                </div>
            </div>
            <div className="row">
                {specElements}
            </div>
        </div>
    );
}

export default ItemSpecList;
