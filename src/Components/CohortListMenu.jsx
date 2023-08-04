export default function CohortListMenu({ studentData, setCohortName }) {
	const cohortList = [
		...new Set(studentData.map((student) => student.cohort.cohortCode)),
	];

	const sortedCohortList = [...cohortList].sort((a, b) => {
		if (a.slice(-1) < b.slice(-1)) {
			return -1;
		} else if (a.slice(-1) > b.slice(-1)) {
			return 1;
		} else {
			return 0;
		}
	});

	const handleCohortClick = (cohortName) => setCohortName(cohortName);

	return (
		<div className='cohort-list'>
			<h2>Choose a Class by Start Date</h2>

			<h3 onClick={() => setCohortName('All Students')}>All Students</h3>

			<ul>
				{sortedCohortList.map((cohortName) => (
					<li
						key={crypto.randomUUID()}
						onClick={() => handleCohortClick(cohortName)}
					>
						{cohortName.split(/[0-9]/g)} {cohortName.slice(-4)}
					</li>
				))}
			</ul>
		</div>
	);
}
