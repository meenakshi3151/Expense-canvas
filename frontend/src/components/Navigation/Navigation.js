import React from "react";
import { menuItems } from "../../utils/menuItems";
import styled from 'styled-components'
function Navigation({active,setActive}){
    return (
        <NavStyled>
            {/* <div className="user-con">

            </div> */}
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
                        <sapn>{item.title}</sapn>
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
        fleax:1;
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
        color:rgba(34,34,96,1);
        i{
            color:rgba(34,34,96,1);
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