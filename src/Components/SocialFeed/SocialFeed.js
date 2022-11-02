import React, { useContext } from 'react';
import { UserContext } from './DB';
import styled from 'styled-components';
import'./Stylesheet.scss'

const SocialFeedData = styled.a`
    width:30%;
    height: 120px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    padding: 0 25px;
    justify-content: center;
    margin: 35px auto;

@media (max-width: 575px) {
  width:95%;
  margin: 15px auto;
};

@media (min-width: 667px) and (max-width: 991px) {
  width:60%;
}

@media (min-width: 992px) and (max-width: 1199px) {
  width:50%;
}
`

function SocialFeed() {
    const users = useContext(UserContext);
    return (
            <>
                {users.map(({ name, content,}, index) => {
                    return <SocialFeedData key={index} className="social-feed">
                            <h4>{name}</h4>
                            <p>{content}</p>
                           </SocialFeedData>    
                })}
            </>
    )
}

export default SocialFeed