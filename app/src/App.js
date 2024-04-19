import { useEffect, useState } from 'react';
import './App.css';
import { fetchJobs } from './services/jobService';
import Jobs from './components/Jobs';

function App() {
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		const loadJobs = async () => {
			const fetchedJobs = await fetchJobs();
			setJobs(fetchedJobs);
		};
		loadJobs();
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<h1>Job Listings</h1>
			</header>
			<main>
				{jobs.map((job) => (
					<Jobs
						key={job.id}
						job={job}
					/>
				))}
			</main>
		</div>
	);
}

export default App;
