import React from "react"
import { Link } from "gatsby"
import { TopNav, BottomNavigation } from "../components/index"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import "./index.css"
import BookmarksIcon from "@material-ui/icons/Bookmarks"
import RoomIcon from "@material-ui/icons/Room"
import Container from "@material-ui/core/Container"
import TenderLogoIcon from "../images/tender-logo-icon.png"

class List extends React.Component {
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


        <div style={{ marginBottom: "10px" }}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={12} md={12} lg={8}>
              <Paper>
                <Container>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid sm={8} md={8} lg={11}>
                      <span style={{ color: "#052684" }}>
                        AAI Cargo Logistics and Allied Services Company Ltdrity
                        Of India
                      </span>
                    </Grid>
                    <Grid sm={2} md={2} lg={1}>
                      <div style={{ float: "right" }}>
                        <BookmarksIcon style={{ color: "#052684" }} />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid sm={12} md={12} lg={12}>
                      <div style={{ color: "rgba(96, 96, 96, 0.8)" }}>
                        <RoomIcon fontSize="small" /> Chennai, Tamil Nadu.
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid sm={12} md={12} lg={12}>
                      M/O OF Electrical and Mechanical Installations, AC, water
                      coolers and sliding gate on air side at Integrated Air
                      Cargo Complex at Chennai Airport, Chennai
                    </Grid>
                  </Grid>
                  <br />
                  <hr />

                  <div style={{ textAlign: "center" }}>
                    <Grid container>
                      <Grid item lg={3}>
                        End Date
                      </Grid>

                      <Grid item lg={3}>
                        Opening Date
                      </Grid>

                      <Grid item lg={3}>
                        Tender Fees
                      </Grid>

                      <Grid item lg={3}>
                        EMD Amount
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item lg={3}>
                        27-Apr-2020 06:00 PM{" "}
                      </Grid>

                      <Grid item lg={3}>
                        30-Apr-2020 11:30 AM
                      </Grid>

                      <Grid item lg={3}>
                        1180
                      </Grid>

                      <Grid item lg={3}>
                        Rs. 4,17,950
                      </Grid>
                    </Grid>
                  </div>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </div>


        <div className="mobileView">
          <div className='bottomNav'>
            <BottomNavigation />
          </div>
        </div>

      </div>
    )
  }
}

export default List
