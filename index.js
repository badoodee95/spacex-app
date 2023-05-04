const express = require('express');
const axios = require('axios');
const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/company')
        .then(function (response) {
        // handle success
        // console.log(response.data);
        // to find company ->
            console.log('response.data', response.data);
            res.render( 'index', { company: response.data }); // company.name
        })
        .catch(function (error) {
            res.json({ message: 'DATA NOT FOUND. PLEASE TRY AGAIN LATER.'})
        })
    
});

app.get('/capsules', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/capsules')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data);
            res.render('capsules', { capsules: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/company', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/company')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('index', { company: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/cores', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/cores')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('cores', { cores: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/crew', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/crew')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('crew', { crew: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/dragons', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/dragons')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('dragons', { dragons: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/landpads', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/landpads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('landpads', { landpads: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/launches', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/launches')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('launches', { launches: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/launchpads', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/launchpads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('launchpads',  { launchpads: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/payloads', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/payloads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('payloads', { payloads: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/roadster', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/roadster')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('roadster', { roadster: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/rockets', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/rockets')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('rockets', { rockets: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/ships', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/ships')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('ships', { ships: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/starlink', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/starlink')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('starlink', { starlink: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

app.get('/history', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/history')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            console.log('response.data', response.data)
            res.render('history', { history: response.data });
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});

// app.get('/:input', function (req, res) {
//     console.log('REQ.PARAMS ->', req.params)

//     res.json({ message: `There is no data in /${req.params.input}` });
// });

const PORT = process.env.PORT || 8000

app.listen(PORT, function () {
    console.log('Server is running on PORT', PORT);
})

module.exports = {
    app, PORT, axios, express
}

// Scenario 1 - Return a single capsule
/*
app.get('/capsules/:serial', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/capsules')
        .then(function (response) {
            // handle success
            // console.log(response.data);

            for (let i = 0; i < response.data.length; i++) {
                let capsule = response.data[i];
                let splitSerial = req.params.serial.split(''); // array ['c', '1', '0', '1']
                let finalSerial = splitSerial[0].toUpperCase() + splitSerial.slice(1).join('');
                // upperCaseSerial[0].toUpperCase();
                // upperCaseSerial.join();
                // console.log('capsule', capsule); // { serial: 'C101'}
                if (capsule.serial === finalSerial) {
                    return res.json({ data: capsule});
                } 
            }
            return res.json({ message: 'Capsule does not exist'});
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later.' });
        });
});
*/


app.get('/capsules/*', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/capsules')
        .then(function (response) {
            // print req.params
            console.log('req.params', req.params); // print an object
            console.log('api response', response.data); // print an array of capsules
            // run a for loop to search based off of the key from req.params
            const capsuleArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let capsule = response.data[i];
                let userRequest = req.params['0'].split('/'); // ['serial', 'c103'] ['reuse_count', '0']
                if (userRequest[0] === 'serial') {
                    if (capsule.serial === userRequest[1].toUpperCase()) {
                        return res.json({ capsule })
                    }
                } else if (userRequest[0] === 'reuse_count') {
                    // check to see which capsule have the reuse count
                    // question: is the value of reuse_count a string or number when it comes in
                    // from the user...

                    let countValue = parseInt(userRequest[1]); //Number(userRequest[1])
                    // check the count value
                    if (capsule.reuse_count === countValue) {
                        capsuleArray.push(capsule);
                    }
                    console.log('req.params.reuse_count', req.params.reuse_count);
                } else if (userRequest[0] === 'water_landings') {
                    let countValue = parseInt(userRequest[1]);
                    if (capsule.water_landings === countValue) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'id') {
                    if (capsule.id === userRequest[1]) {
                        return res.json({ capsule });
                    }
                } else if (userRequest[0] === 'land_landings') {
                    let countValue = parseInt(userRequest[1]);
                    if (capsule.land_landings === countValue) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'last_update') {
                    if (capsule.last_update === userRequest[1]) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'status') {
                    if (capsule.status === userRequest[1]) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'type') {
                    if (capsule.type === userRequest[1]) {
                        capsuleArray.push(capsule);
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again.' });
                }
            }
            return res.json({ capsuleArray })

        })
});

app.get('/cores/*', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/cores')
        .then(function (response) {
            const coresArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let core = response.data[i];
                let userRequest = req.params['0'].split('/'); // ['serial', 'c103'] ['reuse_count', '0']
                if (userRequest[0] === 'reuse_count') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.reuse_count === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'serial') {
                    if (core.serial.toUpperCase() === userRequest[1].toUpperCase()) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'status') {
                    if (core.status === userRequest[1]) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'id') {
                    if (core.id === userRequest[1]) {
                        return res.json({core})
                    }
                } else if (userRequest[0] === 'last_update') {
                    if(core.last_update === userRequest[1]) {
                        return res.json({core})
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again.'})
                }
            }
            return res.json({ coresArray })
        })
});

app.get ('/dragons/*', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/dragons')
        .then(function (response) {
            const dragonsArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let dragon = response.data[i];
                let userRequest = req.params['0'].split('/');
                if (userRequest[0] === 'name') {
                    if(dragon.name.toUpperCase() === userRequest[1].toUpperCase()) {
                        return res.json({dragon})
                    }
                } else if (userRequest[0] === 'type') {
                    if (dragon.type === userRequest[1]) {
                        dragonsArray.push(dragon);
                    }
                } else if (userRequest[0] === 'crew_capacity') {
                    let countValue = parseInt(userRequest[1])
                    if(dragon.crew_capacity === countValue) {
                        dragonsArray.push(dragon);
                    }
                } else if (userRequest[0] === 'dry_mass_lb') {
                    let countValue = parseInt(userRequest[1])
                    if (dragon.dry_mass_lb === countValue) {
                        dragonsArray.push(dragon);
                    }
                } else if (userRequest[0] === 'orbit_duration_yr') {
                    let countValue = parseInt(userRequest[1])
                    if(dragon.orbit_duration_yr === countValue) {
                        dragonsArray.push(dragon);
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again'})
                }
            }
            return res.json({dragonsArray});
        })
})

app.get('/landpads/*', function(req, res) {
    axios.get('https://api.spacexdata.com/v4/landpads')
        .then(function (response) {
            const landpadsArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let landpad = response.data[i]
                let userRequest = req.params['0'].split('/');
                if(userRequest[0] === 'region') {
                    if(landpad.region === userRequest[1]) {
                        landpadsArray.push(landpad);
                    }
                } else if (userRequest[0] === 'type') {
                    if(landpad.type === userRequest[1]) {
                        landpadsArray.push(landpad);
                    }
                } else if (userRequest[0] === 'locality') {
                    if(landpad.locality === userRequest[1]) {
                        landpadsArray.push(landpad);
                    }
                } else if (userRequest[0] === 'status') {
                    if(landpad.status === userRequest[1]) {
                        landpadsArray.push(landpad);
                    }
                } else if (userRequest[0] === 'name') {
                    if(landpad.name === userRequest[1]) {
                        landpadsArray.push(landpad)
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again'})
                }
            }
            return res.json({landpadsArray})
        })
})

app.get('/launchpads/*', function(req, res) {
    axios.get('https://api.spacexdata.com/v4/launchpads')
        .then(function (response) {
            const launchpadsArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let launchpad = response.data[i]
                let userRequest = req.params['0'].split('/');
                if(userRequest[0] === 'region') {
                    if(launchpad.region === userRequest[1]) {
                        launchpadsArray.push(launchpad);
                    }
                } else if (userRequest[0] === 'locality') {
                    if(launchpad.locality === userRequest[1]) {
                        launchpadsArray.push(launchpad);
                    }
                } else if (userRequest[0] === 'name') {
                    if(launchpad.name === userRequest[1]) {
                        launchpadsArray.push(launchpad);
                    }
                } else if (userRequest[0] === 'status') {
                    if(launchpad.status === userRequest[1]) {
                        launchpadsArray.push(launchpad);
                    }
                } else if (userRequest[0] === 'launch_attempts') {
                    let countValue = parseInt(userRequest[1])
                    if(launchpad.launch_attempts === countValue) {
                        launchpadsArray.push(launchpad)
                    }
                }
                
                
                else {
                    return res.json({ message: 'Data is not found... Please try again'})
                }
            }
            return res.json({launchpadsArray})
        }) 
})

app.get('/launches/*', function(req, res) {
    axios.get('https://api.spacexdata.com/v4/launches')
    .then(function (response) {
        const launchesArray = [];
        for (let i = 0; i < response.data.length; i++) {
            let launch = response.data[i]
            let userRequest = req.params['0'].split('/')
            if(userRequest[0] === 'date_unix') {
                let countValue = parseInt(userRequest[1])
                if(launch.date_unix === countValue) {
                    launchesArray.push(launch)
                }
            } else if (userRequest[0] === 'date_precision') {
                if (launch.date_precision === userRequest[1]) {
                    launchesArray.push(launch)
                }
            } else if (userRequest[0] === 'flight_number') {
                let countValue = parseInt(userRequest[1])
                if (launch.flight_number === countValue) {
                    launchesArray.push(launch)
                }
            } else if (userRequest[0] === 'details') {
                if(launch.details === userRequest[1]) {
                    launchesArray.push(launch)
                }
            } else if (userRequest[0] === 'net') {
                if(launch.net === userRequest[1]) {
                    launchesArray.push(launch)
                }
            } else {
                return res.json({ message: 'Data is not found... Please try again'})
            }
        }
        return res.json({launchesArray}) 
    })
})

app.get("/search", (req, res) => {
    let result = {};
    // { name: 'capsules', serial: 'C103'}
    // HOw would we make an axios when the name is different?
    axios.get(`https://api.spacexdata.com/v4/${req.query.item}`)
    .then(function(response) {
        console.log('Query', req.query)
        for (let key in req.query) {
            if (key === 'item') {
                // do nothing
                continue;
            } else {
                // run for loop to search for key and value
                // key -> serial
                // req.query[key] -> C103
                for (let i = 0; i < response.data.length; i++) {
                    let capsule = response.data[i];
                    console.log('response.data[i]', response.data[i]);
                    if(capsule.serial === req.query[key]) { // if the response capsule.serial is equal the search item C103
                        return res.json({ capsule });
                    } else if (capsule.name === req.query[key]) {
                        return res.json({ capsule });
                    }
                }
            }
        }
        res.json({ message: 'Data not found. Please try again... '})
    })
    .catch(function (error) {
        res.json({ message: 'Data not found. Please try again later.'})
    })
    // console.log('Query', req.query);
    // for (let key in req.query) {
    //   printout += key + ": " + req.query[key] + "<br />";
    // }
    // res.send("Here's what they sent: <br /><br />" + printout);
  });


app.get('/about', function(req, res) {
    res.sendFile(__dirname+'/views/about.html')
});
app.get('/blog-directory', (req, res) => {
    res.sendFile(__dirname+'/views/blog-directory.html')
})



