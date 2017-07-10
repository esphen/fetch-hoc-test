import React, { Component } from 'react';
import fetch from 'fetch-hoc';
import logo from './logo.svg';
import { compose } from 'recompose';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>
                Loading
              </th>
              <th>
                Success
              </th>
              <th>
                Error
              </th>
              <th>
                Data
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <pre>
                  {this.props.loading ? 'loading' : 'not loading'}
                </pre>
              </td>
              <td>
                <pre>
                  {this.props.success ? 'success' : 'no success'}
                </pre>
              </td>
              <td>
                <pre>
                  {this.props.error
                      ? JSON.stringify(this.props.error, null, 2)
                      : 'no error'
                  }
                </pre>
              </td>
              <td>
                <pre>
                  {this.props.data
                      ? JSON.stringify(this.props.data, null, 2)
                      : 'no error'
                  }
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default compose(
  fetch('https://httpbin.org/get'),
  fetch(() => 'https://httpbin.org/get'),
)(App);
