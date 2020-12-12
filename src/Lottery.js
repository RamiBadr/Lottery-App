import { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';


class Lottery extends Component {
    static defaultProps = {
        maxNum: 40,
        title: 'Lotto',
        numBalls: 6
    };
    
    constructor(props) {
        super(props);
        this.randoNum = this.randoNum.bind(this);
        this.state = {
            nums: Array.from({length: this.props.numBalls})
        }
    }

    randoNum() {
        this.setState(
        pervState => ({nums: pervState.nums.map(() =>  Math.floor(Math.random() * this.props.maxNum) + 1)})
        );
    }

    render() {
        
        return (
            <div className='lottery'>
                <h1 className='lotteryTitle'>{this.props.title}</h1>
                <div className="lotteryBalls">
                    {this.state.nums.map(num => <LottoBall num={num} />)}
                </div>
                <button onClick={this.randoNum}>Generate</button>
            </div>
            
        );
    }
}

export default Lottery;
