/**
 * @Author: liuyejunnan
 * @Date:   2017-06-06 08:52:00
 * @Last modified by:   liuyejunnan
 * @Last modified time: 2017-06-06 08:52:00
 */

 import Author from './main'

 Author.install = function(Vue) {
     Vue.component(Author.name, Author)
 }

 export default Author