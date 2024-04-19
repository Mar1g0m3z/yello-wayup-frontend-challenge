import React from 'react';

function Jobs({ job }) {
	return (
		<>
			<div key={job.id}>
				<h2>
					{job.title} - {job.company}
				</h2>
				<p>{job.description}</p>
				<p>Location: {job.location}</p>
				<button onClick={() => alert('Apply for ' + job.title)}>Apply</button>
			</div>
		</>
	);
}

export default Jobs;
