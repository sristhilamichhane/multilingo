// import data from "../Pages/Data.json";
import { useEffect } from "react";
import "../Pages/Home.css";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import i18n from "../i18n";
import i18next from "i18next";

export default function ComboBox() {
  const { t } = useTranslation();

  // i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // const [language, setLanguage] = useState("english");
  // const [content, setContent] = useState({});

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  return (
    <div>
      <Stack direction="column" gap={2}>
        <select
          value={localStorage.getItem("i18nextLng")}
          onChange={handleChange}
        >
          <option>english</option>
          <option>nepali</option>
          <option>maithili</option>
        </select>

        {/* <span className="scoreSubTitle">{content.Title}</span> */}

        <span className="scoreSubTitle">{t("You have selected English")}</span>
      </Stack>
    </div>
  );
}
