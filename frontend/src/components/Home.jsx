import { useState, useEffect } from "react";
// import users from "../../users.json";
import { api } from "../API/api"

// Render Home Page
const Home = () => {
  const [users, setusers] = useState([])



  useEffect(() => {
    async function fetchUser() {
      const result = await api.get("/user")
      console.log(result);
      setusers(result.data.data)
    }
    fetchUser();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-4">
        Profile Data
      </h1>

      <div className="overflow-x-auto mt-6 px-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Desc</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border p-3 text-center">{user.id}</td>
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3">{user.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

