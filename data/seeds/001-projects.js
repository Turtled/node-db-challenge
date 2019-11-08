exports.seed = function (knex) {

    return knex('Projects').del()
        .then(function () {
            return knex('Projects').insert([
                { Name: '1', Description: '1 desc' },
                { Name: '2', Description: '2 desc' },
                { Name: '3', Description: '3 desc' }
            ]);
        });

};