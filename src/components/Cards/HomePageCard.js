
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function HomePageCard({data:{title, description, icon}}) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HomePageCard
