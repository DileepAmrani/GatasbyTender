import React from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import Logo from "../../images/LogoWithText.png"
import Saved from "../../images/Saved.png"
import Profile from "../../images/profile.png"
class TopNav extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Grid container>
          <Grid item sm={4} lg={4} md={4}>
            <br />
           <Link to='/saved'>
           <img src={Saved} alt='' />
           </Link> 
          </Grid>
          <Grid item sm={4} lg={4} md={4}>
            <Link to='/'>
            <img src={Logo} alt='' />
            </Link>
          </Grid>
          <Grid item sm={4} lg={4} md={4}>
            <br />

            <Link to='/login'>


            <img src={Profile} alt='' />
            </Link>

          </Grid>
        </Grid>
      </div>
    )
  }
}

export default TopNav
