const Project = require("../models/Project");

module.exports = {
    createProject: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data);
            return result
        }
    }
}
