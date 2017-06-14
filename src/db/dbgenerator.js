var fetch = require('isomorphic-fetch')
var PouchDB = require('pouchdb')
var repStream = require('pouchdb-replication-stream')
PouchDB.plugin(repStream.plugin)
PouchDB.adapter('writableStream', repStream.adapters.writableStream)
var pouchdbLoad = require('pouchdb-load')
PouchDB.plugin({loadIt: pouchdbLoad.load})
var memdown = require('memdown')
var db = new PouchDB('inmem', {db: memdown})
var bluebird = require('bluebird')
var fs = bluebird.promisifyAll(require('fs'))
var shortRevs = require('short-revs')

var bookDB = new PouchDB('books', {db: memdown})


async function createData() {
    var result = await fetch('http://tekobooks.herokuapp.com/api/book/?page=1&limit=10')
    var res = await result.json()
    var json = JSON.parse(res)
    json.books.forEach(book => {
    	book._id = '' + book.id
    	db.put(book)
    })

    var outStream = fs.createWriteStream('src/data/books.txt')
    var stream = shortRevs()
    await db.dump(stream)
    stream.pipe(outStream)
}

createData().catch(console.log.bind(console))
