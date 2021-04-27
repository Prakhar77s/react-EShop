import {Fragment} from 'react';
import productsImage from '../../assets/products.png'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React E-Shop</h1>
            <HeaderCartButton />
        </header>
        <div className={classes.mainImage}>
            <img src= {productsImage} alt = 'All kind of products' />
        </div>
    </Fragment>
};

export default Header;