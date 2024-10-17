const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
const rollingAvg = (currAvgArr, newNum) => {
  currAvgArr.push(newNum)
  const sum = currAvgArr.reduce((sum, num) => {return sum+num}, 0)
  return [sum/currAvgArr.length, currAvgArr] 
}
const addEntry= (person, avgArr) => {
  const main = document.querySelector(`main`)
  const entry = document.createElement('section')
  entry.className = `entry`
  
  const name = document.createElement('p')
  name.innerText = person.name
  entry.append(name)
  
  const job = document.createElement('p')
  job.innerText = person.occupation
  entry.append(job)
  
  const cost = document.createElement('p')
  cost.innerText = `$${person.price}`
  entry.append(cost)
  main.append(entry)

  const header =  document.querySelector(`#avg`)
  header.innerText = `The average starting price is $${rollingAvg(avgArr, person.price)[0]}`

}

const prices = []
addEntry(freelancers[0], prices)
addEntry(freelancers[1], prices)
addEntry(freelancers[2], prices)
let i = 3
const interval = setInterval(() => {
addEntry(freelancers[i], prices);
i += 1;
if (i === freelancers.length) {
  return
}
}, 30)