import {Suspense, MouseEvent as ReactMouseEvent} from "react";
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { UserErrorBoundary, UserListView } from "./";
import { selectedUserEmailState, userListState } from "../state";

/**
 * This is the React Container Component, which holds the logic
 * and passes it down to the Presentational Component as `props`.
 */
export function UserList() {
  const [usersData, setUserState] = useRecoilStateLoadable(userListState);
  const users = useRecoilValue(userListState);
  const [selectedUserEmail, setSelectedUserEmail] = useRecoilState(
    selectedUserEmailState
  );

  const handleUserClick = (email?: string) => (
    event: ReactMouseEvent<HTMLElement, MouseEvent>
  ) => {
    const selectedEmail = email || "";
    setSelectedUserEmail(selectedEmail);
  };

  /*
  if (usersData.state === "hasError") {
    return <div> There is some problem! </div>;
  }

  if (usersData.state === "loading") {
    return <div>Loading...</div>;
  }

  if (usersData.state === "hasValue") {
    return (
      <UserErrorBoundary>
        <Suspense fallback={<>loading...</>}>
          <UserListView
            users={usersData.contents}
            handleUserClick={handleUserClick}
          />
        </Suspense>
      </UserErrorBoundary>
    );
  }

  return <div>No results...</div>;
  */

  return (
    
        <UserListView
          users={users}
          handleUserClick={handleUserClick}
        />
    
  );
}
export default function UserListContainer(){
  return (
    <UserErrorBoundary>
      <Suspense fallback={<>loading...</>}>
        <UserList />
      </Suspense>
    </UserErrorBoundary>
  );
}
