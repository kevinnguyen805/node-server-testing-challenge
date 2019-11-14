
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cats').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        { name: 'felix', color: 'orange and white'},
        { name: 'reed', color: 'white'},
        { name: 'dog', color: 'ashy gray'}
      ]);
    });
};
