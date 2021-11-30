const { pool } = require("../config");

getProjectsForUser = (userId, next) => {
    const queryText = "SELECT * FROM public.projects where userid = $1";

    pool.query(queryText, [userId], (err, res) => {
        if (err) throw err;
        console.log(res.rows);
        next(res.rows);
    });
};

getProject = (projectId, next) => {
    const queryText = "SELECT * FROM public.projects where id = $1";

    pool.query(queryText, [projectId], (err, res) => {
        if (err) throw err;
        console.log(res.rows);
        next(res.rows[0]);
    });
};

addProject = (userId, project, next) => {
    const queryText = `INSERT INTO public.projects(
        userid, name, goalcount, startdate, enddate)
        VALUES ($1, $2, $3, $4, $5)
        returning *;`;

    pool.query(queryText, [userId, project.name, project.goalCount, project.startDate, project.endDate], (err, res) => {
        if (err) throw err;
        next(res.rows);
    });
};

module.exports = {
    getProjectsForUser,
    getProject,
    addProject
}