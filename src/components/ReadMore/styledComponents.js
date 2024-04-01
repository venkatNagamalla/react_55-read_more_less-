// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  height: 90%;
  width: 80%;
  box-shadow: 2px 0px 15px 3px #0002;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 35%;
    box-shadow: none;
  }
`

export const ReactHooksHeading = styled.h1`
  color: #1e293b;
  font-size: 25px;
  text-align: center;
  font-family: 'Roboto';
`
export const ReactText = styled.p`
  color: #334155;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
`

export const Container = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 3px;
`

export const Description = styled.p`
  color: #334155;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  padding: 10px 0px 10px 0px;
`
export const Button = styled.button`
  height: 35px;
  width: 90px;
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
