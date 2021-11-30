const { getProject } = require('../repositories/project');
const { getLogsForProject } = require('../repositories/log');

function getProjectWithLogs(projectId, next) {
    getProject(projectId, (project) => {
        getLogsForProject(projectId, (logs => {
            next({
                ...project,
                logs: logs
            });
        }));
    });
}

module.exports = getProjectWithLogs;