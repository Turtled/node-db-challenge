// A project is what needs to be done. We want to store the following data about a project:

//  a unique Id.
//  a name. This column is required.
//  a description.
//  a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be false.

// A resource is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a resource:

//  a unique Id.
//  a name. This column is required.
//  a description.
// The database should not allow resources with duplicate names.

// An task one of the steps needed to complete the project. We want to store the following data about an task.

//  a unique id.
//  a description of what needs to be done. This column is required.
//  a notes column to add additional information.
//  a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.

exports.up = function(knex, Promise) {

    return knex.schema
    .createTable('Projects', function (table) {
        table.increments();
        table.string('Name', 128).notNullable();
        table.string('Description', 255);
        table.boolean('Completed').notNullable().defaultTo(false);
    })
    .createTable('Resources', function (table) {
        table.increments();
        table.string('Name', 128).notNullable();
        table.string('Description', 255);
    })
    .createTable('Tasks', function (table) {
        table.increments();
        table.integer('ProjectId')
          .unsigned()  
          .notNullable()
          .references('Id')
          .inTable('Projects')
        table.string('Description', 255).notNullable();
        table.string('Notes', 400);
        table.boolean('Completed').notNullable().defaultTo(false);
    })
      
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Projects').dropTableIfExists('Resources').dropTableIfExists("Tasks");
};
