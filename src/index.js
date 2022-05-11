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
  let editButton=document.createElement('button')
    editButton.innerText="Edit"
    editButton.setAttribute("type","submit")

  let dogName=dogObj.name
  let dogBreed=dogObj.breed
  let dogSex=dogObj.sex
  
  nameData.innerText=dogName
  breedData.innerText=dogBreed
  sexData.innerText=dogSex

  dogRow.append(nameData, breedData, sexData, editButton)
  editButton.addEventListener('click', ()=>editDogInfo(dogObj))
}


function editDogInfo(dogObj){
   let nameField=document.querySelector("form[id='dog-form'] input[name='name']")
   let breedField=document.querySelector("form[id='dog-form'] input[name='breed']")
   let sexField=document.querySelector("form[id='dog-form'] input[name='sex']")

   nameField.value=dogObj.name
   breedField.value=dogObj.breed
   sexField.value=dogObj.sex
   
}