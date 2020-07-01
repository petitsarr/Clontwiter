// C'est cet composant home qui appelle les tweets qui se trouve dans mon fichier tweets.js



import React,{Component} from 'react';
import Tweet from '../components/Tweet'
import Tweets from '../constants/Tweets'
import TweetBox from '../components/TweetBox'
// j'ai installe ce dependance pour qaund je publie un nouveau tweet
import moment from 'moment'


/*Tweets.map permet de parcourir mon tableau d'objet de Tweets qui se trouve dans Tweets.js et recupere chaque objet de
 mon tableau avec tweet et son index avec index ce qui donne Tweets.map(tweet,index)et passe chaque objet à mon composant Tweet

 */

class Home extends Component{

    /* Etat de mon composant
    Tweets recoit tous mes Teewts que j'ai dans mon fichier Tweets.js
*/
/*
state={
    Tweets
} 
ou
*/
state={
Tweets:Tweets

}
// La methode qui permet de publier un tweet ,je vais envoyé cette methode dns les props de ma TweetBoxpour que quand je clique sur le bouton elle puisse utilise ma methode publish
publish=(tweet)=>{
    // je modifie les tweets qui sont dans mon state pour rajouter le petit tweet
    const Tweets=this.state.Tweets;
this.setState({
    //le tableau des Tweets plus un nouveau Tweet
    Tweets:[
        {
           avatar:' https://pbs.twimg.com/media/DSZE8UzXkAARDYn.jpg',
            username:'JO',
            fullname:'JO SARR',
            // ceci est le contenu que j'ai saisi dans mon textarea
            content: tweet,
            date:moment().format('DD/MM/YYYY')
            
        },
        
        ...Tweets
    ],

})
    
    
  
};
// Cette methode permet de supprimer un tweet à travers son index
// la methode filter va parcourir tweeet par tweet avec un index i et renvoi systématiquemnt ts ce qui est différent de index
// ceci dit dés qu'il trouve index il va pas le renvoye
remove=(index)=>{
    const Tweets=this.state.Tweets;

    this.setState(
        {
            Tweets:Tweets.filter((Tweet,i)=> i!==index
            )
               

        }
    )

}





render(){
    // je récupere mon état avec const Tweets
    // const {Tweets}=this.state ou
    const Tweets= this.state.Tweets;
    return(
        <div className="homepage">
        <div className="tweets"> 
        
        <TweetBox publish={this.publish}/>
        {Tweets.map((tweet,index)=>(
        
        // passage des propriétes avatar,fullname,content..... à mon composant Tweet (Tweet.js) qui affiche mon avatar,image...ect.... 
           <Tweet key={index} 
        //    l'index me permet de supprimer un tweet
           index={index}
           remove={this.remove}
           avatar={ tweet.avatar}
           fullname={tweet.fullname}  
           content={tweet.content} 
           username= {tweet.username}
            date= {tweet.date} 
            />
        
        ))}
        
        </div>
        </div>
        
        
            );
}



}

export default Home;