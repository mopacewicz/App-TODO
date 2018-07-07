import React, {Component} from 'react';
import './App.css';

function AppHeader() {
    return (
        <header>
                <h1>List Todo</h1>
                <div>
                    <button>Add Todo</button>
                </div>
        </header>
    );
}

function TodoFilter() {
    return (
        <div>
            <button>Show all</button>
            <button>Completed</button>
            <button>Incompleted</button>
        </div>
    );
}

function TodoList() {
    return (
        <ul>
            <TodoItem
                name="Orange"
                category="Shopping"
            />
            <TodoItem
                name="Kitchen"
                category="Cleaning"
            />
            <TodoItem
                name="Bike"
                category="Sport"
            />
        </ul>
    );
}

function TodoItem({ name, category }) {
    return (
        <li>
            <div>
                <input type="checkbox"></input>
                <h4>{name}</h4>
                <div>{category}</div>
                <button>Edit</button>
                <button>Remove</button>
            </div>
        </li>
    );
}

class App extends Component {
  render() {
    return (
        <div>
            <AppHeader />
            <TodoFilter/>
            <TodoList/>
        </div>
    );
  }
}

export default App;
