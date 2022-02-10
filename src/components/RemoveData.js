import { useSelector, useDispatch } from "react-redux";
import { dataActions } from "../store";
function RemoveData() {
    const data = useSelector(state => state.dataReducer.data);
    const dispatch = useDispatch();
    return <>
        <h1>RemoveData</h1>
        <ul>
            {
                data.map((ele, ind) => {
                    return <li key={`RemoveData_${ind}`}>
                        {ele}
                        {" "}
                        <button onClick={() => dispatch(dataActions.removeData(ele))}>Remove Element</button>
                    </li>
                })
            }
        </ul>
    </>
}

export default RemoveData;