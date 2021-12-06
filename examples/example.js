const { processYaml } = require('../src/processYaml');
const path = require('path');

(async () => {
    const fileName = './ms_06_workflow';
    const filePath = path.resolve(__dirname, fileName);
    const result = await processYaml(filePath);
    console.log(JSON.stringify(result, null, '  '));
})();
