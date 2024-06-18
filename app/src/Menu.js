import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <div>
                <Link to='/' style={{marginRight:'10px'}}>Home</Link>
                <Link to='/product'>Product</Link>
            </div>
        </>
    )
}

export default Menu;