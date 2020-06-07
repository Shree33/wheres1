const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://shree33.github.io/wheres-the-crowd/',
  },
  () => {
    console.log('Deploy Complete!')
  }
)