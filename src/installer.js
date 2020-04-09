//const core = require('@actions/core');
const os = require('os');

const platform = os.platform();

export function getLazarus(version) {
  console.log(`getLazarus - Installing Lazarus version:  ${version}`);

  switch (version) {
    case "dist":
      if (platform != 'win32') {
          console.log('getLazarus - Installing Lazarus now');
          downloadLazarus(version);
      } else {
        // Use the latest known stable version
        downloadLazarus('2.0.6');
      }
      break;
    case '2.0.6':
    case '2.0.4':
      downloadLazarus(version);
      break;
    default:
      console.log(`getLazarus - Version not supported: ${lazarusVersion}`);
      break;
  }
}

function downloadLazarus(version) {
  console.log(`downloadLazarus - Installing on platform: ${platform}`);

  switch (platform) {
    case 'win32':
      console.log('');
      break;
    case 'linux':
      break;
    default:
      console.log(`downloadLazarus - Platform not implemented yet: ${platform}`);
      break;
  }
}