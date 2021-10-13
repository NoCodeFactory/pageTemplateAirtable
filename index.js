const myKey = "keyV3Uq3QYjGa8Mv5"
const tableName = "Clients"

const requestOptions = {
  headers: {
    Authorization: `Bearer ${myKey}`
  }
}

let urlLocation = new URL(window.location.href)
let searchParams = urlLocation.searchParams
let recordId = searchParams.get('id')


let singleData

const airtableTitle = document.querySelector('.airtable_title')

const creatingElement = (data) => {
    airtableTitle.textContent = data.fields.Name
}

fetch(`https://api.airtable.com/v0/appgwZGfQS6ZnJDCJ/${tableName}/${recordId}`, requestOptions)
    .then(response => response.text())
    .then(result => {
        let parsedData = JSON.parse(result)
        singleData = parsedData

        creatingElement(singleData)
    })
     .catch(error => console.log('error', error))
