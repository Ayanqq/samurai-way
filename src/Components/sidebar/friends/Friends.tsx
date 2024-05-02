import React from "react";
import {FriendType} from "../../../redux/state";

type FriendsProps = {
    friendsData:FriendType[]
};
export const Friends = ({friendsData}: FriendsProps) => {
    return (
        <div>
            <ul style={{display: 'flex', listStyle: "none", gap: '10px', padding: '0'}}>
                {friendsData.map(el => {
                    return (
                        <li key={el.id}>{el.name}</li>
                    )
                })}
            </ul>
        </div>
    );
};