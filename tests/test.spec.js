const requests = require('../helpers/client')
const data = require('../data/test_data')



test('test One-Post response', async () => {
    let res = await requests.getPost()
    expect(res.title).toEqual(data.one_post.title)
})

test('test comment response', async () => {
    let res = await requests.getComments()
    expect(res).toEqual(data.comments)
})