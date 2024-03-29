import React, { Component } from 'react'

export class Menu extends Component {
    handleClick = (e) => {
        this.props.selectLevel(e.target.innerText.toUpperCase());
    }
    render() {
        let levelTxts = ["SuperEasy", "Easy", "Medium", "Hard"];
        let dom = levelTxts.map((lv,idx) => (<button onClick={this.handleClick} key={idx}> {lv} </button>))
        return (
            <div className = "menu">
                {dom}
            </div>
        )
    }
}

export default Menu
