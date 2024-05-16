import Nav from 'react-bootstrap/Nav';
import React,{useState} from 'react';

function AsideButton(props){

    if(props.Active==props.Name){
        return (<a  href="#" className='list-group-item list-group-item-action active' onClick={() => props.choose(props.Name)}>{props.Name}</a>);
    }else{
        return (<a href="#" className='list-group-item list-group-item-action' onClick={() => props.choose(props.Name)}>{props.Name}</a>);
    }
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
