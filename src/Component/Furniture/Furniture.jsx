import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';

const Furniture = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const handleChange = (event) => {
        setItem(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list, item]);
        setItem('');
    }

    const deleteItem = (key) => {
        setList(currentList => currentList.filter((item, i) => i !== key))
    }

    return (
        <div className="container mt-5">
            <ul>
                {list.length ? list.map((item, key) => {
                    return (
                        <li key={key} className="py-3">{item}
                            <span className="float-end">
                                <button onClick={() => deleteItem(key)} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                                    <FaTrash />
                                </button>
                            </span>
                        </li>
                    )
                }) : <li>Nothing to show</li>
                }
            </ul>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="item" value={item} onChange={handleChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default Furniture;