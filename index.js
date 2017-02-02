
/**
 * Here is the code that will get run when you receive a comment
 * @param  {Object} job
 * @param  {String} job.comment - comment user submitted
 * @param  {String} job.from    - unique id for a user
 * @return {Promise}
 */
module.exports = (job) => {
  return Promise.resolve().then(() => {
    console.log('I got a comment:', job.comment, 'from:', job.from)
  })
}
