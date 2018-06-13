import React from 'react'
import { Text, ScrollView } from 'react-native'
import DiscountType from '../DiscountType/DiscountType'
import API from '../../utils/api'

export default class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.fetchShop()
  }

  fetchShop() {
    const path = 'silpo'
    // const path = this.props.match.params.shop

    API.shop(path)
      .then(response => {
        if (response.started_parsing) {
          setTimeout(()=>{ this.fetchShop() }, 1000)
        }
        return response
      })
      .then(response => this.setState({started_parsing: false, ...response}))
  }

  renderDiscountType(discountType) {
    return (
      // <Text>{discountType.name}</Text>
      <DiscountType name={discountType.name}
                    startDate={discountType.start_date}
                    endDate={discountType.end_date}
                    periodic={discountType.periodic}
                    lastUpdatedAt={discountType.last_updated_at}
                    discounts={discountType.discounts}
                    key={discountType.id} />
    )
  }

  render() {
    if (this.state.started_parsing) return <Text>Parsing discounts...</Text>
    if (!this.state.discount_types) return <Text>Loading...</Text>

    return (
      <ScrollView>
        {this.state.discount_types.map(this.renderDiscountType)}
      </ScrollView>
    )
  }
}
