import React from "react";
import "./todoListItem.scss";

function TodoListItem({ item: { text, checked }, toggleCheck, deleteTodo }) {
    const todoState = checked ? 'done' : 'notDone';

    return (
        <div className="todo-list-item">
            <button
                className={`check-btn ${todoState}`}
                onClick={toggleCheck} />
            <span className={`todo-text ${todoState}`}>{text}</span>
            <button 
            className="delete-button"
            onClick={deleteTodo}
            />
        </div>
    );

}

export default TodoListItem;