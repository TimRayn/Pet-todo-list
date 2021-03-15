import React from "react";

function TodosFilterPanel({ filter, onFilterSelect, activeTodos, onClear }) {

    const buttons = [
        { name: "all", label: "All" },
        { name: "active", label: "Active" },
        { name: "completed", label: "Completed" }
    ];

    const buttonsList = buttons.map(({ name, label }) => {
        const active = filter === name;
        const className = active ? "btn-active" : "btn-nonactive";
        return (
            <button
                key={name}
                type="button"
                className={`filter-button ${className}`}
                onClick={() => onFilterSelect(name)} >
                {label}</button>
        );
    });

    return (
        <div className="bottom=panel list-group-item">
            <span className="todo-counter">
                {activeTodos} items left
            </span>
            <div className="filter-buttons-bar">
                {buttonsList}
            </div>
            <button
                className="clear-button"
                type="button"
                onClick={onClear}
            >Clear Completed</button>
        </div>
    );
}

export default TodosFilterPanel;