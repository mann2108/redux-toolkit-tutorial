import { useState } from "react";
import { useDispatch } from "react-redux";

import { dataActions } from "../store";

function AddData() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    return <>
        <h1>AddData</h1>
        <input type="number" value={value} onChange={(evt) => { setValue(evt.target.value) }} />
        <button onClick={() => dispatch(dataActions.addData(value))}>Add Data</button>
    </>
}

export default AddData;