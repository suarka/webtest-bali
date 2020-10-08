import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';

function Home() {
   return (
       <Segment color='green'>
           <Header as='h1' color='green' textAlign='center'>Home</Header>
           <Header as='h3' textAlign='center'>
               <Icon name='check circle' color='green'/>
               Selamat Datang
           </Header>
           <Button as ={Link} to='/Register' color='red' fluid>
               <Icon name='log out'/>
               Keluar
           </Button>
       </Segment>
   );
}
