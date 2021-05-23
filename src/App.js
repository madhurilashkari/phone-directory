import React, { Component } from "react"
import Header from "./Header"
import "./app.css"

class App extends Component{
  clickHandler(message){
    alert(message)
  }
render() {
  let subsribers =[{
    id :1,
    Name : "Madhu",
    Phone : 99999999
  },
  {
    id :2,
    Name : "Bittu",
    Phone : 888888
  }
]

  return (
    <div>
      
    <Header heading="Phone Directory" />

    <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
           
          </div>

                   
          { subsribers.map( sub =>{
              return <div key ={sub.id} className="grid-container ">
                <span className="grid-item ">{sub.Name}</span>
                <span className="grid-item">{sub.Phone}</span>
                <button className="custom-btn  delete-btn " onClick = {this.clickHandler.bind(this,"Delete clicked")}>Delete</button>
              </div>
           } )
          }

          
        </div>
   </div> 
    
   
  )
  }
}
export default App;
