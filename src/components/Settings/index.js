import React, {useState, useEffect} from "react";


export default function Settings() {

const url = "https://o6wwobyn4k.execute-api.us-west-1.amazonaws.com/prod"
const [hikerData, sethikerData] = useState([])


const displaySettings = async event => {
    fetch(url + '/hikers')
    .then(response => response.json())
    .then(data => {
        sethikerData(JSON.parse(data.body))
    })


}

useEffect(() => {
    displaySettings()
}, [])

    return (
<div>
  <h2>Hikers</h2>
  <table>
      <thead>
          <tr>
              <th>Id</th>
              <th>Age</th>
              <th>Favourite Hikes</th>
            </tr>
        </thead>
        <tbody>
            {hikerData.map(hiker =>
            <tr key={hiker.hikersId}>
                <td>{hiker.hikersId}</td>
                <td>{hiker.age}</td>
                <td>{hiker.favouritesHikes}</td>
            </tr>
            )}
        </tbody>
    </table>
</div>

        
    )
}

