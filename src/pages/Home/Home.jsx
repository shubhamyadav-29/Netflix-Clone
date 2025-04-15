import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import  play_icon from '../../assets/play_icon.png'
import  info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import Player from '../Player/Player'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order,a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
           <TitleCards/>
        </div>
      </div>
     
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top pics for you"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home


// import React from 'react';
// import './Home.css';
// import Navbar from '../../components/Navbar/Navbar';
// import hero_banner from '../../assets/hero_banner.jpg';
// import hero_title from '../../assets/hero_title.png';
// import play_icon from '../../assets/play_icon.png';
// import info_icon from '../../assets/info_icon.png';
// import TitleCards from '../../components/TitleCards/TitleCards';
// import Footer from '../../components/Footer/Footer';

// const Home = () => {
//   return (
//     <div className='home'>
//       <Navbar />
//       <div className="hero">
//         <img src={hero_banner} alt="Hero Banner" className='banner-img' />
//         <div className="hero-caption">
//           <img src={hero_title} alt="Hero Title" className='caption-img' />
//           <p>
//             Discovering his ties to a secret ancient order, a young man living in
//             modern Istanbul embarks on a quest to save the city from an immortal enemy.
//           </p>
//           <div className="hero-btns">
//             <button className='btn'><img src={play_icon} alt="Play" />Play</button>
//             <button className='btn dark-btn'><img src={info_icon} alt="More Info" />More Info</button>
//           </div>
//         </div>
//       </div>

//       <div className="more-cards">
//         <TitleCards title="Now Playing" category="now_playing" />
//         <TitleCards title="Blockbuster Movies" category="top_rated" />
//         <TitleCards
//           title="Only on Netflix"
//           apiUrl="https://api.themoviedb.org/3/discover/movie?with_watch_providers=8&watch_region=IN&language=en-US&sort_by=popularity.desc"
//         />
//         <TitleCards title="Upcoming" category="upcoming" />
//         <TitleCards title="Top Picks for You" category="popular" />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

