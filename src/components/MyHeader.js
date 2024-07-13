import React from 'react'
import {
  Container,
  Header,
  Image,
  Menu,
} from 'semantic-ui-react'

export default function MyHeader() {
  return (
    <div>
          <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
         Java
        </Menu.Item>
        <Menu.Item as='a' href="/">Home</Menu.Item>
        <Menu.Item as='a' href="/portfolio">Portfolio</Menu.Item>
       
      </Container>
    </Menu>

    </div>
  )
}
