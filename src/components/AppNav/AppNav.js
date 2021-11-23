function AppNav(props) {

  return (
    <nav>
    {
      props.navItems.map((navItem) =>
        <a href="#" onClick={ () => props.handleNavClick(navItem.value)} >
          { navItem.label } |
        </a>
      )
    }
    </nav>
  )
}

export default AppNav;


// // class-based component equivalent code:
// import React, { Component } from 'react';

// class AppNav extends Component {
  
//   render() {
//     return (
//       <nav>
//       {
//         this.props.navItems.map((navItem) =>
//           <a href="#" onClick={ () => this.props.handleNavClick(navItem.value)} >
//             { navItem.label } |
//           </a>
//         )
//       }
//       </nav>
//     )
//   }
// }
