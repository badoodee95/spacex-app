const {app, PORT, axios, express} = require('../index');
const request = require('supertest');


describe('GET /', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/')
        .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
    });
});

describe('GET /capsules', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/capsules')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/capsules')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /company', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/company')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/company')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /cores', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/cores')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/cores')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /crew', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/crew')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/crew')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});


describe('GET /dragons', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/dragons')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/dragons')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /dragons/*', () => {
    it('should respond with 200', (done) => {
        request(app)
        .get('/dragons')
        .expect(200, done); 
    });
    it('should respond with json', () => {
        request(app) 
        .get('/dragons')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/) 
    });
    it('should return true if requested serial no. is in database', () => {
        axios.get('http://localhost:8000/dragons/id/5e9d058759b1ff74a7ad5f8f')
        .then((response) => {
            let idValue = response.data.dragon.id;
            expect(Boolean(idValue)).toBe(true);
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    });
    it('should return error message if requested serial no. is NOT in database', () => {
        axios.get('http://localhost:8000/dragons/name/99')
        .then((response) => {
            expect(response.data.message).toBe("Data not found. Please try again.");
        })
        .catch((error) => {
            console.log('error:', error); 
        }); 
    }); 
});

describe('GET /landpads', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/landpads')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/landpads')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});


describe('GET /launches', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/launches')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /launchpads', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/launchpads')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/launchpads')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /payloads', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/payloads')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/payloads')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /roadster', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/roadster')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/roadster')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /rockets', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/rockets')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/rockets')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /ships', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/ships')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/ships')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /starlink', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/starlink')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/starlink')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});

describe('GET /history', () => {
    it('respond with 200', (done) => {
        request(app)
        .get('/history')
        .expect(200, done);
    })
    it('should respond with json', () => {
        request(app)
        .get('/history')
        .expect('Content-Type', /json/)
        .expect(200);
    })
});



