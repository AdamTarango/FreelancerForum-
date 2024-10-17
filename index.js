const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];
const names = [`Mark`,`Christine`,`Colt`,`Quinten`,`Nyah`,`Alize`,`Kalen`,`Allissa`,`Anissa`,`Mikaila`,`Dana`,`Lucille`,`Robyn`,`River`,`Debra`,`India`,`Jeniffer`,`Sierra`,`Jordan`,`Charlie`,`Joan`,`Magdalena`,`Truman`,`Skyla`,`Adelaide`,`Sage`,`Darian`,`Lucero`,`Austin`,`Trenten`,`Lukas`,`Abbigail`,`Amir`,`Cooper`,`Khadijah`,`Craig`,`Axel`,`Sanjana`,`Amya`,`Timmy`,`Farrah`,`Josie`,`Mitchel`,`Karolina`,`Rodrigo`,`Destinie`,`Cedric`,`Mckenzie`,`Marissa`,`Chyna`,`Jessalyn`,`Jadon`,`Malachi`,`Malcolm`,`Luisa`,`Rocco`,`Estefany`,`Colette`,`Ronaldo`,`Marcela`,`Ali`,`Jaqueline`,`Jeff`,`Sawyer`,`Phillip`,`Jazlynn`,`Keona`,`Lynsey`,`Nathan`,`Harris`,`Shauna`,`Heidi`,`Hakeem`,`Isabella`,`Miracle`,`Alina`,`Deana`,`Angela`,`Tiera`,`Gianni`,`Karson`,`Madilynn`,`Natalia`,`Melinda`,`Stephan`,`Laney`,`Tayla`,`Sabrina`,`Lilly`,`Jania`,`Destini`,`Kade`,`Anais`,`Corbin`,`Colby`,`Amari`,`Jayme`,`Brian`,`Lena`,`Ryder`,`Samir`]
const jobs = [`Pilot`,`Chef`,`Curator`,`Football`,`Also Pilot`,`Not a Pilot`,`Word`,`Placeholder`,`700`,`Tuesday`]
const randFree = (nameList, jobList) =>{
  const name = nameList[Math.floor(Math.random()*nameList.length)];
  const job = jobList[Math.floor(Math.random()*jobList.length)];
  cost = Math.floor(Math.random()*100);
  const randPers = {name: name, price: cost, occupation: job}
  return randPers
}
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
  freelancers.push (randFree(names, jobs))
  addEntry(freelancers[i], prices);
i += 1;
}
, 3000)