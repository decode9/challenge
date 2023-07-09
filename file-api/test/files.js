import chai from 'chai'
import { describe, it } from 'mocha'
import chaiHttp from 'chai-http'
import server from '../index.js'
chai.should()
chai.use(chaiHttp)

describe('/GET /files/data', () => {
  it('It should get 200 Status', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/data')
    response.end((err, res) => {
      res.should.have.status(200)
      if (err) console.log(err)
      done()
    })
  })
  it('It should get an Array', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/data')
    response.end((err, res) => {
      res.body.should.have.be.a('array')
      if (err) console.log(err)
      done()
    })
  })
  it('It should have properties file and lines in object', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/data')
    response.end((err, res) => {
      const bodyElement = res.body[0]

      if (bodyElement) {
        bodyElement.should.have.property('file')
        bodyElement.file.should.be.a('string')
        bodyElement.should.have.property('lines')
        bodyElement.lines.should.be.a('array')
      }
      if (err) console.log(err)
      done()
    })
  })
  it('It Should have csv format text, number and hex in lines', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/data')
    response.end((err, res) => {
      for (const element of res.body) {
        for (const line of element.lines) {
          line.should.have.property('text')
          line.text.should.be.a('string')
          line.should.have.property('number')
          line.number.should.be.a('number')
          line.should.have.property('hex')
          line.hex.should.have.lengthOf(32)
        }
      }
      if (err) console.log(err)
      done()
    })
  })
  it('It Should find a single file', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/data?fileName=test2.csv')
    response.end((err, res) => {
      res.should.have.status(200)
      res.body.should.be.a('array')
      res.body[0].should.have.property('file')
      res.body[0].file.should.be.a('string')
      res.body[0].should.have.property('lines')
      res.body[0].lines.should.be.a('array')
      for (const line of res.body[0].lines) {
        line.should.have.property('text')
        line.text.should.be.a('string')
        line.should.have.property('number')
        line.number.should.be.a('number')
        line.should.have.property('hex')
        line.hex.should.have.lengthOf(32)
      }
      if (err) console.log(err)
      done()
    })
  })
  it('It Should not find a file', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/data?fileName=test1.csv')
    response.end((err, res) => {
      res.should.have.status(404)
      res.body.should.be.a('object')
      res.body.should.have.property('error')
      if (err) console.log(err)
      done()
    })
  })
})

describe('/GET /files/list', () => {
  it('It should get 200 Status', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/list')
    response.end((err, res) => {
      res.should.have.status(200)
      if (err) console.log(err)
      done()
    })
  })
  it('It should get an Array', function (done) {
    this.timeout(6000)
    const request = chai.request(server)
    const response = request.get('/files/list')
    response.end((err, res) => {
      res.body.should.have.be.a('array')
      if (err) console.log(err)
      done()
    })
  })
})
