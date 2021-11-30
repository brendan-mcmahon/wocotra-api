const { pool } = require("../config");

getLogsForProject = (projectId, next) => {
    const queryText = "SELECT * FROM public.logs where projectid = $1";

    pool.query(queryText, [projectId], (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

getLogsForProjectInDateRange = (projectId, startDate, endDate, next) => {
    const queryText = "SELECT * FROM public.logs where projectid = $1";

    pool.query(queryText, [projectId], (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

addLog = (projectId, count, next) => {
    const queryText = `INSERT INTO public.logs(
        projectid, count, date)
        VALUES ($1, $2, $3)
        returning *;`;

        console.log(`entering ${projectId}, ${count}`);

    pool.query(queryText, [projectId, count, new Date()], (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

module.exports = {
    getLogsForProject,
    getLogsForProjectInDateRange,
    addLog
}