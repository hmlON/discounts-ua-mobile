import React from 'react'
import { Text, View } from 'react-native'
import Discount from '../Discount/Discount'

export default class DiscountType extends React.Component {
  formatDate(date) {
    return (new Date(date)).toLocaleDateString()
  }

  renderDiscount(discount) {
    return (
      <Discount name={discount.name}
                oldPrice={discount.price_old}
                newPrice={discount.price_new}
                imageUrl={discount.img_url}
                width={discount.width_on_mobile}
                key={discount.id} />
    )
  }

  render() {
    const startDate = this.formatDate(this.props.startDate)
    const endDate = this.formatDate(this.props.endDate)
    const lastUpdatedAt = this.formatDate(this.props.lastUpdatedAt)
    const periodText = this.props.periodic ? `from ${startDate} to ${endDate}` : `last updated ${lastUpdatedAt}`

    return (
      <View>
        <Text>{this.props.name}</Text>
        {this.props.discounts.map(this.renderDiscount)}
      </View>
        // <FlatList
          // data={this.props.discounts}
          // renderItem={({discount}) => <Text>{discount.name}</Text>}
        // />
    )
  }
}
