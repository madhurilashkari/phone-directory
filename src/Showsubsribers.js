import React, { Component } from "react"
import Header from "./Header"
import "./Showsubscribers.css"
import { Link } from 'react-router-dom';

class Showsubscribers extends Component {
  /* constructor(){
   super();
   this.state ={
     subsriberListToshow : []
   }
 } 
 clickHandler(message){
   alert(message)
 }

 componentDidMount(){
   let newSubscriber ={
     id :1,
   Name : "Madhu",
   Phone : 99999999
   }

   let subsriberList = this.state.subsriberListToshow;
   subsriberList.push(newSubscriber);
   this.setState({subsriberListToshow : subsriberList});
 } */
 onDeletedClick = (subscriberId) => {
  this.props.deleteSubscriberHandler(subscriberId); 
}
  
  render() {
    /*  let subsribers =[{
       id :1,
       Name : "Madhu",
       Phone : 99999999
     },
     {
       id :2,
       Name : "Bittu",
       Phone : 888888
     }
   ] */
    return (
      <div>

        <Header heading="Phone Directory" />

        <div className="component-body-container">
        <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>

          </div>


          {this.props.subscriberList.map(sub => {
            return <div key={sub.id} className="grid-container ">
              <span className="grid-item ">{sub.Name}</span>
              <span className="grid-item">{sub.Phone}</span>
              <button className="custom-btn  delete-btn " onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
            </div>
          })
          }


        </div>
      </div>


    )
  }
}
export default Showsubscribers;
