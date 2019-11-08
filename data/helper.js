const knex = require("knex");

const config = require("../knexfile.js");

const db = knex(config.development)

// Build an API with endpoints for:
// adding resources. -
// retrieving a list of resources. -
// adding projects. -
// retrieving a list of projects. -
// adding tasks. - 
// retrieving a list of tasks. The list of tasks should include the project name and project description. -
// When returning project or task information, the completed property should be true or false.

module.exports = {
    get,
    getById,
    add,
    addTask,
    addResource,
    getResources,
    getTasks
};

function get() {
    return db("Projects");
}

function getById(id) {
    return db("Projects").where({ id }).first();
}

function getResources() {
    return db("Resources");
}

function getTasks(id) {
    console.log(id);
    return db("Projects")
        .innerJoin("Tasks", "Tasks.ProjectId", "Projects.Id")
        .select("Projects.Name", "Projects.Description", "Tasks.Description", "Tasks.Notes", "Tasks.Completed", "Tasks.ProjectId")
        .where({ ProjectId: id })
        .first();
}

function addResource(resource) {
    return db("Resources").insert(resource);
}


function add(project) {
    return db("Projects").insert(project);
}

function addTask(task) {
    return db("Tasks")
        .insert(task);
}


