import { atom } from "recoil";
const actionState = atom({
  key: "action", // unique ID (with respect to other atoms/selectors)
  default: {
    playerId: null,
    selectedPlayer: null,
    actionId: null,
    selectedAction: null,
    efffectedPlayerId: null,
    selectedEffectedPlayer: null,
    MatchId: null,
    MATCHname: null,
  },
});
export default actionState;
