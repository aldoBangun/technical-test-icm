const words = ['flower', 'flow', 'flight']

function findSamePrefix(words) {
  const samePrefix = []
  let shortestItemLength = getShorestItem(words)
  let comparer = null

  for(let i=0; i < shortestItemLength; i++) {
    for(let j=0; j < words.length; j++) {
      if (!comparer) {
        comparer = words[j][i]
      } else if (comparer !== words[j][i]) {
        return samePrefix.join('')
      }
    }
    samePrefix.push(comparer)
    comparer = null
  }
  return samePrefix.join('')
}

function getShorestItem(items) {
  let shortest = 0
  for(let i=0; i<items.length; i++) {
    if (shortest === 0 || shortest > items[i].length) {
      shortest = items[i].length
    }
  }
  return shortest
}

const samePrefix = findSamePrefix(words)
console.log(samePrefix)