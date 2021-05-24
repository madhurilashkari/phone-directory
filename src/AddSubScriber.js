
import React, { Component } from "react";
import Header from "./Header";
import "./AddSubsriber.css";
import { Link } from 'react-router-dom';


class AddSubScriber extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''

        }
    }
    inputChnageHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubsriberHandler(this.state);
        this.setState({ id: 0, name: '', phone: '' });
        this.props.history.push("/");
    }
    render() {
        const { name, phone } = this.state;
        return (
            <div className="component-body-container">
                <Header heading="Add Subscriber" />
                <div className="component-body-container">

                    <Link to="/">
                        <button className="custom-btn">Back</button>
                    </Link>
                </div>
                <form className="subsriber-form" onSubmit={this.onFormSubmitted.bind(this)}>

                    <label htmlFor="name" className="label-control">Name</label><br />
                    <input type="text" className="input-control" name="name" onChange={this.inputChnageHandler} /><br /><br />
                    <label htmlFor="phone" className="label-control">Phone</label><br />
                    <input type="text" v="input-control" name="phone" onChange={this.inputChnageHandler} />
                    <div className="subscriber-info-details">
                        <span className='subscriber-to-add-heading'> Subsriber to be added </span><br />
                        <span className="Subscriber-info">Name:{name}</span><br />
                        <span className="Subscriber-info">Phone:{phone}</span>
                    </div>
                    <button type="submit" className="custom-button add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddSubScriber;