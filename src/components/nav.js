import React, { Component } from 'react';
import {Link} from 'react-router-dom'

// class Nav extends Component {
//   render() {
//     const navItem = [{"food": ["fruit", "vegetable"]}];
//     return (
//       <ul>
//         <li><Link to="/product/fruit" >Fruit </Link></li>
//         <li><Link to="/product/vegetable" >Vegetable </Link></li>
//       </ul>
//     )
//   }
// }

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const navItem = [{"food": ["fruit", "vegetable"]},{"home":["desk","chair"]}];
var MenuList = navItem.map((category) => {
  let key = Object.keys(category)[0];
  return(
    <SubMenu key={key} title={<span><Icon type="mail" /><span>{key}</span></span>}>
      {category[key].map((subCate) => {
        return <Menu.Item key={subCate}><Link to={`/product/${key}/${subCate}`}>{subCate}</Link></Menu.Item>
      })}
    </SubMenu>
  )
})

class Nav extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {MenuList}
      </Menu>
    );
  }
}

export default Nav;