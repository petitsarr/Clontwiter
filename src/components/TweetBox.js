import React,{Component} from 'react';


class TweetBox extends Component{
    state={
        value:''
    }
handleFocus=(({type})=>{
    /*
if(type==='focus'){
    this._textarea.placeholder=''
}
else{
    this._textarea.placeholder=' Veuillez Saisir Votre Tweet Svp'
}
*/

this._textarea.placeholder=type==='focus'?'':'Veuillez Saisir Votre Tweet Svp'

})



// ceci manipule le changememmnt de mon état lorsque j'écris à l'interieur de mon textarea il change mon état
    handleChange=(event)=>{
        // recuperation du texte que j'ai saisi
        const v= event.target.value;
        // changement de mon état
        this.setState({
            value:v
        })
    }
    // ceci est pour la soumission de mon button tweet lorsque je clique sur le button tweet
handleSubmit=()=>{
    // je récupére le texte de mon état cad la valeur actuelle
    const value=this.state.value;

// const publish=this.props.publish ou
const{publish}=this.props;

    // je teste si ce texte est vide ou si le nombre de caractére du texte dépasse 140
    if(value.length>0 && value.length<=140){
        // on va publier
        // je renvoi la valeur qui est dans le textarea au composant Parent Home pour qu'on puisse l'ajoute dans le tweet

       publish(value); 
       
        // mis a jour à vide de mon textarea pour pouvoir reécrire du texte à l'intérieur(on remet à zero du champ)
        this.setState({
            value:''
        })

    }
}


    render(){
        return(
<div className="tweetbox">
<textarea  rows={7}
 cols={40}
  placeholder=" Veuillez Saisir Votre Tweet Svp" 
  value={this.state.value} onChange={this.handleChange} 
   className={this.state.value>140 && 'alert'}
   ref={(t)=>this._textarea=t}
//  on accede à son placeholder dans la mesure ou on sur un evenement focus(lorqu'on clik sur le champ à l'interieur de mon textarea)
onFocus={this.handleFocus}
// le placeholder reapparait lorsqu'on es plus focus  
onBlur={this.handleFocus}

    />
<div className='action'>
<span className="count">
 {140-this.state.value.length}
</span>

<button type="button" 
disabled={ !this.state.value.length || this.state.value.length > 140}
 onClick= {this.handleSubmit}
 > 
Ajouter Tweet 
</button>
</div>


</div>
        );
    }
}
export default TweetBox;