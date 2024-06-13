module.exports = {
  apps: [
    {
      port: 3000,
      name: 'Tashkent Perfect University',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
