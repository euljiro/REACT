import React from 'react';
import PropTypes from 'prop-types';

class TodaysPlan extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
        };
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount() {
        this.setState(({count}) => ({
            count :count+1
        }));
    }

    render() {
        return (
            <div>
                <span>카운츠: {this.state.count} </span>
                <button onClick={this.increaseCount}>카운트 증가</button>  
            </div>
        );
    }
}

export default TodaysPlan;