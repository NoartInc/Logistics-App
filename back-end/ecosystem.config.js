module.exports = {
    apps : [{
      name: "be-logistic",
      script: "npm start",
      env: {
        PORT: 5000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 4000,
        NODE_ENV: "production",
      }
    }]
}
