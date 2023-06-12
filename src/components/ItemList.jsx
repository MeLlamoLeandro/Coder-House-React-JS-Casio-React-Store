import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col d-flex flex-wrap gap-3 justify-content-center m-3 p-3">
                    {products.map(prod => <Item {...prod} key={prod.id} />)}
                </div>
            </div>
        </div>
    )
}

export default ItemList
