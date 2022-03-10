import React, { useState, useEffect } from "react";
import "./Update.css";
import Team from "../Team/Team";
import Searchbar from "../Searchbar/Searchbar";
import Mid from "../Mid/Mid";
import { Paper, Grid } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";
import actionStateAtom from "../../State/actionState";

export default function Update() {

  const [actionState, setActionState] = useRecoilState(actionStateAtom);

  useEffect(() => {
    console.log(actionState);
  });

  const [teamname, setTeamname] = useState();
  // const [valueTeamName, setValueTeamName] = useState();

  const [playernameOne, setPlayernameOne] = useState();
  // const [valuePlayerNameOne, setValuePlayerNameOne] = useState();

  const [playernameTwo, setPlayernameTwo] = useState();
  // const [valuePlayerNameTwo, setValuePlayerNameTwo] = useState();

  const [playernameThree, setPlayernameThree] = useState();
  // const [valuePlayerNameThree, setValuePlayerNameThree] = useState();

  const [playernameFour, setPlayernameFour] = useState();
  // const [valuePlayerNameFour, setValuePlayerNameFour] = useState();

  const [allTeamData, setAllTeamData] = useState([]);
  const [allPlayerData, setAllPlayerData] = useState([]);

  const [teamId, setTeamId] = useState();

  const [matchID, setMatchID] = useState();
  const [matchNAME, setMatchNAME] = useState();

  //const [searchTerm, setSearchTerm] = useState([]);
  //const [searchResult, setSearchResult] = useState([]); 

  async function allTeam() {
    await axios.get(`/team/getTeamByMatchId/${mid}`).then((res) => {
      setAllTeamData(res.data);
      // console.log(res.data);
      // console.log("MatchIDD", matchID);
    });
  }
  async function allPlayer() {
    await axios.get("/player/getPlayer").then((res) => {
      setAllPlayerData(res.data);
      // console.log(res.data);
    });
  }

  async function addPlayerName(e) {
    e.preventDefault();
    await axios.post("/player/addPlayer", {
      playerName: playernameOne,
      teamId,
    });
    await axios.post("/player/addPlayer", {
      playerName: playernameTwo,
      teamId,
    });
    await axios.post("/player/addPlayer", {
      playerName: playernameThree,
      teamId,
    });
    await axios.post("/player/addPlayer", {
      playerName: playernameFour,
      teamId,
    });
    await allPlayer();
    await allTeam();
  }

  async function mId() {
    await axios.get("/matchTeam/getMatchTeam").then((res) => {
      var lst = res.data.length;
      // console.log("matchId ", res.data[lst - 1]._id);
      setMatchID(res.data[lst - 1]._id);
    });
  }

  async function mName() {
    await axios.get("/matchTeam/getMatchTeam").then((res) => {
      var lst = res.data.length;
      // console.log("matchname ", res.data[lst - 1].matchName)
      setMatchNAME(res.data[lst - 1].matchName);
    });
  }

  async function addTeamName(e) {
    e.preventDefault();
    setTeamId(
      await (
        await axios.post("/team/addTeam", {
          teamName: teamname,
          matchId: matchID,
          matchName: matchNAME
        })
      ).data
    );
  }

  var mid = matchID

  async function all() {
    await axios.get(`/team/getTeamByMatchId/${mid}`).then((res) => {
      console.log("MatchIDDDDD data",res);
    })
  }

  useEffect(() => {
    allTeam();
    allPlayer();
    mId();
    mName();
    all()
  }, []);

// const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if(searchTerm !== ""){
  //     const newTeam = allTeamData.filter((data) => {
  //       return Object.values(data).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
  //     })
  //     setSearchResult(newTeam);
  //   }else{
  //     setSearchResult(allTeamData)
  //   }

  //   if(searchTerm !== ""){
  //     const newPlayer = allPlayerData.filter((data) => {
  //       return Object.values(data).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
  //     })
  //     setSearchResult(newPlayer);
  //   }else{
  //     setSearchResult(allPlayerData)
  //   }
  // }

  return (
    <Paper elevation={0} sx={{ maxHeight: "100vh" }}>
      <Grid container sx={{ bgcolor: "black" }}>
        <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="heading">
            <h4 className="head-update">UPDATED</h4>
          </div>
        </Grid>
        <Grid xl={4} lg={4} md={12} sm={12} xs={12}>
          <Searchbar />
          <div
            className="t-left"
            style={{ overflow: "scroll", height: "118vh", overflowX: "hidden" }}
          >
            {allPlayerData.length > 0 &&
              allTeamData.map((data) => (
                <>
                  <Team
                    className="t-left"
                    Teamname={data.teamName}
                    player1={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[0]
                    }
                    player2={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[1]
                    }
                    player3={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[2]
                    }
                    player4={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[3]
                    }
                    // term={searchTerm}
                    // searchKeyword={searchHandler}
                  />
                </>
              ))}
          </div>
        </Grid>
        <Grid xl={4} lg={4} md={12} sm={12} xs={12}>
          <div className="t-middle">
            <Mid />
            <div className="both-button">
              <form>
                <input
                  type="text"
                  className="fc bg-dark border-0 m-2"
                  name="TeamName"
                  placeholder="Teamname"
                  onChange={(e) => setTeamname(e.target.value)}
                  style={{ color: "white" }}
                />
                <button
                  type="submit"
                  className="button-23"
                  onClick={addTeamName}
                >
                  Add Team
                </button>
              </form>
              <form>
                <input
                  type="text"
                  className="fc bg-dark border-0 m-2"
                  name="PlayerName"
                  placeholder="Playername 1"
                  onChange={(e) => setPlayernameOne(e.target.value)}
                  style={{ color: "white" }}
                />

                <input
                  type="text"
                  className="fc bg-dark border-0 m-2"
                  name="PlayerName"
                  placeholder="Playername 2"
                  onChange={(e) => setPlayernameTwo(e.target.value)}
                  style={{ color: "white" }}
                />

                <input
                  type="text"
                  className="fc bg-dark border-0 m-2"
                  name="PlayerName"
                  placeholder="Playername 3"
                  onChange={(e) => setPlayernameThree(e.target.value)}
                  style={{ color: "white" }}
                />

                <input
                  type="text"
                  className="fc bg-dark border-0 m-2"
                  name="PlayerName"
                  placeholder="Playername 4"
                  onChange={(e) => setPlayernameFour(e.target.value)}
                  style={{ color: "white" }}
                />

                <br />

                <button
                  type="submit"
                  className="button-23 m-1"
                  onClick={addPlayerName}
                >
                  Add Players
                </button>
              </form>

              {/* <button type="submit" className="button-23">
                Update
              </button> */}
            </div>
          </div>
        </Grid>
        <Grid xl={4} lg={4} md={12} sm={12} xs={12}>
          <Searchbar />
          <div
            className="t-right"
            style={{
              overflow: "scroll",
              height: "118vh",
              overflowX: "hidden",
              direction: "rtl",
            }}
          >
            {allPlayerData.length > 0 &&
              allTeamData.map((data) => (
                <>
                  <Team
                    className="t-right"
                    Teamname={data.teamName}
                    isRight
                    player1={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[0]
                    }
                    player2={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[1]
                    }
                    player3={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[2]
                    }
                    player4={
                      allPlayerData.filter((e) => {
                        return e.teamId === data._id;
                      })[3]
                    }
                  />
                </>
              ))}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
