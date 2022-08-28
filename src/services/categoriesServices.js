const { Category } = require('../database/models');
const CustomError = require('../errors/CustomError');

const create = async (name) => {
  if (!name || name.length === 0) throw new CustomError(400, '"name" is required');
  const category = await Category.create({ name });
  return category;
};

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  findAll,
};