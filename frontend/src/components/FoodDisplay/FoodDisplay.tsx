import { useContext } from "react"
import "./FoodDisplay.css"
import { StoreContext } from "../../Context/StoreContext"
import Fooditem from "../FoodItem/Fooditem"
interface Props {
    Category: string;
}

const FoodDisplay = ({ Category }: Props) => {
    const context = useContext(StoreContext);

    // Ensure context is not undefined
    if (!context) {
        return <div>Error: Store context not available.</div>;
    }

    const { food_list } = context;

  return (
    <div className="food-display" id="fooddisplay" >
        <h2>Top Dishes Near you</h2>
        <div className="food-display-list">
            {food_list.map((item)=>{
                if(Category==='All' || Category ===item.category){
                return <Fooditem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image ={item.image} />
                }
                
            })}
        </div>

    </div>
  )
}

export default FoodDisplay