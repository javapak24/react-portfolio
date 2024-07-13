import React from 'react'
import {
    Container,
    Header,
    Image,
  } from 'semantic-ui-react'

export default function MyMain() {
  return (
    <div>
       <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Hello!</Header>
      <h1>Web Developer</h1>
      <Image src='https://picsum.photos/id/1/200/300' size='small' circular />
        <p>Brief bio</p>
     </Container>

    </div>
  )
}
