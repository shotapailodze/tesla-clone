import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {

    const ScrollToNextSection = (event) => {
        console.log(window)
        const innerHeight = window.innerHeight
        const scrollPos = window.scrollY
        const currentSection = event.target.closest('div.SectionWrap')
        const nextSection = currentSection.nextSibling

        console.log(nextSection)
        
        window.scrollTo({
            // top nextSection.getBoundingClientRect().top,
            // top: Math.ceil(scrollPos + innerHeight),
            animation: 'smooth',
        })
    }

  return (
    <Wrap className='SectionWrap' bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    { rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    } 
                </ButtonGroup>
            </Fade>
            <DownArrow 
                onClick={ScrollToNextSection}
                src='../../public/images/down-arrow.svg'/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment:fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/public/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
    
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`