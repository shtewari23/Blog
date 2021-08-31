import React, {Component} from 'react';

class Counter extends Component{
    state={
        count :1
    }
    render (){
        return (
            <React.Fragment>
        <span> {this.C()}</span>
        <button>+</button>
        </React.Fragment>
        );

    }
    C() {
        const {count} =this.state
        return (count == 0 ?'Zero ':count );
            
        
    }

}
export default Counter
