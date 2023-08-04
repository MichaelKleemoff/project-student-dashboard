import { useState } from 'react';

export default function StudentCard({ student }) {
	const {
		names: { preferredName, middleName, surname },
		username,
		dob,
		profilePhoto,
		codewars,
		cohort,
		certifications,
	} = student;

	const date = new Date(dob);

	const options = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	};

	const birthDate = date.toLocaleDateString('en-US', options);

	return (
		<div className='student-card'>
			<section className='student-info-image'>
				<img
					src={profilePhoto}
					alt={`${preferredName} ${middleName} ${surname}`}
				/>
			</section>
			<section className='student-info student-info-color'>
				<h2>
					{preferredName} {middleName[0]}. {surname}
				</h2>

				<p>{username}</p>

				<p>
					<span className='birth-date'>Birthday: </span>
					{birthDate}
				</p>
			</section>
		</div>
	);
}
