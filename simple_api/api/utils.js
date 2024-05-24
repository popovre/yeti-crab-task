const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

const getById = (entities) => (id) =>
  entities.find((entity) => entity.id === id);

const updateById = (entities) => (id, data) => {
  const index = entities.findIndex((entity) => entity.id === id);
  entities[index] = { ...entities[index], ...data };

  return entities[index];
};

const deleteById = (entities, contents) => (id) => {
  const index = entities.findIndex((entity) => entity.id === id);

  if (index !== undefined) {
    const contentIndex = contents.findIndex(
      (content) => content.id === entities[index].content
    );
    if (contentIndex !== undefined) {
      const newlog = contents.splice(contentIndex, 1);
    }

    entities.splice(index, 1);
  }
};

module.exports = { reply, getById, updateById, deleteById };
