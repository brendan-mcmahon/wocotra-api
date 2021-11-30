var express = require('express');
var router = express.Router();
const { getLogsForProject, addLog } = require('../repositories/log');
const getProjectWithLogs = require('./getProject');

router.route('/:projectId').get((req, res) => {
    console.log(`getting logs for ${req.params.projectId}`);
    console.log(req.params);
    if (!!!req.params.projectId) res.status(404).send();
    else {
        getLogsForProject(req.params.projectId, (logs) => { console.log(logs); res.status(200).json(logs); });
    }
});

router.route('/:projectId').post((req, res) => {
    console.log(req.body);
    addLog(req.params.projectId, req.body.count, (log) => {
        getProjectWithLogs(req.params.projectId, p => res.status(200).json(p));
    });
});

module.exports = router;