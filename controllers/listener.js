const listener = (err, port) => {
  err
    ? console.error("OUPS server couldn't connect => " + err)
    : console.log(`go to localhost:${port}`);
};
module.exports = listener;
