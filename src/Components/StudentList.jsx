import StudentCard from './StudentCard';

export default function StudentList({ studentData, students, cohortName }) {
	let cohortResult = students.filter(
		(student) => student.cohort.cohortCode === cohortName
	);

	return (
		<div className='student-list'>
			{cohortName === 'All Students' ? (
				<>
					<h2 className='student-list-color'>All Students</h2>
					<br />
				</>
			) : (
				<>
					<h2 className='student-list-color'>
						{cohortName.split(/[0-9]/g)} {cohortName.slice(-4)}
					</h2>
					<br />
				</>
			)}

			<p>
				<span className='total-students-color'>
					Total Students:{' '}
					{cohortName === 'All Students' ? (
						<span>{studentData.length}</span>
					) : (
						<span>{cohortResult.length}</span>
					)}
				</span>
			</p>

			{cohortName === 'All Students'
				? students.map((student) => {
						return (
							<div key={student.id}>
								<StudentCard key={student.id} student={student} />
							</div>
						);
				  })
				: students
						.filter((student) => student.cohort.cohortCode === cohortName)
						.map((student) => {
							return (
								<div key={student.id}>
									<StudentCard key={student.id} student={student} />
								</div>
							);
						})}
		</div>
	);
}
