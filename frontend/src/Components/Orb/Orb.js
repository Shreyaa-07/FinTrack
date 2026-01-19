import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';
import { useGlobalContext } from '../../context/globalContext';

function Orb() {

    const {width, height} = useWindowSize()

    console.log(width, height)

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    const {theme} = useGlobalContext()

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: ${theme === 'light' 
            ? 'linear-gradient(180deg, #F56692 0%, #F2994A 100%)' 
            : 'linear-gradient(180deg, #222260 0%, #F56692 100%)'};
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb