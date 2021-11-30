var express = require('express');
var router = express.Router();
const { getProjectsForUser, getProject, addProject } = require('../repositories/project');

const getProjectWithLogs = require('./getProject');

router.route('/:userId').get((req, res) => {
    console.log('getting projects');
    console.log(req.params);
    getProjectsForUser(req.params.userId, (projects) => res.status(200).json(projects));
});

router.route('/:userId/:projectId').get((req, res) => {
    getProjectWithLogs(req.params.projectId, project => res.status(200).json(project));
});

router.route('').post((req, res) => {
    addProject(req.body.userId, req.body.project, (project) => res.status(200).json(project));
});

router.route('/test').get((req, res) => {
    console.log('getting projects');
    console.log(req.params);
    res.status(200).json({message: 'Success'});
});


module.exports = router;