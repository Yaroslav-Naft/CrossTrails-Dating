import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";


export default function Settings() {

const history = useHistory()
const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
const [hiker, setHiker] = useState([])




const displaySettings = async event => {
    fetch(`${url}/hikers/2`)
    .then(response => response.json())
    .then(data => {
        setHiker(JSON.parse(data.body))
    })
}

const submit = s => {
    s.preventDefault()
    //Update product
    fetch(url + '/hikers', {
        method: 'PUT',
        body: JSON.stringify({ hiker }),
        headers: { 'Content-Type': 'application/json'}
    })
    //update body
    .then(response => response.json())
    .then(() => { displaySettings () } )
    history.push("/")
}


useEffect(() => {
    displaySettings()
}, [])

    return (
<div>
  {/* <h2>Hikers</h2>
  <table>
      <thead>
          <tr>
              <th>Id</th>
              <th>Age</th>
              <th>Favourite Hikes</th>
            </tr>
        </thead>
        <tbody>
            {hiker.map(hiker =>
            <tr key={hiker.hikersId}>
                <td>{hiker.hikersId}</td>
                <td>{hiker.age}</td>
                <td>{hiker.favouritesHikes}</td>
            </tr>
            )}
        </tbody>
    </table> */}

    <form onSubmit={submit}>   
        <h4>Update Hiker</h4>
        <div className="control">
            <label>Hiker Name: </label>
            <input type="text" className="input" id="productName"
            name="hiker[firstName]" value={hiker.firstName} onChange={e => setHiker({ ...hiker, firstName: e.target.value })}/>
        </div>
        {/* <div className="control">
            <label>Age: </label>
            <input type="text" className="input" id="productPrice"
            name="hiker[age]" value={product.productPrice} onChange={e => setProduct({ ...product, productPrice: e.target.value })}/>
        </div>
        <div className="control">
            <input type="submit" name="update" className="button is-black"/>
        </div> */}
        {/* <br></br>
        <h4>Delete Product</h4>
        <div className="control">
            <span></span>
            <button className="button" onClick={deleteItem}>Delete Product</button>
        </div> */}
</form>









</div>

        
    )
}

