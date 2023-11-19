import React, { useState } from "react";
import { menuItems } from "../../utils/menuItems";
import styled from 'styled-components'
import { dark ,light} from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function Navigation({active,setActive,toggleTheme,isDarkTheme}){
    const [themeIcon, setThemeIcon] = useState(dark);
    const [borderColor, setBorderColor] = useState('#333');
    const navigate = useNavigate();
    const toast = useToast();

    const logoutHandler = () => {
        localStorage.removeItem ("userInfo");
        toast({
            title: "Logged Out Sucessfully",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
       navigate('/Login');


    };
    
    const handleToggleTheme = () => {
        // Toggle the theme
        // setThemeIcon((prevIcon) => (prevIcon === dark ? light : dark)); // Update the icon dynamically
        setThemeIcon((prevIcon) => (prevIcon === dark ? light : dark))
        setBorderColor((prevColor) => (prevColor === '#333' ? '#fff' : '#333'));
        toggleTheme();
    };
    return (
        <NavStyled isDarkTheme={isDarkTheme} borderColor={borderColor}>
            
            <ul className="menu-items">
            <button onClick={handleToggleTheme }>{themeIcon}<span></span><span></span>Toggle</button>
                {menuItems.map((item)=>{
                    return <li
                        key={item.id}
                        onClick={()=>{
                            setActive(item.id)
                        }}
                        className={active===item.id ? 'active':''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
                <button onClick={logoutHandler} style={{ color: "#FF0000" }}>
                    <span>
                        <i className="fa-solid fa-arrow-right-from-bracket fa-beat" style={{ color: '#FF0000' }}></i>
                    </span>
                    <span></span>
                    Logout
                </button>

            </ul>
            
            {/* <div>

            </div> */}
        </NavStyled>
    )
}

const NavStyled=styled.nav`
    padding:2rem 1.5 rem;
    width:274px;
    height:100%;
    background:rgba(252,246,249,0.78);
    border: 3px solid ${(props) => props.borderColor};
    backdrop-filter:blur(4.5px);
    border-radius:32px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:2rem;
    
    .menu-items{
        margin-top:60px;
        flex:1;
        display:flex;
        flex-direction:column;
        // border:solid;
        
        
        li{
            display:grid;
            grid-template-columns:40px auto;
            align-items:center;
            margin:0.6rem 0;
            font-weight:500;
            cursor:pointer;
            transition:all .4s ease-in-out;
            color:rgba(34,34,96,.6);
            padding-left:1rem;
            position:relative;
            i{
                color:rgba(34,36,96,0.6);
                font-size:1.4 rem;
                transition:all .4s ease-in-out;
            }
        }
        button{
           align-item:left;
           margin-left:-150px;
           font-weight:bold;
        }
    }
    .active{
        color:rgba(34,34,96,1)!important;
        i{
            color:rgba(34,34,96,1)!important;
        }
        &::before{
            content:"";
            position:absolute;
            left:0;
            right:0;
            width:4px;
            height:20px;
            background:#222260;
            border-radius:0 10px 10px 0;
        }
    }

`
const LogoutButton = styled.button`
    position: absolute;
    bottom:20px;
    right:20px;
    padding:10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
export default Navigation














// import React from "react";
// import { useThemeContext } from "../../context/ThemeContext"; // Import the theme context
// import { menuItems } from "../../utils/menuItems";
// import styled from 'styled-components'

// function Navigation({ active, setActive }) {
//   const { isDarkTheme, toggleTheme } = useThemeContext(); // Access the theme state and toggle function

//   return (
//     <NavStyled>
//       <button onClick={toggleTheme}>
//         {isDarkTheme ? "Light Mode" : "Dark Mode"}
//       </button>

//       <ul className="menu-items">
//         {menuItems.map((item) => (
//           <li
//             key={item.id}
//             onClick={() => {
//               setActive(item.id);
//             }}
//             className={active === item.id ? "active" : ""}
//           >
//             {item.icon}
//             <span style={{ color: isDarkTheme ? "#fff" : "rgba(34, 34, 96, .6)" }}>
//               {item.title}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </NavStyled>
//   );
// }

// const NavStyled = styled.nav`
//   padding: 2rem 1.5rem;
//   width: 274px;
//   height: 100%;
//   background: rgba(252, 246, 249, 0.78);
//   border: 3px solid #FFFFFF;
//   backdrop-filter: blur(4.5px);
//   border-radius: 32px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 2rem;

//   button {
//     background: none;
//     border: none;
//     cursor: pointer;
//     color: ${(props) => (props.isDarkTheme ? "#fff" : "rgba(34, 34, 96, .6)")};
//   }

//   .menu-items {
//     margin-top: 60px;
//     flex: 1;
//     display: flex;
//     flex-direction: column;

//     li {
//       display: grid;
//       grid-template-columns: 40px auto;
//       align-items: center;
//       margin: 0.6rem 0;
//       font-weight: 500;
//       cursor: pointer;
//       transition: all 0.4s ease-in-out;
//       color: ${(props) => (props.isDarkTheme ? "#fff" : "rgba(34, 34, 96, .6)")};
//       padding-left: 1rem;
//       position: relative;

//       i {
//         color: ${(props) => (props.isDarkTheme ? "#fff" : "rgba(34, 36, 96, 0.6)")};
//         font-size: 1.4rem;
//         transition: all 0.4s ease-in-out;
//       }
//     }
//   }

//   .active {
//     color: ${(props) => (props.isDarkTheme ? "#fff" : "rgba(34, 34, 96, 1)")} !important;
//     i {
//       color: ${(props) => (props.isDarkTheme ? "#fff" : "rgba(34, 34, 96, 1)")} !important;
//     }
//     &::before {
//       content: "";
//       position: absolute;
//       left: 0;
//       right: 0;
//       width: 4px;
//       height: 20px;
//       background: ${(props) => (props.isDarkTheme ? "#fff" : "#222260")};
//       border-radius: 0 10px 10px 0;
//     }
//   }
// }
// `
// export default Navigation