import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export default function AccordionHome() {
  const { t } = useTranslation();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {t("Step")}
            {t("1")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t("Go to lesson section and start learning from basics")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {t("Step")}
            {t("2")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t(
              "After finishing each lesson, try practicing from the Practice section"
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {t("Step")}
            {t("3")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t(
              "After practicing, you should try some amazing Quiz and test yourself"
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {t("Step")}
            {t("4")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {t(
              "And from the leaderboard, you can see your rank in this learning journey"
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{t("Lastly!")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("Learn and grow! Wish you luck!")}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
