import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { Link } from "gatsby"

const useStyles = makeStyles({
  root: { 
  
    backgroundColor: 'black',
  },
})

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
        <Link to='/profile'>
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon color='primary'/>} />
     </Link>
      <Link to='/'>

      <BottomNavigationAction label="Home" icon={<HomeIcon color='primary'/>} />
      </Link>
      
     <Link to='/saved'>
      <BottomNavigationAction label="Saved" icon={<BookmarksIcon color='primary'/>} />
      </Link>

    </BottomNavigation>
  )
}
