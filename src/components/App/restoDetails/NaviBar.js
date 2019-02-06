import React from 'react';
import {withRouter} from 'react-router-dom';

class NaviBar extends React.Component{
    render() {
        const ul= {
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          overflow: 'hidden',
          backgroundColor: '#333',
          width: '100%',
          position: 'sticky',
          top:'0'
        }
        
        const li= {
          float: 'left'
        }
        
        const a= {
          
          display: 'block',
          color: '#fffa8b',
          textAlign: 'center',
          padding: '14px 16px',
          textDecoration: 'none'
        }
    

  return (
   
<div>

    <ul style={ul}>
    <li style={li}><a href="/Overview" style={a}>Overview</a></li>
    <li style={li}><a href={"/Menu"} style={a}>Menu</a></li>
    <li style={li}><a href="/Photo" style={a}>Photos</a></li>
    <li style={li}><a href="/Review" style={a}>Reviews</a></li>
    </ul>   
    </div>
)
}
}
export default withRouter(NaviBar);



