import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../features/app/App';
import MentorContainer from '../features/mentor/MentorContainer';
import StudentContainer from '../features/student/StudentContainer';
import TopicContainer from '../features/topic/TopicContainer';
import GradeContainer from '../features/grade/GradeContainer';
import StudentTopicContainer from '../features/studentTopicList/StudentTopicContainer';
import InstructorContainer from '../features/instructor/InstructorContainer';
import MentorTopic from '../features/mentorTopicList/MentorTopic';


export default (
	<Route path="/" component={App}>
		<Route path="/student" component={StudentContainer}/>
		<Route path="/mentor" component={MentorContainer}/>
		<Route path="/mentor/:mentorId" component={MentorTopic}/>
		<Route path="/grade" component={GradeContainer}/>
		<Route path="/topic" component={TopicContainer}/>
		<Route path="/studentTopic" component={StudentTopicContainer}/>
		<Route path="/instructor" component={InstructorContainer}/>
	</Route>
);
