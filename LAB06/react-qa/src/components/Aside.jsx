import Nav from 'react-bootstrap/Nav';
import React,{useState} from 'react';

function AsideButton(props){

    if(props.Active==true){
        return (<a href="#" className='list-group-item list-group-item-action active'>{props.Name}</a>);
    }else{
        return (<a href="#" className='list-group-item list-group-item-action'>{props.Name}</a>);
    }
}
function Aside(props){
    
    return (
            <>       
                <ul className='list-group list-group-flush' >
                    <AsideButton  Name={"All"} Active={true}/>
                    <AsideButton  Name={"Favorite"} Active={false}/>
                    <AsideButton  Name={"Best rated"} Active={false}/>
                    <AsideButton  Name={"Seen last month"} Active={false}/>
                    <AsideButton  Name={"Unseen"} Active={false}/>
                </ul>


            </>
            /*<>
                <div className='collapse col-md-3 bg-light'>
                    <div className='mb-3'>
                        <h5 className='mb-3'>Filters</h5>
                        <ul className='nav nav-pills flex-column gap-2 mb-auto'>
                            <AsideButton Name={"All"}/>
                            <AsideButton Name={"Favorite"}/>
                            <AsideButton Name={"Best rated"}/>
                            <AsideButton Name={"Seen last month"}/>
                            <AsideButton Name={"Unseen"}/>
                        </ul>
                    </div>
                </div>
            </>*/
    );
}

export default Aside;
