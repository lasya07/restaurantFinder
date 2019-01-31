import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Bread extends React.Component{
    render() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="#" style={{color: '#6c757d'}}>Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#"style={{color: '#6c757d'}}>Library</a></BreadcrumbItem>
        <BreadcrumbItem active style={{color: '#6c757d'}}>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
};
}
export default Bread;