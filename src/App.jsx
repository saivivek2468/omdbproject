import { useState } from "react";
import "./App.css";
import Search from "./components/InputSearch";
import Movies from "./components/Movies";
import { Box } from "@mui/material";

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const handleText = (e) => setText(e.target.value);
  const handleSearch = () => setSearch(text);
  return (
    <Box sx={{ mb: 2 }}>
      <Search handleText={handleText} text={text} handleSearch={handleSearch} />
      <Movies search={search} />
    </Box>
  );
}

export default App;
