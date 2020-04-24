import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TopNav } from "../components/index"

// const SecondPage = () => (
//     <Layout>
//         <SEO title="Page two" />
//         <h1>Hi from the second page</h1>
//         <p>Welcome to page 2</p>
//         <Link to="/">Go back to the homepage</Link>
//     </Layout>
// )

// export default 

class Home extends React.Component{
    render(){
        return(
            <div>
                <TopNav />
                <p>Home Page</p>
            </div>
        )
    }
}

export default Home