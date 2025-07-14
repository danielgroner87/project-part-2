const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sql = require('../../db/db');

const app = express();
const port = 8080;

// מאפשר טעינת קבצים סטטיים (CSS, JS וכו') מכל התיקיות בפרויקט
app.use(express.static(path.join(__dirname, '..', '..')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// הרצת השרת
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// --- ניתובי GET לדפי HTML ---
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'home', 'Home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'login', 'Login.html'));
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'info', 'info.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'signup', 'SignUp.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'stats', 'Stats.html'));
});

app.get('/photos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'photos', 'Photos.html'));
});

// --- POST הרשמה ---
app.post('/signup', (req, res) => {
    const { name, password, age } = req.body;

    if (!name || !password || !age) {
        return res.send("כל השדות חייבים להיות מלאים כדי להירשם!");
    }

    sql.query("SELECT Name FROM Users WHERE Name = ?", [name], (err, results) => {
        if (err) {
            console.error("Error checking for existing user:", err);
            return res.send("אירעה שגיאה בבדיקת קיום המשתמש.");
        }

        if (results.length > 0) {
            return res.send("שם המשתמש שהזנת כבר קיים במערכת");
        }

        const newUser = { name, password, age };
        sql.query("INSERT INTO Users SET ?", newUser, (err, mysqlres) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.send("אירעה שגיאה בהרשמה.");
            }

            console.log("User added:", name);
            res.redirect('/login');
        });
    });
});

// --- POST התחברות ---
app.post('/login', (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.send("שם משתמש וסיסמה אינם יכולים להיות ריקים!");
    }

    sql.query("SELECT * FROM Users WHERE Name = ?", [name], (err, results) => {
        if (err) {
            console.error("Error checking user for login:", err);
            return res.send("שגיאה בבדיקת המשתמש.");
        }

        if (results.length === 0) {
            return res.send("לא נמצא שם משתמש.");
        }

        const user = results[0];

        if (user.password?.trim() === password.trim() || user.Password?.trim() === password.trim()) {
            res.redirect('https://www.youtube.com/watch?v=KRWmO7inmj4&pp=ygUWcG9kY2FzdCBvZiBkZW5pIGF2ZGlqYQ%3D%3D');
        } else {
            return res.send("סיסמה שגויה!");
        }
    });
});
