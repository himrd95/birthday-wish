import React from "react";
import { useState } from "react";
import "./Select.css";

const Select = ({ label, data, selected, setSelected }) => {
    const [array, setArray] = useState([...data]);
    const [checkedAll, setCheckedAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(false);

    const handleSelectAll = (e, val) => {
        setSelectedItems(false);

        const boxes = document.querySelectorAll(
            `#${label.replaceAll(" ", "-")}`
        );
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].checked = val;
        }
        setCheckedAll(val);
        val ? setSelected([...data]) : setSelected([]);
    };

    return (
        <div className="select-box">
            <div className="container">
                {array?.map((item, index) => (
                    <div className="option" onClick={() => setSelected(index)}>
                        <span className="checkbox">
                            <input
                                id={label.replaceAll(" ", "-")}
                                type="checkbox"
                                checked={selected === index}
                            />
                        </span>
                        <span>
                            {typeof item === "string" ? item : item.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select;
