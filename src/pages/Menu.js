import React from 'react'
import '../styles/Menu.css'
import { MenuList } from '../pages/MenuList'
import MenuItem from '../Components/MenuItem'

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, Key) => {
          return (
          <MenuItem 
            key={menuItem.name}
            image={menuItem.image} 
            price={menuItem.price} 
            name={menuItem.name}
          /> 
          )
        })}
      </div>
    </div>
  )
}

export default Menu
