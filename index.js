const os = require('os');
const fs = require('fs');
const path = require('path');

const systemInfo = `
  OS Type: ${os.type()}
  OS Platform: ${os.platform()}
  OS Release: ${os.release()}
  Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB
  Free Memory: ${(os.freemem() / 1e9).toFixed(2)} GB
  CPU Details: ${JSON.stringify(os.cpus(), null, 2)}
`;

console.log('System Information:');
console.log(systemInfo);

const logFilePath = path.join(__dirname, 'logs', 'system-info.txt');

fs.mkdirSync(path.dirname(logFilePath), { recursive: true });

fs.writeFileSync(logFilePath, systemInfo);

console.log(`System information saved to ${logFilePath}`);
