import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Child1UL from "./Child1-ul";
import Child2Form from "./Child2-form";

import "./Parent.css";

class Parent extends Component {
  state = {
    wishList: [
      {
        id: uuidv4(),
        wish: "walk the dog",
        isDone: false,
        isEditToggle: false,
      },
      {
        id: uuidv4(),
        wish: "buy milk",
        isDone: false,
        isEditToggle: false,
      },
      {
        id: uuidv4(),
        wish: "wash dishes",
        isDone: false,
        isEditToggle: false,
      },
    ],
    inputWish: "",
  };

  handleSubmitWish = (event) => {
    event.preventDefault();

    let newWishArray = [
      ...this.state.wishList,
      {
        id: uuidv4(),
        wish: this.state.inputWish,
        isDone: false,
        isEditToggle: false,
      },
    ];

    this.setState({
      wishList: newWishArray,
      inputWish: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputWish: event.target.value,
    });
  };

  handleDeleteByID = (id) => {
    console.log(id);

    let filteredWishListArray = this.state.wishList.filter(
      (item) => item.id !== id
    );

    this.setState({
      wishList: filteredWishListArray,
    });
  };

  handleIsDone = (id) => {
    //go through the array and find the ID of the todo
    //Then flip the todo from false to true or true to false
    //then set new state

    let updatedWishListArray = this.state.wishList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    this.setState({
      wishList: updatedWishListArray,
    });
  };

  handleEditToggle = (id) => {
    let toggledWishList = this.state.wishList.map((item) => {
      if (item.id === id) {
        item.isEditToggle = !item.isEditToggle;
      }
      return item;
    });

    this.setState({
      wishList: toggledWishList,
    });
  };

  handleToggleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
  };

  handleIsChecked = (event) => {
  let checkBoxes = this.state.wishList.map((item) => {
    
  })
}

  render() {
    return (
      <div className="parent-container">
        <Child2Form
          handleSubmitWish={this.handleSubmitWish}
          handleOnChange={this.handleOnChange}
          inputWish={this.state.inputWish}
        />
        <Child1UL
          wishList={this.state.wishList}
          handleDeleteByID={this.handleDeleteByID}
          handleIsDone={this.handleIsDone}
          handleEditToggle={this.handleEditToggle}
          handleIsChecked={this.handleIsChecked}
        />
      </div>
    );
  }
}

export default Parent;
