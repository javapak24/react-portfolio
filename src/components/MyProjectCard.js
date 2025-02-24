import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const MyProjectCard = ({card}) => (
  <Card centered>
    <Image src= {card.image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{card.name}</CardHeader>
      <CardMeta>
        <span className='date'>Joined in 2015</span>
      </CardMeta>
      <CardDescription>
      {card.description}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a href={card.gitUrl} >
        <Icon name='github' />
      </a>
      <a href={card.liveViewUrl} >
        <Icon name='th' />
      </a>
    </CardContent>
  </Card>
)

export default MyProjectCard