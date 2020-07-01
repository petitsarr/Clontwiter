import React,{Component} from 'react'
// Apres installation fontawesome et importation dans mon fichier index.html,je l'importe ici(npm install --save react-fontawesome)
import FontAwesome from 'react-fontawesome';
import  moment from 'moment'

class Tweet extends Component{
// cet state permet de dire si oui ou non si ma souris est dans la poubelle
state={
isFocus:false
}

// event.type correspond au type de l'evenement
handleFocus=({type})=>{

    this.setState({isFocus : type==='mouseenter'})
};
// Mespropriétes par deafaut au cas ou on oublie de donné la date du tweet
static defaultProps={
date:moment().format('DD/MM/YYYY')
}






    render(){
        const{avatar,fullname,content,username,date,index,remove}=this.props
        /* const avatar=this.props.avatar
        const fullname=this.props.fullname
        const content= this.props.content
        const username= this.props.username
        const date= this.props.date
        const index= this.props .index
        remove=this.props.remove
        */
       // const isFocus=this.state.isFocus
        const{isFocus}=this.state;
        
        // si username===JO et name=isFocus alors affiche trash et sinon trash-o
        // onMouseEnter veut dire que la souris est entré dans mon icone poubelle
        // onMouseLeave veut dire que la souris est sortie de la poubelle 
        return(
            <div className="tweet">
        <div className="avatar">
        <img src={avatar} role="presentation" alt="mon logo avatar"/>
        </div>
        <div className="data">
        <div className="infos">
        <strong>{fullname}</strong>
        <small className="gray">@{username}</small>
        <small className="gray date">{date}</small>
    
        {username==='JO' && 
        (<FontAwesome 
            className='gray trash'
             name={isFocus ? 'trash' : 'trash-o'}
             onMouseEnter={this.handleFocus}
             onMouseLeave={this.handleFocus}
             onClick={()=>remove(index)}
             />)}


        
        </div>
        <div className="content">
        <p> {content} </p>
        </div>
        </div>
        
        </div>
        );
    }
}



    

export default Tweet;