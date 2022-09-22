const datas = require('./task-5-datas')

function normalizeData(datas) {
  const optimized = []

  for(let i=0; i < datas.length; i++) {
    if (!optimized.length) {
      const data = {
        session_id: datas[i].session_id,
        time: datas[i].time,
        classes: [datas[i].class]
      }
      data.classes.students = [datas[i].student]
      optimized.push(data)
    } else {
      for(let j=0; j < optimized.length; j++) {
        if (datas[i].session_id === optimized[j].session_id) {
          optimized[j].classes = [...optimized[j].classes, datas[i].class]
          
          for(let k=0; k < optimized[j].classes.length; k++) {
            if (optimized[j].classes[k].class_id === datas[i].class_id) {
              console.log('here')
              optimized[j].classes[k].students = [...optimized[j].classes[k].students, datas[i].student]
            }
          }
        } else {
          const data = {
            session_id: datas[i].session_id,
            time: datas[i].time,
            classes: [datas[i].class]
          }
          data.classes.students = [datas[i].student]  
          optimized.push(data)
        }
      }
    }
  }

  return optimized
}

const result = normalizeData(datas)
console.log(result)
