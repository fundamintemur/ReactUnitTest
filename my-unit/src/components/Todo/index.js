import { useState } from 'react';

const defaultItems = [
    {
        name: "Item A",
    },
    {
        name: "Item B",
    },
    {
        name: "Item C",
    },
];

function Todo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);

    const addItem = () => {
        setItems((prev) => [...prev, { name: text }]);
        setText("");
    };

    return (
        <div>
            <label>
                Text
            <input 
                value={text}
                onChange={(e) => { setText(e.target.value); }}
            />
            </label>
            <button onClick={addItem}>Add</button>
            <br/><br/>
            {
                items.map((item, key) => (
                    // 'return' ekliyoruz ve key olarak item.name kullanıyoruz.
                    <div key={item.name}>{item.name}</div>
                ))
            }
        </div>
    );
}

export default Todo;
