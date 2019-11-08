exports.seed = function(knex) {
    return knex('Tasks').del()
      .then(function () {
        return knex('Tasks').insert([
          {ProjectId: 1, Description: 'task 1', Notes: 'notes' },
          {ProjectId: 2, Description: 'task 2', Notes: 'notes' },
          {ProjectId: 3, Description: 'task 3', Notes: 'notes' },
          {ProjectId: 3, Description: 'task 4', Notes: 'notes' },
        ]);
      });
  };