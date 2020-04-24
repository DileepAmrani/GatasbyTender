import React from "react"
import { Link } from "gatsby"
import { TopNav, BottomNavigation } from "../components/index"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import TenderLogoIcon from "../images/tender-logo-icon.png"

import './profile.css'
class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="dekstopView">
          <TopNav />
        </div>

        <div className='mobileView' style={{ textAlign: "center" }}>
          <br />
          <Link to='/'>
            <img src={TenderLogoIcon} style={{ marginBottom: '0' }} />
          </Link>
          <h2 > Mytenders</h2>
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={12} md={12} lg={4}>


            <TextField
              id="standard-search"
              label="Name"
              type="text"
              style={{ width: "100%" }}
              value="Dileep Kumar"
            />
            <br />
            <br />
            <TextField
              id="standard-searh"
              label="Company Name"
              type="text"
              style={{ width: "100%" }}
              value="Kuppusamy & Co"
            />
            <br />
            <br />

            <TextField
              id="standard-searc"
              label="Email"
              type="text"
              style={{ width: "100%" }}
              value="amranidileep44@gmail.com"
            />
            <br />
            <br />

            <label>Keywords</label>
            <br />

            <textarea style={{ width: "100%" }} rows="5">
              garden, road, mainenance, horticulture ...
            </textarea>
            <br />
            <br />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ width: "100%" }}
              value="asdfghjkl"
            />

            <br />

            <br />

          </Grid>
        </Grid>

        <div className="mobileView">
          <div className='bottomNav'>
            <BottomNavigation />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
