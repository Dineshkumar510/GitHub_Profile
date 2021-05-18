/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Card, CardBody} from 'reactstrap';

const UserCard = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/>
                <CardBody>
                    <div className="text-primary">{user.name}</div>
                    <div className="text-primary">{user.location}</div>
                    <div className="text-primary">{user.bio}</div>
                    <div className="text-primary">Available for hire: {user.hireable ? 'Yes': 'Nope'}</div>
                    <div className="text-primary">Followers: {user.followers}</div>
                    <div className="text-primary">Following: {user.following}</div>
                    <div className="text-primary">{user.blog}</div>
                </CardBody>
        </Card>
    );
};

export default UserCard;