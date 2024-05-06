import React from "react";
import { getAllUsers } from "../../services/testService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";

export const Home = () => {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["all_users"],
    queryFn: getAllUsers,
  });

  const mostrtarToas = () => {
    toast.warning("Este es una alerta");
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <ul>
        {data.data?.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
      <Link to="/test">Ir a Test</Link>
      <Button type="button" color="primary" radius="lg" onClick={mostrtarToas}>
        Mostar Toast
      </Button>
    </div>
  );
};
