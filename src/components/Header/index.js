import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

// import { View } from 'react-native';

import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="Rocketseat" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>3 itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container>
    );
  }
}
