const zod = require('zod');
const createTodo= zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1),
});
const updateTodo= zod.object({
    title: zod.string(),
    description: zod.string(),
});
module.exports = {
    createTodo,
    updateTodo
}