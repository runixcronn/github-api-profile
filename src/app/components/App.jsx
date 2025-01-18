import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    if (!searchTerm) return;
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}`
    );
    const data = await response.json();
    setUsers(data.items);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans p-6">
      <h1 className="text-3xl font-bold mb-6">Project 5: GitHub User Search</h1>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search GitHub Users"
          className="px-4 py-2 border rounded w-80"
        />
        <button
          onClick={fetchUsers}
          className="px-6 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 transition"
        >
          Search
        </button>
      </div>
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Results</h2>
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 bg-white shadow rounded border"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full mr-4"
              />
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {user.login}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
