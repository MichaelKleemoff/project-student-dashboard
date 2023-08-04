import studentData from './data/data.json';
import { useState } from 'react';

import NavBar from './Components/NavBar';
import CohortListMenu from './Components/CohortListMenu';
import StudentList from './Components/StudentList';

export default function App() {
	const [students, setStudents] = useState(studentData);
	console.log(students);

	return (
		<div className='App'>
			<NavBar />
			<main>
				<CohortListMenu />
				<StudentList studentData={studentData} students={students} />
			</main>
		</div>
	);
}
