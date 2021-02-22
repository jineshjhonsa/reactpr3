import React, { Component } from 'react';
import MyInfo from './page1';
import Table from './table'

class Body extends Component {

    
    render() {
        var displaycontent = ()=>{
            var activetab = this.props.activetab;
            if(activetab ==1){
                return <MyInfo/>
            }else if (activetab == 2){
                return <div>page 2</div>
            }else{
                return <Table />
            }
        }

        
        return (displaycontent())
            
        
    }
}
export default Body;
