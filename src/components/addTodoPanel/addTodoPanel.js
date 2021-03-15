import React, { useState } from "react";

function AddTodoPanel({ onAdd }) {

    const [text, setText] = useState("");

    function onValueChange(event) {
        setText(event.target.value);
    };

    function onSubmit(event) {
        event.preventDefault();
        onAdd(text);
        setText("");
    };

    return (
        <form
            className="create-form"
            onSubmit={onSubmit} >
            <span>circle</span>
            <input
                type="text"
                className="create-form-input"
                placeholder="Create a new todo..."
                onChange={onValueChange}
                value={text}
            />
        </form>
    );
}

export default AddTodoPanel;