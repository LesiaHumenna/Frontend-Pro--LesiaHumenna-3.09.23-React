import { Nav } from 'react-bootstrap';
import './Navigation.css';

export default function NavigationL(){
return(
<div>
    <Nav className='class-nav'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <Nav.Link className='class-item' href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='class-item' eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='class-item' eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='class-item' eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
</div>
);
}