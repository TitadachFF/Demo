import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";

const Cardcomponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Card style={{ width: '40rem' }}>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cardcomponent;
