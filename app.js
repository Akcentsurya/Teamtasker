this is a test project

function addTask(task) {
	return {id: Date.now(), task };
}

function updateTask(id, task) {
	return { id, task };
}


function bugTask(task) {
	return { id, task};
}

function hotfixTask(task) {
	return { id, task};
}

