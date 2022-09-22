const datas = require('./task-5-datas')

function normalizeData(datas) {
  const optimized = []

  for(let i=0; i<datas.length; i++) {
    const data = createNormalData(datas[i])
    console.log('here', data)
    
    if (optimized)
    optimized.push(data)
  }

  return optimized
}

function createNormalData(data) {
  const { session_id, time, class: dataClass, student } = data
  const normalData = {
    session_id,
    time,
    classes: [dataClass]
  }
  normalData.classes.students = [student]

  return normalData
}

const optimizedDatas = normalizeData(datas)
console.log(optimizedDatas)