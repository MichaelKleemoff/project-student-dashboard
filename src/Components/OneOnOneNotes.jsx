import { useState } from 'react';

export default function OneOnOneNotes({ oneOnOneNotes, setOneOnOneNotes }) {
	const [newComment, setNewComment] = useState({
		commenter: '',
		comment: '',
	});

	function addNewComment() {
		const createNewComment = {
			commenter: newComment.commenter,
			comment: newComment.comment,
		};
		setOneOnOneNotes([...oneOnOneNotes, createNewComment]);
	}

	function handleSubmit(event) {
		event.preventDefault();

		addNewComment();

		resetForm();
	}

	function handleTextChange(event) {
		setNewComment({
			...newComment,
			[event.target.id]: event.target.value,
		});
	}

	function resetForm() {
		setNewComment({
			commenter: '',
			comment: '',
		});
	}

	return (
		<aside className='notes-aside'>
			<h3>1-on-1 Notes</h3>
			<form className='notes-aside-form' onSubmit={handleSubmit}>
				<label htmlFor='commenter'>
					Commenter Name:{' '}
					<input
						type='text'
						name='commenter-name'
						value={newComment.commenter}
						onChange={handleTextChange}
						id='commenter'
						required
					/>
				</label>

				<label htmlFor='comment'>
					Comment:{' '}
					<input
						type='text'
						name='comment-name'
						value={newComment.comment}
						onChange={handleTextChange}
						id='comment'
						required
					/>
				</label>

				<section className='notes-btn-section'>
					<input className='notes-btn' type='submit' value='Add Note' />
				</section>
			</form>

			<ul>
				{oneOnOneNotes.length >= 1
					? oneOnOneNotes.map((note) => (
							<li
								key={crypto.randomUUID()}
							>{`${note.commenter} says, "${note.comment}"`}</li>
					  ))
					: null}
			</ul>
		</aside>
	);
}
