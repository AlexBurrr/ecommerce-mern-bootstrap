import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)


    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6} >
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3} >
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroup>
                            Price: ${product.price}
                        </ListGroup>
                        <ListGroup>
                            Description: ${product.description}
                        </ListGroup>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup>
                        <ListGroup variant='flush'>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'in stock' : 'Out of stock'}
                                </Col>
                            </Row>
                        </ListGroup>
                        <ListGroup variant='flush'>
                            <Button
                                className='btn-block'
                                type='button'
                                disabled={product.countInStock === 0}

                            >
                                Add to cart
                            </Button>
                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default ProductScreen
