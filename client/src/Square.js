import React, { Component } from 'react';
import axios from 'axios';
class Square extends Component {
  state = {
    seenIndexs: [],
    values: {},
    index: ''
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({
      values: values.data
    });
  }



  handleSubmit = async event => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index
    });
    this.setState({ index: '' });
  };


  renderValues() {
    const entries = [];
    console.log (this.state);
    for (let key in this.state.values) {
      console.log (key);
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Square;
