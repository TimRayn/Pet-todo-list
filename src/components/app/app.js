import React, { useState } from "react";
import Header from "../appHeader/appHeader";
import './app.scss';
import TodoList from "../todoList/todoList";
import AddTodoPanel from "../addTodoPanel/addTodoPanel";
import TodosFilterPanel from "../todosFilterPanel/todosFilterPanel";
import generateId from "../../utils/idGenerator";

import ThemeContext from "../../contexts/themeContext";


function App() {
    const [theme, setTheme] = useState('day');

    const [filter, setFilter] = useState('all');

    const [data, setData] = useState([
        {
            id: "sdgsg",
            text: "first nondone",
            checked: false
        },
        {
            id: "sdgg",
            text: "second done",
            checked: true
        },
        {
            id: "dgsds",
            text: "third nondone",
            checked: false
        },
        {
            id: "sdg",
            text: "forth done",
            checked: true
        }]);

    function onAdd(text) {
        const newTodo = {
            id: generateId(),
            text,
            checked: false
        };
        const newArr = [...data, newTodo];
        setData(newArr);
    }

    function onDelete(id) {
        const newArr = data.filter((item) => item.id !== id);
        setData(newArr);
    }

    function onFilterSelected(filter) {
        setFilter(filter);
    }

    function onClear() {
        const newArr = data.filter((item) => !item.checked);
        setData(newArr);
    }

    function getActives() {
        return data.filter((item) => !item.checked).length;
    }

    function filterPanel() {
        return (
            <TodosFilterPanel
                filter="all"
                activeTodos={getActives()}
                onClear={onClear}
                onFilterSelect={onFilterSelected}
            />);
    }

    function toggleCheck(id) {
        const index = data.findIndex((item) => item.id === id);
        const oldTodo = data[index];
        let newTodo = { ...oldTodo, checked: !oldTodo.checked };
        const newArr = [...data.slice(0, index), newTodo, ...data.slice(index + 1)];
        setData(newArr);
    }

    function onThemeToggled() {
        if (theme === 'day') setTheme('night');
        else setTheme('day');

        console.log(theme);
    }


    function filterTodos(items, filter) {
        if (filter === 'all') return items;
        if (filter === 'active') return items.filter((item) => !item.checked);
        if (filter === 'completed') return items.filter((item) => item.checked);
    };

    const visibleTodos = filterTodos(data, filter);

    return (
        <ThemeContext.Provider value={theme}>
            <div className="app">
                <Header onThemeToggled={onThemeToggled} />
                <AddTodoPanel onAdd={onAdd} />
                <TodoList
                    todos={visibleTodos}
                    filterPanel={filterPanel()}
                    toggleCheck={toggleCheck}
                    deleteTodo={onDelete} />
                <div className="app-footer">
                    Drag and drop to reorder list
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;