export default function OneOnOneNotes({ notes }) {
	console.log(notes);

	const notesList = notes;

	return (
		<aside className='notes-form'>
			<h3>1-on-1 Notes</h3>
			<form>
				<label htmlFor='commenter'>
					<input type='text' name='commenter-name' id='commenter' />
				</label>
				<br />
				<br />
				<label htmlFor='comment'>
					<input type='textfield' name='comment-name' id='comment' />
				</label>
				<input type='submit' value='Add Note' />
			</form>
		</aside>
	);
}
