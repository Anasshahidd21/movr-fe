import React from "react";
import { Button, NativeSelect } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "react-dropdown/style.css";
import "./Selection.css";


export default function Selection() {

  const cities = [
    "Montreal",
    "Toronto"
  ];

  const opts = [
    "Driver",
    "Mover",
    "Become a Driver",
    "Become a Mover"
  ];

  return (
    <div className="grandParentContainer">
      <div className="dropdownBar">
        <div className="headerFont">
        <h1 className="title">Let us help you make moving easier!</h1>
          <h2 className="selection-heading">
            Join the MovR community now.
          </h2>
        </div>

        <div className="get-started-small-container">
          <Button
            variant="contained"
            color="secondary"
            className="get-started-small"
          >
            Get Started
          </Button>
        </div>

        <div className="parentContainer">

          <Grid container className='dropdown-container'>

            <Grid item={true} xs={4} className='selection-ddI'>

              <NativeSelect
                className="dropdown-select"
              >
                <option value={""}>What are you looking for?</option>
                {opts.map((options: string, idx: React.Key) => {
                  return (
                    <option value={options} key={idx}>{options}</option>
                  )
                })}
              </NativeSelect>

            </Grid>

            <Grid item={true} xs={4} className='selection-ddII'>

              <NativeSelect
                className="dropdown-select"
              >
                <option value={""}>Select a City</option>
                {cities.map((city: string, idx: React.Key) => {
                  return (
                    <option value={city} key={idx}>{city}</option>
                  )
                })}
              </NativeSelect>

            </Grid>

            <Grid item={true} xs={3} >

              <div className="dropdownBtn">
                <Button
                  variant="contained"
                  color="secondary"
                  className="get-started"
                >
                  Get Started
                </Button>
              </div>


            </Grid>

          </Grid>

        </div>

      </div >
    </div >
  );
}
