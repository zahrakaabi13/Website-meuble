import { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'

function Content(){  
    const [content,setContent] = useState([])
    const getContent = ()=>{
        fetch('content.json')
        .then(response=>response.json())
        .then(content=>setContent(content))
    }
    useEffect(()=> {getContent()},[])
    
    return(
        <div className="container content">
            {content.map(element=>
               
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={element.Image} />
                    <Card.Body>
                        <Card.Title>{element.Name}</Card.Title>
                        <Card.Text>{element.Price}</Card.Text>
                    </Card.Body>
                </Card>
              
            )}
        </div>
    )
}
export default Content