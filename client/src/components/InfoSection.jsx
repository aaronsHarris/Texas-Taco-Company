import React from 'react'
import { Button } from '../styles/Button.styles'

const InfoSection = () => {
  return (
    <div>
      <Section>
      <Container>
      <ColumnLeft>
      <h1>Heading</h1>
      <p>paragraph</p>
      <p>paragraph</p>
    <Button to='/menu'>Label</Button>
      </ColumnLeft>
      <columnRight>
      <img src='' alt='food' />
      </columnRight>
      </Container>
      </Section>
    </div>
  )
}

export default InfoSection
