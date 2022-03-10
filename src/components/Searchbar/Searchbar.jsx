import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { Grid } from "@mui/material";

export default function Searchbar(props) {

  const inputEl = useRef("")

  // const getSearchTerm = () => {
  //   props.searchKeyword(inputEl.current.value)
  // }

  return (
      <Grid container>
        <Grid xl={12} lg={12} md={12} xs={12} sm={12}>
          <div>
            <div
              class="input-group mb-4 mt-4 rounded-pill p-1 bg-dark"
              style={{
                width: "25rem",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div class="input-group-prepend border-0">
                <button
                  id="button-addon4"
                  type="button"
                  class="btn btn-dark"
                  style={{
                    borderRadius: "100px",
                    color: "##C4C4C4",
                    boxShadow: "none",
                  }}
                >
                  <FiSearch />
                </button>
              </div>
              <input
              ref={inputEl}
                type="text"
                placeholder="Search ..."
                aria-describedby="button-addon4"
                class="form-control bg-dark border-0"
                style={{
                  borderRadius: "100px",
                  color: "white",
                  boxShadow: "none",
                }}
                // value={props.term}
                // onChange={getSearchTerm}
              />
            </div>
          </div>
        </Grid>
      </Grid>
  );
}
