import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  addStudent = event => {
    event.preventDefault();
    let data = this.state.data;
    data.push({ name: this.state.value });

    this.setState({ data: data });
  };
  deleteStudent = event => {
    const data = this.state.data;
    const filteredData = data.filter(
      el => el.id !== parseInt(event.target.value)
    );
    this.setState({ data: filteredData });
  };
  render() {
    return (
      <div className='grid'>
        <div className='navbar'>
          <h1>Student Database</h1>{' '}
          <h2>
            <form onSubmit={this.addStudent}>
              <label>
                <input
                  className='input'
                  type='text'
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder='Search student...'
                />
              </label>
              <input className='button' type='submit' value='Search' />
            </form>
          </h2>
        </div>
      </div>
    );
  }
}

export default Search;
