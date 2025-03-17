import React, { useState } from "react";

export default function State() {
    const [users, setUsers] = useState(['Asadbek','Batyrkhan', 'Islam'])

    function addUser() {
        setUsers([...users, 'Yeldos'])
    }

    return (
        <div>
            <button onClick={addUser}>Add user</button>
            <ul>
                {users.map((user,index)=>
                    {
                        return <li key={index}>{user}</li>
                    }
                )}
            </ul>
        </div>
    )
}