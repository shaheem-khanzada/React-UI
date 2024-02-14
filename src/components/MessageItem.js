import React from 'react';
import { Image } from 'react-bootstrap';
import { FiPhoneMissed } from "react-icons/fi";
import AudioPlayer from './AudioPlayer';

const imageURL = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const MessageItem = React.memo(() => {


    return (
        <div style={{ display: 'flex', alignItems: 'end' }}>
            <Image
                style={{ width: 50, height: 50, marginRight: 5 }}
                src={imageURL}
                roundedCircle
            />
            <div className='message-container'>
                <div className='call-icon-container'>
                    <div className='call-icon'>
                        <FiPhoneMissed color='white' size={24} />
                    </div>
                    <div>
                        <h4 style={{ fontWeight: '600', margin: 0 }}>Missed Call</h4>
                        <span>No one answered</span>
                    </div>
                </div>
                <AudioPlayer />
                <div className='message'>
                    <span style={{ color: 'gray' }}>
                        Transcript
                    </span>
                    <p>
                        Hi there. Just checking in to see when the proposal will be ready. Please call me back when you have a chance. Thanks.
                    </p>
                </div>
            </div>
        </div>
    )
});

export default MessageItem;