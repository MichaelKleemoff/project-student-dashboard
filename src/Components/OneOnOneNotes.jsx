export default function OneOnOneNotes({
	notes,
	oneOnOneNotes,
	setOneOnOneNotes,
}) {
	console.log(notes);

	const notesList = notes;

	return (
		<aside className='notes-aside'>
			<h3>1-on-1 Notes</h3>
			<form className='notes-aside-form'>
				<label htmlFor='commenter'>
					Commenter Name:{' '}
					<input type='text' name='commenter-name' id='commenter' />
				</label>

				<label htmlFor='comment'>
					Comment: <input type='text' name='comment-name' id='comment' />
				</label>

				<section className='notes-btn-section'>
					<input className='notes-btn' type='submit' value='Add Note' />
				</section>
			</form>
		</aside>
	);
}
