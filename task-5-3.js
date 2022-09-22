const datas = require('./task-5-datas')

function normalizeClass(datas) {
  const result = []
  for(let i=0; i<datas.length; i++) {
    const normalized = {
      session_id: datas[i].session_id,
      time: datas[i].time,
      class: {
        ...datas[i].class,
        students: [datas[i].student]
      }
    }
    result.push(normalized)
  }
  return result
}

function normalizeSession(datas) {
  const result = []

  for(let i=0; i<datas.length; i++) {
    const normalized = {
      session_id: datas[i].session_id,
      time: datas[i].time,
      classes: [datas[i].class]
    }
    result.push(normalized)
  }

  return result
}


function normalizeData(datas) {
  const normalClass = normalizeClass(datas)
  const normalSession = normalizeSession(normalClass)
  const normalized = []

  for(let i=0; i < normalSession.length; i++) {

  }

  return normalized
}

const normalizedData = normalizeData(datas)
console.log(normalizedData)