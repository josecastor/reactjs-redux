import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

// import { View } from 'react-native';

import { ProductList } from './styles';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-under-armour-micro-g-aurora-masculino/58/B78-1713-058/B78-1713-058_zoom2.jpg"
            alt="Tênis"
          />
          <strong>Tênis massa</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-under-armour-micro-g-aurora-masculino/58/B78-1713-058/B78-1713-058_zoom2.jpg"
            alt="Tênis"
          />
          <strong>Tênis massa</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-under-armour-micro-g-aurora-masculino/58/B78-1713-058/B78-1713-058_zoom2.jpg"
            alt="Tênis"
          />
          <strong>Tênis massa</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-under-armour-micro-g-aurora-masculino/58/B78-1713-058/B78-1713-058_zoom2.jpg"
            alt="Tênis"
          />
          <strong>Tênis massa</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-under-armour-micro-g-aurora-masculino/58/B78-1713-058/B78-1713-058_zoom2.jpg"
            alt="Tênis"
          />
          <strong>Tênis massa</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
