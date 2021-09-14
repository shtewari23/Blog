import React from 'react';
import './App.css';
class Article extends React.Component {
  render() {
    return (
      
      <div className='article'>
        <p className='username'><img className='image' src={this.props.image}></img> {this.props.name} </p>
      </div>
          
    );
  }
}
export default Article;
