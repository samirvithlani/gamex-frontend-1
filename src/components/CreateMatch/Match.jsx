import React, { useRef } from "react";
import { Paper, Grid } from "@mui/material";
import "./Match.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Match() {
  //const [matchName, setMatchName] = useState()

  const matchName = useRef();

  let navigate = useNavigate();

  var count = 0;
  async function createMatch() {
    count++;
    console.log(count);
    console.log(matchName.current.value);
    await axios.post("/matchTeam/addMatchTeam", {
      matchName: matchName.current.value,
    });
  }
  const submit = async (e) => {
    console.log("submit called....");
    e.preventDefault();
    await createMatch();
    navigate("/Update", { replace: true });
  };

  return (
    <Paper elevation={0} sx={{ maxHeight: "100vh" }}>
      <Grid container sx={{ bgcolor: "black" }}>
        <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="heading">
            <h4 className="head-update">UPDATED</h4>
          </div>
        </Grid>
        <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
          <div>
            <form onSubmit={submit}>
              <input className="fc bg-dark border-0" type="text" placeholder="Match Name" ref={matchName} style={{color: 'white'}} />
              <input className="button-23" type="submit" value="submit"></input>
            </form>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
