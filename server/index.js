const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
const db = require('./db')

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/api/users', async (req, res, next) => {
  res.send([]);
  /*
  try {
    console.log('yes');
    const users = await db.models.user.findAll()
    console.log('no');
    res.json(users)
  } catch (e) {
    console.log(e);
    console.error(e)
    next(e)
  }
  */
})


module.exports = app

if (require.main === module) {
  app.listen(PORT, (e) => {
    if (e) throw e
    console.log(`listening on port ${PORT}`)
  })
}
