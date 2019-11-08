exports.seed = function(knex) {
    return knex('Resources').del()
      .then(function () {
        return knex('Resources').insert([
          {Name: '1', Description: '1 desc'},
          {Name: '2', Description: '2 desc' },
          {Name: '3', Description: '3 desc'}
        ]);
      });
  };