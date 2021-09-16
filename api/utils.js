function secret() {
  return process.env.NODE_ENV === 'production' ? 'random_secret' : 'secret';
}

module.exports = {
  secret
}
