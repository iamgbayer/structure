import React from "react";
import { useListMemberGroups } from "../hooks/use-list-member-groups";

export const MemberGroups = () => {
  const { data, isLoading, error } = useListMemberGroups();

  if (isLoading) {
    return <div>is loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {data.map((group) => (
        <div key={group.name}>
          <p>
            {group.name} - R${group.price}
          </p>
        </div>
      ))}
    </>
  );
};
