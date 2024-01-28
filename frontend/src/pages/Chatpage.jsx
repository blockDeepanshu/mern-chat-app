import { useQuery } from "@tanstack/react-query";

const Chatpage = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ["chats"],
    queryFn: () => {
      return fetch("/api/chats").then((res) => res.json());
    },
  });

  if (isPending) return <h1>Loading...</h1>;

  if (error) return console.log(error.message);

  console.log("data", data);

  return <div>Chatpage</div>;
};

export default Chatpage;
