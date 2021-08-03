import React from 'react'
import { useSelector } from "react-redux";
import { NavLink, Link } from 'react-router-dom';
import { Icon, Menu, Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';


export default function Navi() {


  const {authItem} = useSelector(state => state.auth)

  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const history = useHistory()

  // function handleSignOut(params) {
  //   setIsAuthenticated(false)
  //   history.push("/")
  // }

  // function handleSignIn(params) {
  //   setIsAuthenticated(true)
  // }

    return (
        <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large"/>
            HRMS
          </Menu.Item>
          <Menu.Item name="Ana Sayfa" as={NavLink} to="/jobAdvertList"/>
          <Menu.Menu position="right">
          {authItem[0].loggedIn && authItem[0].user.userType===2 &&  <Button style={{margin: '0.5em'}} primary as={Link} to={"/jobAdvertCreate"}>
              İlan Ekle
            </Button>}
            {authItem[0].loggedIn && authItem[0].user.userType===1 &&  <Button style={{margin: '0.5em'}} color="red" as={Link} to={`/jobAdFavorites`}>
              <Icon name='heart' />
              Favori İlanlar
            </Button>}
            
            {authItem[0].loggedIn?<SignedIn/>:<SignedOut/>}
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
    )
}
