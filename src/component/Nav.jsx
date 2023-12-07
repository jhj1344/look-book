import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Nav(props) {
    return (
        <HeaderContainer>
            <header>
                <div>

                    {/* <a href="/">logo</a> */}

                    <Link to='/'>
                        <h1>logo</h1>
                    </Link>

                    <nav>
                        <ul>
                            <li><Link to='링크'>spring</Link></li>
                            <li><Link to='링크'>summer</Link></li>
                            <li><Link to='링크'>fall</Link></li>
                            <li><Link to='링크'>winter</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </HeaderContainer>

    );
}

export default Nav;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    position: relative;
    padding: 12px;
    gap: 24px;
    ul{
        display: flex;
        gap: 100px;
        position: absolute;
        margin-top: 100px;
        left: 50%;
        transform: translateX(-50%);
    }

        

`

