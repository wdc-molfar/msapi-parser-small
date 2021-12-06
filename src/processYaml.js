const { convertYamlToObject } = require('./convertYamlToObject');
const { resolveRef } = require('./resolveRefs');

/**
 * @param filePath a path to a file
 * @returns {object}
 * @type {{fileName: string}}
 */
const processYaml = async (filePath) => {
    const spec = await convertYamlToObject(filePath);
    const { resolved } = await resolveRef(spec, filePath);
    return resolved;
};

module.exports = { processYaml };
