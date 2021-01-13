import React, { Component } from 'react';
import Square from './Square';


export default class TictacBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            array: Array(16).fill(null),
            switch: true,
        };
    }

    findWinner(array) {
        const winnerGroup = [
            [0,1,2],
            [1,2,3],
            [4,5,6],
            [5,6,7],
            [8,9,10],
            [9,10,11],
            [12,13,14],
            [13,14,15]
        ];
        for(let i=0; i<winnerGroup.length; i++){
            const [x, y, z] = winnerGroup[i];
            if(array[x] && array[x]===array[y] && array[x]===array[z]){
                return array[x];
            }
        }
        return null; 
    }

    handleClick(i){
        const array = this.state.array.slice();
        if(this.findWinner(array) || array[i]){
            return;
        }
        array[i] = this.state.switch ? 'X' : 'O';
        this.setState({array: array,
        switch: !this.state.switch});
    }

    handleReset(){
        this.setState({array: Array(9).fill(null),
            switch: true,});
    }

    renderSquare(i) {
        return <Square value={this.state.array[i]} onClick={() => this.handleClick(i)} />;
      }

    render() {
        let status;
        if(this.findWinner(this.state.array)){
            status = "THE WINNER IS "+ this.findWinner(this.state.array);
        }else{
             status = "The next player is "+ (this.state.switch ? 'X' : 'O');
        }
        
        return (
            <div>
                <div className="status">{status}</div>
                <div className="box">   
                    <div>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                        {this.renderSquare(3)}
                    </div>
                    <div>
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                    </div>
                    <div>
                        {this.renderSquare(8)}
                        {this.renderSquare(9)}
                        {this.renderSquare(10)}
                        {this.renderSquare(11)}
                    </div>
                    <div>
                        {this.renderSquare(12)}
                        {this.renderSquare(13)}
                        {this.renderSquare(14)}
                        {this.renderSquare(15)}
                    </div>
                </div>
                <div>
                    <button className="reset"
                    onClick={() => this.handleReset()}
                    >
                        Restart
                    </button>
                </div>
            </div>
        )
    }
}