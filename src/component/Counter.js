import React , {Component} from 'react';

import '../style/counter.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class Counter extends Component {

    constructor(props){
        super(props);

        this.state= {
            count: props.count,
        }
        this.incrementCount = this.incrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount(){
        this.setState((prevState)=>{
        return  { count: prevState.count+1,}
         } );
    }
    resetCount(){
        this.setState(()=>{
        return  { count: 0,}
         } );
    }
    decrementCount(){
        this.setState((prevState)=>{
        return  { count: prevState.count-1,}
         } );
         
    }

    render(){
        return(
            <div>
            <header id="header">
            My First react app
                </header>
                <div className="counter-container"> 
                     <div className="counter-result">
                     {this.props.count}
                         </div>
                         <div className="counter-buttons">
                         <button className="increment-btn" onClick={this.props.onincrement}>+</button>
                         <button className="reset-btn" onClick={this.props.onReset}>reset</button>
                         <button className="decrement-btn" onClick={this.props.ondecrement}>-</button>
                         </div>
                    </div>
            </div>    
        )
    }
}

const mapStateToProps = (state)=>{
return {
    count:state.count,
}
}

const mapDispatchToProps = (dispatch)=>{
return {
    onincrement: ()=>dispatch({type:'INCREMENT', value:1}),
    ondecrement: ()=>dispatch({type: 'DECREMENT',value:1}),
    onReset: () => dispatch({type:'RESET'}),
}
}

Counter.defaultProps ={
    count:0,
}

Counter.propTypes ={
    count: PropTypes.number,
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);