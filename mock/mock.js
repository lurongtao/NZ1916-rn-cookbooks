const swiper = require('./cookbook-list.json')
const hotcate = require('./cookbook-hotcate.json')
const cate = require('./cookbook-category.json')
const detail = require('./cookbook-detail.json')

module.exports = function() {
  return {
    swiper,
    hotcate,
    cate,
    detail
  }
}