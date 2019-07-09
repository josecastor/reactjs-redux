import React, { Component } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
// import { View } from 'react-native';

import { Container, ProductTable, Total } from './styles';

export default class Cart extends Component {
  state = {};

  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-under-armour-micro-g-aurora-masculino/58/B78-1713-058/B78-1713-058_zoom2.jpg"
                  alt="Tênis"
                />
              </td>
              <td>
                <strong>Tênis massa</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={2} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$1967,97</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
