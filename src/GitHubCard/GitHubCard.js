import React from "react"
import Card from "react-bootstrap/Card"
import MickeyMouse from './kitten.jpeg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={Kitten} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>Kitten</Card.Title>
            <Card.Text>
            I am a cute little kitten.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard
