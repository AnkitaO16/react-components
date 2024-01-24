// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom
// import styled from 'styled-components';
// import SidebarItems from './SidebarItems';

// const Sidebarparent = styled.div`
//   background: lightgray;
//   width: 250px;
//   height: 100vh;
// `;

// const SidebarItem = styled.div`
//   padding: 16px 24px;
//   transition: all 0.25s ease-in-out;
//   background: ${props => (props.active ? '#b15b00' : '')};
//   margin: 4px 12px;
//   border-radius: 4px;
//   p {
//     color: black;
//     font-weight: bold;
//     text-decoration: none;
//   }
//   &:hover {
//     cursor: pointer;
//   }
//   &:hover:not(:first-child) {
//     background: #c34a36;
//   }
// `;

// const Sidebar = (props, { defaultActive }) => {
//   const location = props.history.location;
//   const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
//   const lastActiveIndex = number(lastActiveString);

//   const [activeIndex, SetActiveIndex] = useState(defaultActive || Number(defaultActive));
  
//   function changeActiveIndex(newIndex) {
//     localStorage.setItem("lastActiveIndex", newIndex)
//     setActiveIndex(newIndex)
// }

// function getPath(path) {
//   if (path.charAt(0) !== "/") {
//       return  "/" + path;
//   }
//   return path;
// }

// useEffect(()=> {
//   //Get an item with the same 'route' as the one provided by react router (the current route)
//   const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
//   changeActiveIndex(activeItem);
// }, [location])


//   return (
//     <>
//       <Sidebarparent>
//         <h1 style={{ color: 'white', textAlign: 'center' }}>SideBar</h1>
//         {SidebarItems.map((item, index) => {
//           return (
//             <Link to={item.route} >
//               <SidebarItem key={item.name} active={index === activeIndex}>
//                 <p>{item.name}</p>
//               </SidebarItem>
//             </Link>
//           );
//         })}
//       </Sidebarparent>
//     </>
//   );
// };

// export default Sidebar;



//2nd time
// import React, {useEffect, useState} from "react";
// import styled from 'styled-components'
// import SidebarItems from "./SidebarItems";
// import {Link} from "react-router-dom";

// function Sidebar(props, {defaultActive,}) {
//     const location = props.history.location;
//     const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
//     const lastActiveIndex = Number(lastActiveIndexString);
//     const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

//     function changeActiveIndex(newIndex) {
//         localStorage.setItem("lastActiveIndex", newIndex)
//         setActiveIndex(newIndex)
//     }

//     function getPath(path) {
//         if (path.charAt(0) !== "/") {
//             return  "/" + path;
//         }
//         return path;
//     }

//     useEffect(()=> {
//         const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
//         changeActiveIndex(activeItem);
//     }, [location])

//     return (
//         <>
//             <SidebarParent>
//                 <div style={{position: 'fixed'}}>
//                     {
//                         SidebarItems.map((item, index)=> {
//                             return (
//                                 <Link to={item.route}>
//                                     <SidebarItem key={item.name}
//                                                  active={index === activeIndex}
//                                     >
//                                         <p>{item.name}</p>
//                                     </SidebarItem>
//                                 </Link>
//                             );
//                         })
//                     }

//                 </div>
//                 <div className="behind-the-scenes"/>
//             </SidebarParent>
//         </>
//     );
// }

// export default Sidebar;

// const SidebarParent = styled.div`
//   background: #cf3d2a;
  
//   a {
//     text-decoration: none;
//   }
  
//   & > div {
//     width: 250px;
//     height: 100vh;
//   }
  
//   .behind-the-scenes {
//     width: 250px;
    
//   }
// `;

// const SidebarItem = styled.div`
//   padding: 16px 24px;
//   transition: all 0.25s ease-in-out;
//   background: ${props => props.active ? "#b15b00" : ""};
//   margin: 4px 12px;
//   border-radius: 4px;

//   p {
//     color: white;
//     font-weight: bold;
//     text-decoration: none;
//   }
  
//   &:hover {
//     cursor:pointer;
//   }
  
//   &:hover:not(:first-child) {
//     background: #c34a36;
//   }
// `;


import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import { Link, useNavigate, useLocation } from "react-router-dom";

const SidebarParent = styled.div`
  background: #cf3d2a;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;

function Sidebar({ defaultActive }) {
  const navigate = useNavigate();
  const location = useLocation();
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(item => getPath(item.route) === getPath(location.pathname));
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <>
      <SidebarParent>
        <div>
          {SidebarItems.map((item, index) => (
            <Link to={item.route} key={item.name}>
              <SidebarItem active={index === activeIndex}>
                <p>{item.name}</p>
              </SidebarItem>
            </Link>
          ))}
        </div>
        <div className="behind-the-scenes" />
      </SidebarParent>
    </>
  );
}

export default Sidebar;
