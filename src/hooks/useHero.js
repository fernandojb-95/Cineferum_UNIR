import { useState } from "react";
import { useNavigate } from "react-router";

export const useHero = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search) {
      setSearch(search.trim());
    }
    navigate(`/search?query=${encodeURIComponent(search.trim())}`);
  };

  return {
    handleSearchSubmit,
    setSearch,
  };
};