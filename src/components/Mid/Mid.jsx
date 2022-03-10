import React, { useState, useEffect } from "react";
import "./Mid.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import actionStateAtom from "../../State/actionState";

export default function Mid() {
  const [action, setAction] = useState();
  const [allAction, setAllAction] = useState([]);
  const [actionState, setActionState] = useRecoilState(actionStateAtom);

  const [matchID, setMatchID] = useState();
  const [matchNAME, setMatchNAME] = useState();

  // const [actionIdd, setActionIdd] = useState();

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

  async function addAction(e) {
    e.preventDefault();
    await axios.post("/actionTeam/addAction", { actionName: action });
  }

  async function getAction() {
    await axios.get("/actionTeam/getAction").then((res) => {
      // var last = res.data.length;
      // console.log("Action data", res.data[0].actionName);
      // setActionValue(res.data[last - 1].actionName);
      setAllAction(res.data);
    });
  }

  async function postCheckAction() {
    await axios.post("/checkpoint/addId", {...actionState, MatchId: matchID, MATCHname: matchNAME});
  }
  
  useEffect(() => {
    getAction();
    mId();
    mName();
    // mAction();
  }, []);

  return (
    <div>
      <div className="all-mid">
        <form>
          <input
            type="text"
            className="fc bg-dark border-0"
            name="AllAction"
            placeholder="Add Action"
            onChange={(e) => setAction(e.target.value)}
            value={action}
            style={{color: "white"}}
          />
          <button type="submit" className="button-23" onClick={addAction}>
            Add Action
          </button>
        </form>

        {allAction.map((data) => (
          <>
            <h4 className="all-word">{data.actionName}</h4>
            <div className="form-check cb">
              <input
                id="flexCheckDefault"
                className="form-check-input"
                type="checkbox"
                onChange={() => {
                  setActionState({ ...actionState, actionId: data._id, selectedAction: data.actionName });
                }}
              />
            </div>
          </>
        ))}

        <button
          className="button-23"
          onClick={() => {
            postCheckAction();
          }}
        >
          Save
        </button>

        {/* <h4 className="all-word">Kill</h4>
        <div className="form-check cb">
          <input
            id="flexCheckDefault"
            className="form-check-input"
            type="checkbox"
          />
        </div>
        <h4 className="all-word">Headshot + Kill</h4>
        <div className="form-check cb">
          <input
            id="flexCheckDefault"
            className="form-check-input"
            type="checkbox"
          />
        </div>
        <h4 className="all-word">Knock Out</h4>
        <div className="form-check cb">
          <input
            id="flexCheckDefault"
            className="form-check-input"
            type="checkbox"
          />
        </div>
        <h4 className="all-word">Headshot + Knock Out</h4>
        <div className="form-check cb">
          <input
            id="flexCheckDefault"
            className="form-check-input"
            type="checkbox"
          />
        </div>
        <h4 className="all-word">Grande. Molly</h4>
        <div className="form-check cb">
          <input
            id="flexCheckDefault"
            className="form-check-input"
            type="checkbox"
          />
        </div>
        <h4 className="all-word">Zone Death</h4>
        <div className="form-check cb">
          <input
            id="flexCheckDefault"
            className="form-check-input"
            type="checkbox"
          />
        </div> */}

        {/* <div className="both-button">
          <button type="submit" className="button-23">
            Add
          </button>
          <button type="submit" className="button-23">
            Update
          </button>
        </div> */}
      </div>
      {/* <div className="lin1"></div>
      <div className="lin2"></div> */}
      {/* <hr className="lin1"/> */}
    </div>
  );
}
