import React from "react"
import { Link } from "gatsby"
import { BottomNavigation } from "../components/index"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import TenderLogoIcon from "../images/tender-logo-icon.png"


class Login extends React.Component {
  render() {
    return (
      <div>
        {/* <TopNav /> */}

        <div style={{ textAlign: "center" }}>
          <br />
          <Link to='/'>
            <img src={TenderLogoIcon} style={{ marginBottom: '0' }} />
          </Link>
          <h2 > Mytenders</h2>
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={12} md={12} lg={4}>
            <br />

            <br />

            <TextField
              id="standard-search"
              label="Phone Number"
              type="text"
              style={{ width: "100%" }}
            />
            <br />
            <br />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ width: "100%" }}
            />

            <br />
            <br />

            <p style={{ float: 'right', padding: "5px" }}>Don't have Account?<Link to='/register'> Register </Link></p>


            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: "100%" }}
            >
           Login
            </Button>
          </Grid>
        </Grid>
        <div className="mobileView">
          <div className="bottomNav">
            <BottomNavigation />
          </div>
        </div>
      </div>
    )
  }
}

export default Login
