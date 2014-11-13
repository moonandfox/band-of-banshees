# bandofbanshees.com

Development of  [Band of Banshees](http://www.bandofbanshees.com/).

[Composisleeve Trello Board](https://trello.com/b/1s8iJQDa/band-of-banshees)

## Development Environment

The following are directions to setup necessary software, download the code, and get started developing.

### Prerequisites

- Install [Git](http://git-scm.com/downloads)
- Install [Node.js](http://nodejs.org/download/)
- Install [Grunt CLI](http://gruntjs.com/getting-started)
- Install [Google Chrome](https://www.google.com/intl/en/chrome/browser/)
- Install [LiveReload Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)

### Code

- Clone repo: `git clone https://github.com/moonandfox/ComposiSleeve-V2`
- Install node modules: `npm install`

#### Configure .env file

You must create 2 files named `.env.development` and `.env.production` in the root directory which contains the FTP username and  password. This file must *not* be committed. Git is configured ignore it.

The `.env` file should have the following structure:

```
HOST=ip.ip.ip.i
DIR=/destination-dir/
AUTH=Name
```

### Development

The default grunt task watches for changes in files and uploads them. Simply run `grunt` and develop away. Open the page you're working on in Chrome and enable LiveReload so that browser automatically refreshes when changes are uploaded.

### Images

Images should be placed in web_files/images/ directory.