import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionHome() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Step 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to lesson section and start learning from basics
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Step 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After finishing each lesson try practicing from Practice section
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Step 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After practicing you should try some amazing Quiz and test yourself.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Step 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            And from leader board you can see your rank in this learning
            journey!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Lastly!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Learn and grow! wish you luck !</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
