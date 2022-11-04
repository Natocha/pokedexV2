import Head from "next/head";
import React from "react";
import { Navbar, Button, Link, Text, Collapse } from "@nextui-org/react";
const Layout = ({children,title}) =>{
    return ( 
        <>
        <Head>


        </Head>
        <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Text b color="Red" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="Red" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
        <Navbar.CollapseItem>
          hola
        </Navbar.CollapseItem>
      </Navbar.Collapse>
      </Navbar>
        <main> {children} </main>
        </>
    );
};
 export default Layout ;

