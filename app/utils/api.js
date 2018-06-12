class API {
  static shops() {
    return this.getData(`shops`).then(json => json['shops'])
  }

  static shop(path) {
    return this.getData(`shops/${path}`)
  }

  static getData(path) {
    const base_api_url = 'https://discounts-ua.herokuapp.com/api/'
    const url = base_api_url + path

    const response = fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error('Network request failed')
        }
        return response
      })
      .then(data => data.json())
    return response
  }
}

export default API;
