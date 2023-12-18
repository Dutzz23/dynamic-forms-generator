import React from 'react';
import UserResponseListElement from "./UserResponseListElement";

function UserResponsesList() {


    const listData = [
        {id: 1, username: "dsadads", responseId: 5, weight: 6},
        {id: 1, username: "dds", responseId: 5, weight: 3},
        {id: 1, username: "djkjhkhjkds", responseId: 5, weight: 1},
        {id: 1, username: "dvbnv", responseId: 5, weight: 2},
        {id: 1, username: "qwertytrewq", responseId: 5, weight: 4},
    ]
    return (
        <>
            <h2 className="my-5 ms-4" style={{textAlign: "start"}}>Responses</h2>
        <ul className="list-group mb-5">
            {
                listData.map((element) =>
                    <UserResponseListElement {...element} />
                )
            }
        </ul>
        </>
    );
}

export default UserResponsesList;