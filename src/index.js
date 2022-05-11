document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/dogs')
        .then (res=>res.json())
        .then(dogObjects=>dogObjects.forEach(dogObj=> renderDogObj(dogObj)))
})

function renderDogObj(dogObj){
    let registeredDogTable = document.getElementById('table-body')
  let dogRow = document.createElement('tr')
  registeredDogTable.appendChild(dogRow)
  
  let nameData=document.createElement('td')
  let breedData=document.createElement('td')
  let sexData=document.createElement('td')

  let dogName=dogObj.name
  let dogBreed=dogObj.breed
  let dogSex=dogObj.sex
  

  nameData.innerText=dogName
  breedData.innerText=dogBreed
  sexData.innerText=dogSex

  console.log(nameData)

  dogRow.append(nameData, breedData, sexData)
}