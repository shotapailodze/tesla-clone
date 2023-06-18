import React, {useState} from 'react'
import styled from 'styled-components'



function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <a>
            <img src='/public/images/logo.svg'/>
        </a>
        <Menu>
            <a href='#'>Model S</a>
            <a href='#'>Model 3</a>
            <a href='#'>Model X</a>
            <a href='#'>Model Y</a>
        </Menu>
        <RightMenu>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true) }>
                <a href='#'>Menu</a>
            </CustomMenu>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CustomClose onClick={() => setBurgerStatus(false)}>X</CustomClose>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-In</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadster</a></li>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Existing Inventory</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 90px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    @media(min-width: 768px) {
        display: none;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
    
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);

        a {
            font-weight: 600;
        }
    }
`

const CustomClose = styled.div`
    text-align: end;
    cursor: pointer;
    font-weight: 600;
`