import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TopNav, BottomNavigation } from "../components/index"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import "./index.css"

import TenderLogoIcon from "../images/tender-logo-icon.png"
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="dekstopView">
          <TopNav />
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="mobileView">
            <br />
            <img src={TenderLogoIcon}  style={{marginBottom: '0'}}/>
            <h2> Mytenders</h2>
          </div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={10} md={10} lg={6}>


              <div class="input-group dekstopView">
            <input type="text" class="form-control" placeholder="Search" />
            {/* <div class="input-group-append">
                  <button class="btn btn-secondary" type="button">
                  <i class="fa fa-search"></i>
                  </button>
                </div> */}
          </div>

                </Grid>
              </Grid>
                <div className='dekstopView'>
          <div style={{ marginTop: "30px" }}>
            <p>OR</p>
          </div>
                </div>
          <p>Advanced Tender Search</p>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item sm={12} md={12} lg={5}>
              <Paper className="paper">
                <select className="dropdown">
                  <option value="volvo">Organization</option>
                  <option value="saab">
                    AAI Cargo Logistics and Allied Services Company
                  </option>
                  <option value="opel">
                    Agricultural and Processed Food Products Export
                  </option>
                  <option value="audi">Air India</option>
                </select>

                <select className="dropdown">
                  <option value="volvo">Department</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>

                <select className="dropdown">
                  <option value="volvo">State</option>
                  <option value="saab">Tamil Nadu</option>
                  <option value="opel">Delhi</option>
                  <option value="audi">Maharastra</option>
                </select>

                <select className="dropdown">
                  <option value="volvo">City </option>
                  <option value="saab">Chennai</option>
                  <option value="opel">New Delhi</option>
                  <option value="audi">Nagpur</option>
                </select>

                <Button variant="contained" color="primary" size="large">
                  Search
                </Button>
              </Paper>
        <div className='mobileView'>
          <div>
            <span>OR</span>
          </div>
        </div>

        <div class="input-group mobileView">
          <input type="text" class="form-control" placeholder="Search" />
          {/* <div class="input-group-append">
                  <button class="btn btn-secondary" type="button">
                  <i class="fa fa-search"></i>
                  </button>
                </div> */}
        </div>
<br />

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

export default Home
