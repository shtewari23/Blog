import React, { Component } from 'react';
class Photo extends Component{
    constructor(){
        super();
    
    this.state={
        image:[]
    };
}
componentDidMount(){
fetch(" https://conduit.productionready.io/api/articles")
.then(result=>{
    console.log('working',result);
    if(!result.ok){
        throw Error ("Error");

    }
    return result.json()
    
})
}
render() {
    return(
        <div>
        <p>Photo</p>
    </div>
    )
}

}
export default Photo;
