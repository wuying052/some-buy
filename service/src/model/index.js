class successModel {
  constructor(data, message) {
    if (typeof data == 'string') {
      this.message = data
    }
    if (data) {
      this.data = data
      this.message = ''
    }
    if (message) {
      this.data = null
      this.message = message
    }
  }
}

module.exports = { successModel }