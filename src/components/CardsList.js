import React, { Component } from 'react';
import { list } from '../list'
import Card from './Card'

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    }
  }
  render() {
    const cardsArray = this.state.list;
    const cardsList = cardsArray.map((ele, index) => {
      return <Card key={index} from={ele[0]} to={ele[1]} />
    })
    console.log(this.state.list)
    return cardsList
  }
}

export default CardsList