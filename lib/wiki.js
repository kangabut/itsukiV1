const axios = require('axios')
const cheerio = require('cheerio')

const wikiSearch = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : '//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ll2a7B9Xn_bgorTmsju9WxHYaIDaNMwrMQ&usqp=CAU'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()
hasil.push({ wiki, thumb, judul })
return hasil
}
module.exports = { wikiSearch}