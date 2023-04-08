import React from 'react'
import FakeTube from "../images/logo.png"
import styled from 'styled-components'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #202020;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`
const Wrapper=styled.div`
  padding: 18px 26px;
  
`
const Logo=styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 20px;

`

const Img=styled.img`
  height: 2.5rem;
`
const Item=styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 4px 0px;
`

const Hr=styled.hr`
  margin: 10px 0px;
  border: 0.5px solid #373737;
`
const Login=styled.div`

`
const Button=styled.button`
padding: 5px 15px;
background-color: transparent;
color: #3ea6ff;
border: 1px solid #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={FakeTube}/>
          FakeTube
        </Logo>
        <Item>
          <HomeOutlinedIcon/>
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon/>
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon/>
          Subscription
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryOutlinedIcon/>
          Library
        </Item>
        <Item>
        <HistoryOutlinedIcon/>
          History
        </Item>
        <Hr/>
        <Login>
          Sign In to like videos, comment, and subscribe.
          <Button>SIGN IN</Button>
        </Login>
        <Hr/>
        <Item>
        <LibraryMusicOutlinedIcon/>
          Music
        </Item>
        <Item>
          <SportsBaseballOutlinedIcon/>
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon/>
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon/>
          Movies
        </Item>
        <Item>
        <ArticleOutlinedIcon/>
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon/>
          Live
        </Item>
        <Hr/>

        <Item>
          <SettingsOutlinedIcon/>
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon/>
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon/>
          help
        </Item>
        <Item>
          <LightModeOutlinedIcon/>
          Light Mode
        </Item>
      </Wrapper>
      
    </Container>
  )
}

export default Menu
