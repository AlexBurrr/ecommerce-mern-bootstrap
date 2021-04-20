import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'



const ProductScreen = ({ match }) => {
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails


    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])


    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
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
            )}

        </>
    )
}

export default ProductScreen
