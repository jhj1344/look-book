import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Nav(props) {
    return (
        <HeaderContainer>
            <Link to='/'>
                <h1>logo</h1>
            </Link>
        </HeaderContainer>
    );
}

export default Nav;

const HeaderContainer = styled.header`
    
`