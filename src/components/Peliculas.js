import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Peliculas = (props) => {
    //esto ahora se destructura como actions
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadPeliculas();
    }, []);

    console.log(store);

    return (
        <div className="section">
            {store.peliculas.length> 0 ? store.peliculas.map((item=>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" +item.poster_path} />
                <Card.Body>
                    <Link to={`/peliculas/`+ item.id} ><Card.Title>{item.title}</Card.Title></Link>
                </Card.Body>
            </Card>)):null}
        </div>
    )
}

export default Peliculas;