import React from "react";
import { Card } from "react-bootstrap";

import ListDep from "./ListDep";

const LeftSide = () =>{

    return(
        <>
            <Card>
                <Card.Header>
                    
                </Card.Header>
                <Card.Body>
                   <ListDep />
                </Card.Body>
                <Card.Footer>
    
                </Card.Footer>
            </Card>
        </>
    )
}

export default LeftSide