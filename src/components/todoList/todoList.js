import React from "react";
import ThemeContext from "../../contexts/themeContext";
import TodoListItem from "../todoListItem/todoListItem";
import "./todoList.scss";

function TodoList({ todos, filterPanel, toggleCheck,deleteTodo }) {

    let listItems = [];
    for (const todo of todos) {

        const { id } = todo;
        listItems.push(
            <li id={id} key={id} className="list-group-item">
                <TodoListItem 
                item={todo} 
                toggleCheck={() => toggleCheck(id)} 
                deleteTodo={() => deleteTodo(id)} />
            </li>);
    };

    return (
        <ThemeContext.Consumer>
            {theme => <ul className={`app-list list-group ${theme}`}>
                {listItems}
                {filterPanel}
            </ul>}
        </ThemeContext.Consumer>

    );
}

export default TodoList;