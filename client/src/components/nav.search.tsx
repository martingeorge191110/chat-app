import React, { useState } from "react";
import { faTimesCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar: React.FC = () => {
  const [nameQuery, setNameQuery] = useState("");
  const [emailQuery, setEmailQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  let nameTimeout: ReturnType<typeof setTimeout>;
  let emailTimeout: ReturnType<typeof setTimeout>;

  const fetchResults = async (query: string, type: "name" | "email") => {
    setLoading(true);
    try {
      // Simulate API call (replace this with real API call logic)
      const simulatedResults = [
        "John Doe",
        "Jane Smith",
        "Alice Johnson",
        "john.doe@example.com",
        "jane.smith@example.com",
        "alice.johnson@example.com",
      ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));

      setResults(simulatedResults);
    } catch (error) {
      console.error(`Error fetching ${type} results:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setNameQuery(query);
    if (nameTimeout) clearTimeout(nameTimeout);

    nameTimeout = setTimeout(() => {
      if (query.trim()) {
        fetchResults(query, "name");
      } else {
        setResults([]);
      }
    }, 300);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setEmailQuery(query);
    if (emailTimeout) clearTimeout(emailTimeout);

    emailTimeout = setTimeout(() => {
      if (query.trim()) {
        fetchResults(query, "email");
      } else {
        setResults([]);
      }
    }, 300);
  };

  const clearInput = (type: "name" | "email") => {
    if (type === "name") {
      setNameQuery("");
    } else {
      setEmailQuery("");
    }
    setResults([]);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-2xl transition-all duration-500 hover:shadow-xl">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Search Users</h2>
      <div className="space-y-6">
        {/* Search by Name */}
        <div className="relative transition-all duration-300 focus-within:scale-105">
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="nameSearch">
            Search by Name:
          </label>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faSearch} className="text-teal-500 mr-2" />
            <input
              id="nameSearch"
              type="text"
              placeholder="Enter name..."
              value={nameQuery}
              onChange={handleNameChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            />
            {nameQuery && (
              <button
                className="absolute right-2 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => clearInput("name")}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            )}
          </div>
        </div>

        {/* Search by Email */}
        <div className="relative transition-all duration-300 focus-within:scale-105">
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="emailSearch">
            Search by Email:
          </label>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faSearch} className="text-teal-500 mr-2" />
            <input
              id="emailSearch"
              type="text"
              placeholder="Enter email..."
              value={emailQuery}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            />
            {emailQuery && (
              <button
                className="absolute right-2 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => clearInput("email")}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            )}
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && <div className="text-center text-teal-500">Loading...</div>}

        {/* Results Section */}
        {results.length > 0 && (
          <div className="mt-4 border-t border-gray-300 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Results:</h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-100 rounded-lg hover:bg-teal-100 cursor-pointer transition-colors"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
