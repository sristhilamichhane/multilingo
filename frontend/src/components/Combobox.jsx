import data from "../Pages/Data.json";
import { useEffect, useState } from "react";
import "../Pages/Home.css";
import { Stack } from "@mui/material";

export default function ComboBox() {
  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language == "english") {
      setContent(data.english);
    } else if (language == "nepali") {
      setContent(data.nepali);
    } else if (language == "maithili") {
      setContent(data.maithili);
    }
  });
  return (
    <div>
      <Stack direction="column" gap={2}>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option>english</option>
          <option>nepali</option>
          <option>maithili</option>
        </select>

        {/* <span className="scoreSubTitle">{content.Title}</span> */}

        <span className="scoreSubTitle">{content.Description}</span>
      </Stack>
    </div>
  );
}
