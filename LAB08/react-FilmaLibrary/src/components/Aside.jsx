import React from 'react';
import {useNavigate} from "react-router-dom"

function AsideButton(props){
    const navigate=useNavigate();
    return(<>
    {props.Active==props.Name && <a  href="#" className='list-group-item list-group-item-action active' >{props.Name}</a>}
    {props.Active!=props.Name && <a href="#" className='list-group-item list-group-item-action' onClick={() => navigate("/FilmLibrary/" + props.Name)}>{props.Name}</a>}
    </>);
}
function Aside(props){
    return (
            <>       
                <ul className='list-group list-group-flush' >
                    <AsideButton  Name={"All"} Active={props.active}  choose={props.choose}/>
                    <AsideButton  Name={"Favorite"} Active={props.active} choose={props.choose}/>
                    <AsideButton  Name={"Best rated"} Active={props.active} choose={props.choose}/>
                    <AsideButton  Name={"Seen last month"} Active={props.active} choose={props.choose}/>
                    <AsideButton  Name={"Unseen"} Active={props.active} choose={props.choose}/>
                </ul>
            </>
            );
}
export default Aside;