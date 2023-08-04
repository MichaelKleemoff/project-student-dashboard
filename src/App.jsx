import { useState } from 'react';
import studentData from './data/data.json';

import NavBar from './Components/NavBar';
import CohortListMenu from './Components/CohortListMenu';
import StudentList from './Components/StudentList';

export default function App() {
	const [students, setStudents] = useState(studentData);
	const [cohortName, setCohortName] = useState('All Students');

	return (
		<div className='App'>
			<NavBar />
			<main>
				<CohortListMenu
					studentData={studentData}
					cohortName={cohortName}
					setCohortName={setCohortName}
				/>
				<StudentList
					studentData={studentData}
					students={students}
					cohortName={cohortName}
				/>
			</main>
		</div>
	);
}
