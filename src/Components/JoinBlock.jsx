import React from 'react';
import socket from '../socket';

function JoinBlock() {
    return (
        <div className="join-block">
            <input className="form-control" type="text" placeholder="Room ID" />
            <input className="form-control" type="text" placeholder="Name" />
            <button className="btn btn-success">Enter</button>
        </div>
    )
}

export default JoinBlock
