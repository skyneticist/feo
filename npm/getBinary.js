const { Binary } = require('binary-install');
const os = require('os');

function getPlatform() {
    const type = os.type();
    const arch = os.arch();

    if (type === 'Windows_NT' && arch === 'x64') return 'win64';
    if (type === 'Windows_NT') return 'win32';
    if (type === 'Linux' && arch === 'x64') return 'linux';
    if (type === 'Darwin' && arch === 'x64') return 'macos';

    throw new Error(`Unsupported platform: ${type} ${arch}`);
}

function getBinary() {
    const platform = getPlatform();
    const version = require('../package.json').version;
    const url = `https://github.com/skyneticist/feo/releases/download/v${version}/feo-${platform}.tar.gz`;
    const name = 'feo';
    return new Binary(name, url);
}

module.exports = getBinary;