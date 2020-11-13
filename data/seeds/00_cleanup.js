
exports.seed = async function(knex) {
  await knex('tests').truncate();
};
