import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { Number: 0 };
  }

  incrementHandler = () => {
    this.setState({ Number: this.state.Number + 1 });
  };

  decrementHandler = () => {
    this.setState({ Number: this.state.Number - 1 });
  };

  reset = () => {
    this.setState({ Number: 0 });
  };

  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <h1 className="text-xl mb-4">Click to increment or decrement</h1>
          <h2 className="text-3xl font-bold mb-4">{this.state.Number}</h2>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.incrementHandler}
            >
              Increment
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.decrementHandler}
            >
              Decrement
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
