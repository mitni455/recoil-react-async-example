import React from "react";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { UserListView } from "./UserListView";
import { selectedUserIdState, userListState } from "../state";

export function UserList() {
  const [usersData, setUserState] = useRecoilStateLoadable(userListState);
  const [selectedUserId, setSelectedUserId] = useRecoilState(
    selectedUserIdState
  );

  const handleUserClick = (email?: string) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const selectedEmail = email || "";
    // console.log("handleUserClick", selectedEmail);
    setSelectedUserId(selectedEmail);
  };

  if (usersData.state === "hasError") {
    return <div> There is some problem! </div>;
  }

  if (usersData.state === "loading") {
    return <div>Loading...</div>;
  }

  if (usersData.state === "hasValue") {
    return (
      <>
        <UserListView
          users={usersData.contents}
          handleUserClick={handleUserClick}
        />
      </>
    );
  }

  return <div>No results...</div>;
}
