import { useState } from 'react';

import OneOnOneNotes from './OneOnOneNotes';

export default function StudentDetailsCard({
	codewarsCurrentTotal,
	codewarsCurrentLastWeek,
	codewarsGoalTotal,
	cohortScoresAssignments,
	cohortScoresProjects,
	cohortScoresAssessments,
	certificationsResume,
	certificationsLinkedIn,
	certificationsGitHub,
	certificationsMockInterview,
	notes,
}) {
	const [oneOnOneNotes, setOneOnOneNotes] = useState([]);
	console.log(notes);

	const percentFormat = Number(
		((codewarsCurrentTotal / codewarsGoalTotal) * 100).toFixed(0)
	);

	return (
		<>
			<section className='details-card'>
				<aside className='details-aside'>
					<h3>Codewars</h3>

					<h4 className='student-details-color1'>
						Current Total:{' '}
						<span className='student-details-color2'>
							{codewarsCurrentTotal}
						</span>
					</h4>
					<h4 className='student-details-color1'>
						Last Week:{' '}
						<span className='student-details-color2'>
							{codewarsCurrentLastWeek}
						</span>
					</h4>
					<h4 className='student-details-color1'>
						Goal:{' '}
						<span className='student-details-color2'>{codewarsGoalTotal}</span>
					</h4>
					<h4 className='student-details-color1'>
						Percent of Goal Achieved:{' '}
						<span
							style={
								percentFormat >= 100
									? { color: 'green' }
									: percentFormat > 50 && percentFormat < 100
									? { color: 'goldenrod' }
									: { color: 'red' }
							}
						>
							{percentFormat}%
						</span>
					</h4>
				</aside>

				<aside className='details-aside'>
					<h3>Scores</h3>

					<h4
						className='student-details-color1
				'
					>
						Assignments:{' '}
						<span
							className='student-details-color2
					'
						>
							{Number((cohortScoresAssignments * 100).toFixed(0))}%
						</span>
					</h4>
					<h4 className='student-details-color1'>
						Projects:{' '}
						<span className='student-details-color2'>
							{Number((cohortScoresProjects * 100).toFixed(0))}%
						</span>
					</h4>
					<h4 className='student-details-color1'>
						Assessments:{' '}
						<span className='student-details-color2'>
							{Number((cohortScoresAssessments * 100).toFixed(0))}%
						</span>
					</h4>
				</aside>

				<aside className='details-aside'>
					<h3>Certifications</h3>

					<h4
						className='student-details-color1
					'
					>
						Resume:{' '}
						{certificationsResume ? (
							<span>&#x2705;</span>
						) : (
							<span>&#x274C;</span>
						)}
					</h4>

					<h4
						className='student-details-color1
					'
					>
						LinkedIn:{' '}
						{certificationsLinkedIn ? (
							<span>&#x2705;</span>
						) : (
							<span>&#x274C;</span>
						)}
					</h4>
					<h4 className='student-details-color1'>
						GitHub:{' '}
						{certificationsGitHub ? (
							<span>&#x2705;</span>
						) : (
							<span>&#x274C;</span>
						)}
					</h4>

					<h4
						className='student-details-color1
					'
					>
						Mock Interview:{' '}
						{certificationsMockInterview ? (
							<span>&#x2705;</span>
						) : (
							<span>&#x274C;</span>
						)}
					</h4>
				</aside>
			</section>

			<OneOnOneNotes
				notes={notes}
				oneOnOneNotes={oneOnOneNotes}
				setOneOnOneNotes={setOneOnOneNotes}
			/>
		</>
	);
}
