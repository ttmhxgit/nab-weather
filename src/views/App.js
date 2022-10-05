import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { debounce } from "../libs/utils";

import NavBar from "../components/NavBar";
import Search from "../components/Search";
import ForeCast from "../components/ForeCast";

const searchTimeoutInMs = 500;

export default function App() {
  const [location, setLocation] = useState("saigon");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const debounceSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeoutInMs),
    []
  );

  const handleLocationChange = (event) => {
    const query = event.target.value.trim();
    if (query) {
      setIsSearching(true);
    }
    debounceSearch(query);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);


  

  return (
    <div className="min-h-screen">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <main>
              <div className="mx-auto w-full">
                <Search
                  location={location}
                  isSearching={isSearching}
                  onChange={handleLocationChange}
                />
                <div className="shadow-lg rounded-lg h-auto overflow-hidden w-4/5 m-auto mt-4 divide-y-2 divide-light-blue-400">
                  <ForeCast location={location} />
                </div>
              </div>
            </main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
