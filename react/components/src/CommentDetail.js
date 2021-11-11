import React from 'react';
import ApprovalCard from './ApprovalCard';

const CommentDetail = props => {
    //console.log(props);
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author} 
                </a> 
                <div class="metadata">
                    <span className="date">
                       {props.timeAgo}
                    </span>
                </div>
                <div className="text">
                    {props.text} 
                </div>
            </div>
        </div>


    );
};


export default CommentDetail;