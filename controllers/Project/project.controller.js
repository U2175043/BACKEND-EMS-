const Project = require('../../models/project.model')

// Get All Projects 
exports.getProjects = (req, res) => {
    Project.find()
        .populate("portals")
        .exec(function (err, project) {
            if (err) res.send("err");
            res.send(project);
        });
};

// Add a new Project 
exports.addProject = (req, res) => {

    let project;
    project = {
        ProjectTitle: req.body.ProjectTitle,
        ProjectURL: req.body.ProjectURL,
        ProjectDesc: req.body.ProjectDesc,
        EstimatedTime: req.body.EstimatedTime,
        EstimatedCost: req.body.EstimatedCost,
        Status: req.body.Status,
        Remark: req.body.Remark
    };
    Project.create(project, function (err, project) {
        if (err) {
            console.log(err);
            res.send("error");
        } else {
            res.send(project);
            console.log("new project Saved");
        }
    });
};

// Update Project
exports.updateProject = (req, res) => {

    let updateProject;
    updateProject = {
        ProjectTitle: req.body.ProjectTitle,
        ProjectURL: req.body.ProjectURL,
        ProjectDesc: req.body.ProjectDesc,
        portals: req.body.Portal_ID,
        EstimatedTime: req.body.EstimatedTime,
        EstimatedCost: req.body.EstimatedCost,
        ResourceID: req.body.ResourceID,
        Status: req.body.Status,
        Remark: req.body.Remark
    };

    Project.findByIdAndUpdate(req.params.id, updateProject, function (err, Project) {
        if (err) {
            res.send("error");
        } else {
            res.send(updateProject);
        }
    });
};

// Delete Project 
exports.deleteProject = (req, res) => {
    Project.findByIdAndRemove({ _id: req.params.id }, function (err, project) {
        if (err) {
            console.log("error");
            res.send("err");
        } else {
            console.log("project deleted");
            res.send(project);
        }
    });
};

