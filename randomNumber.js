const randomId = (context, events, done) => {
  context.vars.id = Math.floor(Math.random() * 1000000) + 1;
  return done();
};

module.exports = { randomId };
