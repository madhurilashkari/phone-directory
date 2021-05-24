import React, { Component } from "react"
import AddSubScriber from "./AddSubScriber"
import ShowSubscribers from "./Showsubsribers"
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: [{
                id: 1,
                Name: "Madhu",
                Phone: 99999999
            },
            {
                id: 2,
                Name: "Bittu",
                Phone: 99999999
            }
            ]
        }
    }

    addSubsriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if (subscriberList.legth > 0) {
            newSubscriber.id = subscriberList[subscriberList.legth - 1].id + 1;

        }
        else {
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({ subscriberList: subscriberList });
        console.log("Phone directory");
        console.log(this.state.subscriberList);
    }


    deleteSubscriberHandler = (subscriberId) => {
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscriberList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                    <Route exact path="/add" render={({ history }, props) => <AddSubScriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
            // <AddSubScriber addSubsriberHandler={this.addSubsriberHandler} />
            //<Showsubsribers subscriberList = {this.state.subscriberList} />
        )
    }
}
export default PhoneDirectory;