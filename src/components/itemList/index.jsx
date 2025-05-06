import React, { useMemo } from "react";

const ItemList = ({ userArray, searchText }) => {
  const searchUser = useMemo(
    () =>
      userArray.filter((user) => {
        return user.fullName.toLowerCase().includes(searchText.toLowerCase());
      }),
    [userArray, searchText]
  );
  console.log("render ItemList");

  return (
    <div>
      <ol>
        {searchUser.map((user) => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ol>
    </div>
  );
};

export default ItemList;
