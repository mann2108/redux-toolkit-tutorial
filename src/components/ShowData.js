import { useSelector } from "react-redux";
import RemoveData from "./RemoveData";
import RemoveDataClass from "./RemoveDataClass";
function ShowData() {
    const data = useSelector(state => state.dataReducer.data);
    return <>
        <h1>ShowData</h1>
        <ul>
            {
                data.map((ele, ind) => {
                    return <li key={`ShowData_${ind}`}>
                        {ele}
                    </li>
                })
            }
        </ul>
        <RemoveData />
        <RemoveDataClass />
    </>
}

export default ShowData;