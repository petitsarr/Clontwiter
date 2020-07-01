import React,{Component, Children} from 'react'
import './App.css';
import Tweets from '../constants/Tweets'
import Tweet from '../components/Tweet'
import Home from './Home';
import TweetBox from '../components/TweetBox'


// le router va chercher Home pour moi directement si je suis sur la bonne route
const App =()=>{
  
        return(
            <main>
    <Home/> 
            </main> 
        );
    
}   
    

export default App;
