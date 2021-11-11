import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <div>
                    <h4>Warning!!</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="CHANG HOON LEE" 
                    text="기상체크" 
                    timeAgo="yesterday at 05:00"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>    
                <CommentDetail 
                    author="OHJ ( ohnology ceo )" 
                    text="sleep when you die" 
                    timeAgo="yesterday at 02:00" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    text="NIKE HAS GGONDAE SLOGUN 저스트 두잇은 꼰대이데올로기에 저항하는 어떠한 레지스탕스적인 하나의 슬로건 멘트라고 할 수 있어" 
                    timeAgo="today at 03:00"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="HyeonJun Oh ( youngest manager (명품DB의 표준 '오놀로지' 최연소 지점장)) " 
                    text="아직도 구DB로 영업하시나요?? 🤔🤔🤔 국내유일 명품DB 취급 , 오놀로지에서 무료제공 열정만 가지고 오세요!😡😡😡😡 제가 성장시켜드립니다👍💪💪" 
                    timeAgo="today at 05:00" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="CHANG HOON LEE" 
                    text="기상체크" 
                    timeAgo="now" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="JOOOOOOON SUN" 
                    text="요즘 개발 공부하고있어,, Java 뭐시기.." 
                    timeAgo="now" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));