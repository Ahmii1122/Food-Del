import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
    const[category,setcategory]=useState('All')
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setcategory={setcategory}/>
        <FoodDisplay Category={category} />
    </div>
  )
}

export default Home