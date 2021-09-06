import {Link} from 'react-router-dom';
import './Products.css';
function Product() {
    return (
        <div className='product'>
            <img src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt='product name'/>

            <div className='product__info'>
                <p className='info__name'>Product 1</p>
                <p className='info__description'>
                    lorem nfknfnfffn fejkmifhuff endb efbhb
                </p>
                <p className='info__price'>$45.99</p>
                <Link to={`/product/${4444}`} className='info__button'>
                view
                </Link>
            </div>

            
        </div>
    );
}

export default Product;