import React from "react";
import { menuItems } from "../../utils/menuItems";
import styled from 'styled-components'
function Navigation({active,setActive}){
    return (
        <NavStyled>
            
            <ul className="menu-items">
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
    border:3px solid #FFFFFF;
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