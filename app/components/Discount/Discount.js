import React from 'react';
import { Text, Image, View } from 'react-native'

export default class Discount extends React.Component {
  formatPrice(price) {
    return price && price.toFixed(2)
  }

  render() {
    const oldPrice = this.formatPrice(this.props.oldPrice)
    const newPrice = this.formatPrice(this.props.newPrice)
    const shownOnMobileLine = 1 / this.props.width

    return (
      <View>
        <Image
          source={{uri: this.props.imageUrl}}
          style={{width: 100, height: 100}} />
        <Text>{this.props.name}: {oldPrice} -> {newPrice}</Text>
      </View>
    )
  }
}
