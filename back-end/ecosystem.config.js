module.exports = {
  apps : [{
    name: "be-logistic",
    script: "npm start",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
