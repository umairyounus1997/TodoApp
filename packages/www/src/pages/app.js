import React, {useContext} from "react";
import { Router, Link } from "@reach/router";
import netlifyIdentity from "netlify-identity-widget";
import { IdentityContext} from "../../netlifyIdentityContext";
import {Heading, Button, Flex, NavLink, Container   } from 'theme-ui';


let Dash = () => {
   
//    const {user} = netlifyIdentity.currentUser();
  const {user} = useContext(IdentityContext);
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);

    // return <div>{ user && user.user_metadata.full.name}</div>

    return (
        <Container>
          <Flex as="nav">
            <NavLink as={Link} to="/" p={2}>
              Home
            </NavLink>
            <NavLink as={Link} to={"/app"} p={2}>
              Dashboard
            </NavLink>
            {user && (
              <NavLink
                href="#!"
                p={2}
                onClick={() => {
                  netlifyIdentity.logout();
                }}
              >
                Log out {user.user_metadata.full_name}
              </NavLink>
            )}
          </Flex>
          <span> User Dashboard: {user && user.user_metadata.full_name}</span>
        </Container>
      );
    };


 let DashLoggedOut = props => {
     const {user, identity: netlifyIdentity} = useContext(IdentityContext)
     return(
         <Flex>
             <Flex as='nav'>
            <NavLink as={Link} to="/" p={2}>
                Home
            </NavLink>
            <NavLink as={Link} to={"/app"} p={2}>
                Dashboard
            </NavLink>
            {user && (<NavLink href="#!"p={2}>
                {user.user_metadata.full.name}
                </NavLink> )}
            </Flex>
         
        <Flex sx={{ flexDirection: "column", padding:3 }}>
        <Heading as="h1">Get Done</Heading>
        <Button sx={{ marginTop:2, color: 'black' }}
        onClick={ () => { netlifyIdentity.open() }}
    >
        login
        </Button>
        </Flex>
        </Flex>
     )
 }

export default props => {
    const { user } = useContext(IdentityContext);
    if (!user) {
        return (
          <Router>
            <DashLoggedOut path="/app" />
          </Router>
        );
      }
    return (
    <Router>
    <Dash path="/app" />
    </Router>
    );
};
  
