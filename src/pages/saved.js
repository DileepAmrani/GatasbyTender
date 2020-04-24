import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TopNav, BottomNavigation } from "../components/index"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import TenderLogoIcon from "../images/tender-logo-icon.png"
import BookmarksIcon from "@material-ui/icons/Bookmarks"
import RoomIcon from "@material-ui/icons/Room"
import Container from "@material-ui/core/Container"

import "./index.css"
class List extends React.Component {
  render() {
    return (
      <div>
        <div className="dekstopView">
          <TopNav />
        </div>

        <div className="mobileView" style={{ textAlign: "center" }}>
          <br />
          <Link to="/">
            <img src={TenderLogoIcon} style={{ marginBottom: "0" }} />
          </Link>
          <h2> Mytenders</h2>
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
                        {/* <BookmarksIcon style={{ color: "#052684" }} /> */}
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
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid lg={3} sm={3} xs={3} md={3}>
                        <Grid item lg={6}>
                          End Date
                        </Grid>
                        <Grid item lg={6}>
                          27-Apr-2020 06:00 PM{" "}
                        </Grid>
                      </Grid>


                      <Grid lg={3} sm={3} xs={3} md={3}>
                        <Grid item lg={6}>
                          Closing Date
                        </Grid>
                        <Grid item lg={6}>
                          04 FEB 2020
                        </Grid>
                      </Grid>

                      <Grid lg={3} sm={3} xs={3} md={3}>
                        <Grid item lg={6}>
                          Estimated Amount
                        </Grid>
                        <Grid item lg={6}>
                          Rs. 10,000
                        </Grid>
                      </Grid>

                      <Grid lg={3} sm={3} xs={3} md={3}>
                        <Grid item lg={6}>
                          EMD Amount
                        </Grid>
                        <Grid item lg={6}>
                          Rs. 15,000
                        </Grid>
                      </Grid>
                      
                     
                    </Grid>


                  </div>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="mobileView">
          <div className="bottomNav">
            <BottomNavigation />
          </div>
        </div>
      </div>
    )
  }
}

export default List
