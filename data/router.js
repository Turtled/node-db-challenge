const express = require("express");

const dbHelper = require("./helper");

const router = express.Router();

// Build an API with endpoints for:
// adding resources.
// retrieving a list of resources. -
// adding projects. -
// retrieving a list of projects. -
// adding tasks. - 
// retrieving a list of tasks. The list of tasks should include the project name and project description. -

router.get("/projects", (req, res) => {
    dbHelper
        .get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: "Error trying to dbHelper.get()" });
        });
});

router.get("/projects/:id", (req, res) => {

    const { id } = req.params;
    console.log("getting tasks of project with project ID of " + id)
    dbHelper
        .getById(id)
        .then(project => {
            res.status(200).json({ ...project, Completed: project.Completed === 1 ? true : false });
        })
        .catch(err => {
            res.status(500).json({ message: "Error trying to dbHelper.getById(id)" });
        });
});

router.get("/projects/:id/tasks", (req, res) => {

    const { id } = req.params;
console.log("getting tasks of project with project ID of " + id)
    dbHelper
        .getTasks(id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status({ message: "Error trying to dbHelper.getTasks(id)" });
        });
});

router.get("/resources", (req, res) => {

    dbHelper
        .getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: "Error trying to dbHelper.getResources()" });
        });

});

router.post("/projects/:id/tasks", (req, res) => {

    const { id } = req.params;
    const task = req.body;

    task.ProjectId = id;
    task.completed = task.completed ? 1 : 0;

    dbHelper
        .addTask(task)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: "Error trying to dbHelper.addTask(task)" });
        });
});

router.post("/projects", (req, res) => {
    const project = req.body;

    project.completed = project.completed ? 1 : 0;

    dbHelper
        .add(project)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: "Error trying to dbHelper.add(project)" });
        });
});

router.post("/resources", (req, res) => {

    const resource = req.body;

    dbHelper
        .addResource(resource)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: "Error trying to dbHelper.addResource(resource)" });
        });

});

module.exports = router;