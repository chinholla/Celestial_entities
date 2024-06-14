const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Coffee1234/',
    database: 'galaxy'

});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});



app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    connection.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });

  app.get('/api/obs', (req, res) => {
    const query = 'SELECT * FROM obstech';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});


  app.get('/api/planet', (req, res) => {
    const query = 'SELECT * FROM planet';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/planin', (req, res) => {
    const sql=" insert into planet values(?)";
    const values =[
        req.body.plaid,
        req.body.pnam,
        req.body.star_id,
        req.body.hav_moon,
        req.body.N_moons
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("INSERTION FAILED");
        return res.json(data);
    })
});

app.post('/api/pladel', (req, res) => {
    const sql=" delete from planet where planet_id=?";
    const values =[
        req.body.pladel
        
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("DELETION FAILED");
        return res.json(data);
    })
});


app.get('/api/star', (req, res) => {
    const query = 'SELECT * FROM star';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/starin', (req, res) => {
    const sql=" insert into star values(?)";
    const values =[
        req.body.star_id,
        req.body.snam,
        req.body.siz,
        req.body.galid,
        req.body.tecid
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("INSERTION FAILED");
        return res.json(data);
    })
});

app.post('/api/stadel', (req, res) => {
    const sql=" delete from star where star_id=?";
    const values =[
        req.body.stadel
        
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("DELETION FAILED");
        return res.json(data);
    })
});



app.get('/api/gal',(req, res) => {
    const sql = 'select * from gal;';
    connection.query(sql, (err,results) => {
        if (err) {
            console.error(`Error executing SQL query: ${err}`);
            res.status(500).json({error: `Json error`});
            return;
        } 
        res.json(results);
    });
});

app.post('/api/galin', (req, res) => {
    const sql=" insert into gal values(?)";
    const values =[
        req.body.galid,
        req.body.name,
        req.body.year,
        req.body.dis,
        req.body.con
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("INSERTION FAILED");
        return res.json(data);
    })
});

app.post('/api/delete', (req, res) => {
    const sql=" delete from gal where galaxy_id=?";
    const values =[
        req.body.galdel
        
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("DELETION FAILED");
        return res.json(data);
    })
});


app.get('/api/moon', (req, res) => {
    const query = 'SELECT * FROM moon';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/moonin', (req, res) => {
    const sql=" insert into moon values(?)";
    const values =[
        req.body.moid,
        req.body.name,
        req.body.size,
        req.body.tecid,
        req.body.plaid
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("INSERTION FAILED");
        return res.json(data);
    })
});

app.post('/api/moodel', (req, res) => {
    const sql=" delete from moon where moon_id=?";
    const values =[
        req.body.moodel
        
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err) return res.json("DELETION FAILED");
        return res.json(data);
    })
});




app.listen(8081, () => {
    console.log('Server listening on port 8081');
});

