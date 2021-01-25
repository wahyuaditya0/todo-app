import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
    constructor(){
      super();
      this.state = { todos: []}
    }

    addTodo = (e) => {
      e.preventDefault();

      let jam = this.refs.jam.value;
      let aktivitas = this.refs.aktivitas.value;

      this.state.todos.push({jam, aktivitas});

      this.setState ({ todos: this.state.todos });

      this.refs.formulir.reset();
      this.refs.jam.focus();
    }

    removeTodo = (i) => {
      this.state.todos.splice(i,1);
      this.setState({ todos: this.state.todos });
    }

  render() {
    let indonesia = require('moment/locale/id');
    moment.updateLocale('id', indonesia);

    // moment.locale();     
    return (
    <div className="container"> 
      <h3 className=" text-center"> Aplikasi Aktivitas Harian </h3>
      <p className="text-center">{moment().format('dddd')} {moment().format('LLL') }</p>
      <form ref="formulir" className="form-inline justify-content-center">
        <input type="text" className="form-control" ref="jam"
        placeholder="jam aktivitas" />
        <input type="text" className="form-control" ref="aktivitas"
        placeholder="jenis aktivitas" />
        <button onClick={this.addTodo} className="btn btn-info">simpan</button>
      </form>
      <hr />
      <div>
        <ul>
          <CSSTransitionGroup
            transitionName="animasi"
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
          {this.state.todos.map((data,i)=>
          <li key={i}>
            <div>
              <button onClick={ () => this.removeTodo(i)} className="btn btn-outline-danger">
                hapus</button> {data.jam} : {data.aktivitas} <hr/>
            </div>
          </li>
          )}
          </CSSTransitionGroup>
        </ul>
    </div>
    </div>
    );
  }
}

export default App;
