import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Fooditem.css';
import { StoreContext } from '../../Context/StoreContext';

interface Props {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

const Fooditem = ({ id, name, price, description, image }: Props) => {
    // Ensure the context is available
    const context = useContext(StoreContext);
    
    if (!context) {
        return <div>Error: StoreContext is not available</div>;
    }

    const { cartitems, addtocart, removeformcart } = context;

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt={name} className="food-item-img" />
                {
                    !cartitems[id] ? (
                        <img 
                            className='add' 
                            onClick={() => addtocart(id)} 
                            src={assets.add_icon_white} 
                            alt="Add to cart" 
                        />
                    ) : (
                        <div className='food-item-counter'>
                            <img 
                                onClick={() => removeformcart(id)} 
                                src={assets.remove_icon_red} 
                                alt="Remove from cart" 
                            />
                            <p>{cartitems[id]}</p>
                            <img 
                                onClick={() => addtocart(id)} 
                                src={assets.add_icon_green} 
                                alt="Add more to cart" 
                            />
                        </div>
                    )
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img 
                        src={assets.rating_starts} 
                        alt="Rating stars" 
                    />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
}

export default Fooditem;
