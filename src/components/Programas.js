import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext';
import { Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import { BsHeartFill } from 'react-icons/bs';
import Cargando from './Cargando';

export const Programas = (props) => {
   
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.loadProgramas();
    }, []);

    console.log(store);

    return (
        <div className="section">
            {store.programas.length> 0 ? store.programas.map((item=>
            <div className="card border-0" style={{width: "15rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} className="card-img-top" alt="..." />
                <div className="card-body px-0">
                  <Link to={"/programas/"+ item.id}><h5 className="card-title text-white">{item.name}</h5></Link>  
                  <div className="row">
                    <div>
                        <p className="card-text text-secondary m-0">{item.first_air_date}</p>
                    </div>
                  </div>   
                  <div className="row">
                     <div className="col-10">
                        <p className="card-text text-warning"><StarFill className="star"/> {item.vote_average}</p>  
                    </div>
                    <div className="col-2">
                            <Link className="text-danger">
                               <BsHeartFill onClick={()=> actions.addFavoritos(item.name) }/>
                            </Link>
                    </div>
                  </div>          
                </div>
            </div>)):<Cargando/>}
        </div>
    )
}

export default Programas;