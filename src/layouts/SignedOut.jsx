import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";



export default function SignedOut() {
  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button primary as={NavLink} to="/jobseekerRegister">Kayıt Ol</Button>
          <Button.Or/>
          <Button positive as={NavLink} to="/login">Giriş Yap</Button>
        </Button.Group>
      </Menu.Item>
    </div>
  );
}
