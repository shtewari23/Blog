import React from 'react';
import './App.css';
class Article extends React.Component {
  render() {
    
   
    return (
      
      <div className='article'>
        
        <div className='image1'>
          <img className='image2' src={this.props.image}></img> 
          <p className='username'>Author Name: {this.props.name} </p>
          
 
        </div>
      </div>
          
    );
  }
}
export default Article;
