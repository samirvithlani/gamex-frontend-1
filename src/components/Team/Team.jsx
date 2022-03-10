import React from "react";
import "./Team.css";
import { useRecoilState } from "recoil";
import actionStateAtom from "../../State/actionState";

export default function Team(props) {
  const [actionState, setActionState] = useRecoilState(actionStateAtom);

  const players = [props?.player1?._id, props?.player2?._id, props?.player3?._id, props?.player4?._id]

  const disabled = props?.isRight && players.includes(actionState.playerId)

  return (
    <div>
      <div
        className="card mt-2 mb-4"
        style={{
          width: "25rem",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "black",
          borderColor: "#b8e503",
        }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            {props?.Teamname}
          </h5>
        </div>
        <div className="all-player">
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item border-0"
              style={{ backgroundColor: "black" }}
            >
              <h6 style={{ color: "white" }}>{props?.player1?.playerName}</h6>
              <div className="form-check all-checkbox">
                <input
                  id="flexCheckDefault"
                  className="form-check-input"
                  type="checkbox"
                  disabled = {disabled}
                  onChange={() => {
                    if (props?.isRight) {
                      setActionState({
                        ...actionState,
                        efffectedPlayerId: props?.player1?._id,
                        selectedEffectedPlayer: props?.player1?.playerName
                      });
                    } else {
                      setActionState({
                        ...actionState,
                        playerId: props?.player1?._id,
                        selectedPlayer: props?.player1?.playerName
                      });
                    }
                  }}
                />
              </div>
            </li>
            <li
              className="list-group-item border-0"
              style={{ backgroundColor: "black" }}
            >
              <h6 style={{ color: "white" }}>{props?.player2?.playerName}</h6>
              <div className="form-check all-checkbox">
                <input
                  id="flexCheckDefault"
                  className="form-check-input"
                  type="checkbox"
                  disabled = {disabled}
                  onChange={() => {
                    if (props?.isRight) {
                      setActionState({
                        ...actionState,
                        efffectedPlayerId: props?.player2?._id,
                        selectedEffectedPlayer: props?.player2?.playerName
                      });
                    } else {
                      setActionState({
                        ...actionState,
                        playerId: props?.player2?._id,
                        selectedPlayer: props?.player2?.playerName
                      });
                    }
                  }}
                />
              </div>
            </li>
            <li
              className="list-group-item border-0"
              style={{ backgroundColor: "black" }}
            >
              <h6 style={{ color: "white" }}>{props?.player3?.playerName}</h6>
              <div className="form-check all-checkbox">
                <input
                  id="flexCheckDefault"
                  className="form-check-input"
                  type="checkbox"
                  disabled = {disabled}
                  onChange={() => {
                    if (props?.isRight) {
                      setActionState({
                        ...actionState,
                        efffectedPlayerId: props?.player3?._id,
                        selectedEffectedPlayer: props?.player3?.playerName
                      });
                    } else {
                      setActionState({
                        ...actionState,
                        playerId: props?.player3?._id,
                        selectedPlayer: props?.player3?.playerName
                      });
                    }
                  }}
                />
              </div>
            </li>
            <li
              className="list-group-item border-0"
              style={{ backgroundColor: "black" }}
            >
              <h6 style={{ color: "white" }}>{props?.player4?.playerName}</h6>
              <div className="form-check all-checkbox">
                <input
                  id="flexCheckDefault"
                  className="form-check-input"
                  type="checkbox"
                  disabled = {disabled}
                  onChange={() => {
                    if (props?.isRight) {
                      setActionState({
                        ...actionState,
                        efffectedPlayerId: props?.player4?._id,
                        selectedEffectedPlayer: props?.player4?.playerName
                      });
                    } else {
                      setActionState({
                        ...actionState,
                        playerId: props?.player4?._id,
                        selectedPlayer: props?.player4?.playerName
                      });
                    }
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
