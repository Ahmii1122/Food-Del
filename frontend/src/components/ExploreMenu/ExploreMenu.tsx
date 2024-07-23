import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
interface Props{
    category:string;
    setcategory: (prev: any)=> void;
}
const ExploreMenu = ({category,setcategory}:Props) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='Explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sit nostrum deserunt, cupiditate incidunt dolor veritatis perferendis consequuntur aspernatur facere laboriosam culpa hic fugit doloremque! Error sunt similique fugit ratione?</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory((prev: string) => prev ===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
            <hr />
    </div>
  )
}

export default ExploreMenu