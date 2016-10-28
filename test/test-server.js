var chai = require('chai')
     ,chaiHttp = require('chai-http')
     ,server = require('../app')
     ,should = chai.should();

chai.use(chaiHttp);

describe('verify-palindrome', function() {
    it('should validate whether ABA is Palindrome /verify-palindrome POST', function (done) {
        chai.request(server)
        .post('/verify-palindrome')
        .send({payload : 'ABA'})
        .end(function(err, res){
            res.body.should.be.a('object');
            res.should.have.status(200);
            done();
        });
    });
});

describe('verify-palindrome', function() {
    it('should validate whether MACACO is Palindrome /verify-palindrome POST', function (done) {
        chai.request(server)
        .post('/verify-palindrome')
        .send({payload : 'MACACO'})
        .end(function(err, res){
            res.body.should.be.a('object');
            res.should.have.status(400);
            done();
        });
    });
});

describe('verify-palindrome', function() {
    it('should validate whether A MAN A PLAN A CANAL PANAMA is Palindrome /verify-palindrome POST', function (done) {
        chai.request(server)
        .post('/verify-palindrome')
        .send({payload : 'A MAN A PLAN A CANAL PANAMA'})
        .end(function(err, res){
            res.body.should.be.a('object');
            res.should.have.status(200);
            done();
        });
    });
});
