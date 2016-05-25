const chalk = require('chalk');
const config = require('../config');

if (process.env.NODE_ENV === 'production') {
  const prodServer = require('../server/prodServer');
  prodServer.listen(config.server.port, err => {
    if (err) {
      console.log(chalk.red(err));
      return;
    }
  });

  console.log(chalk.green(
    `Production server is now running at localhost:${config.server.port}.`
  ));

} else {
  const devServer = require('../server/devServer');
  devServer.listen(config.server.port, err => {
    if (err) {
      console.log(chalk.red(err));
      return;
    }
    console.log(chalk.green(
      `Development server is now running at localhost:${config.server.port}.`
    ));
  });
}
