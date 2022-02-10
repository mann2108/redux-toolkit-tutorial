import React, { Component } from 'react';
import { connect } from "react-redux";
import { dataActions } from '../store';
class RemoveDataClass extends Component {
    render() {
        return (
            <>
                <h1>RemoveDataClass</h1>
                <ul>
                    {
                        this.props.data.map((ele, ind) => {
                            return <li key={`RemoveDataClass_${ind}`}>
                                {ele}
                                {" "}
                                <button onClick={() => {this.props.removeData(ele)}}>Remove Element</button>
                            </li>
                        })
                    }
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.dataReducer.data
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        removeData: (ele) => dispatch(dataActions.removeData(ele))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(RemoveDataClass);