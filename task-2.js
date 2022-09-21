const data = [1, 4, 2, 3, 5, 3, 2, 4]

class Data {
  constructor(data) {
    this.data = data
    this.unique = []

    this.checkUnique = this.checkUnique.bind(this)
  }

  checkUnique(item) {
    const { unique } = this
    if(unique.length === 0) return true

    for(let i=0; i < unique.length; i++) {
      if(unique[i] === item) return false
    }

    return true
  }

  removeDuplicate() {
    const { data, checkUnique } = this

    for(let i=0; i<data.length; i++) {
      const isUnique = checkUnique(data[i])
      if(isUnique) this.unique.push(data[i])
    }

    return this.unique
  }
}

const numbers = new Data(data)
const uniqueNumbers = numbers.removeDuplicate()
console.log(uniqueNumbers)
