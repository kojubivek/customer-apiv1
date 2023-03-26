import ClientSchema from "./ClientSchema.js";

export const createNewClient = (obj) => {
  return ClientSchema(obj).save();
};

export const findUser = (filter) => {
  return ClientSchema.findOne(filter);
};
