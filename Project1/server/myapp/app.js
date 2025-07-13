// // import express from 'express'; 
// // const app = express();
// // const port = 8080;
// // const bodyParser = require('body-parser'); // Middleware לטיפול בגוף בקשות HTTP 
// // const sql = require("./db")
// // import path from path;
// // import { dirname } from 'path';
// // // parse requests of content-type: application/json
// // app.use(bodyParser.json());
// // // parse requests of content-type: application/x-www-form-urlencoded
// // app.use(bodyParser.urlencoded({ extended: true }));
// // const fs = require("fs");
// // //app.use(express.static(path.join(__dirname, "..")));
// // const __dirname = dirname(fileURLToPath(import.meta.url));


// // /*נאתחל משתנה app שהוא אובייקט מסוג אקספרס. ככה למעשה אנחנו משתמשים בכל היכולות של אקספרס כדי לבנות את השרת שלנו.
// // נגדיר מספר פורט אליו נרצה שהשרת שלנו יאזין
// // נגדיר איך השרת יגיב לבקשת get (נרחיב בהמשך) עבור עמוד הבית. למה עמוד הבית? הפרמטר הראשון שמקבלת get הוא הURI-uniform resource identifier. זה החלק שמגיע אחרי הדומיין. הגדרת ‘/’ היא למעשה עמוד הבית (שום נתיב נוסף לא מצטרף לדומיין).
// // נרצה שהשרת שלנו ישלח "hello world" בכל פעם שמישהו נכנס לפורט 8080.
// // שיטת listen מגדירה לשרת לאיזה פורט להאזין.
// // */
// // app.listen(port, () => {
// // console.log(`listening on port ${port}`);
// // });

// // //הוספנו את הGET לכל העמודים כדי לתרגל, בנוסף להוספת הSTATIC
// // // ניתוב לדף הבית - מגיש את Home.html כאשר הלקוח מבקש את נתיב הבסיס '/'
// // app.get('/home', (req, res) => { 
// //     res.sendFile(path.join(__dirname, 'home', 'Home.html')); 
// // });

// // // ניתוב לדף התחברות
// // app.get('/login', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'login', 'Login.html'));
// // });
// // // ניתוב לדף מידע
// // app.get('/info', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'info', 'info.html'));
// // });
// // // ניתוב לדף הרשמה
// // app.get('/signup', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'signup', 'SignUp.html'));
// // });

// // // ניתוב לדף סטטיסטיקות
// // app.get('/stats', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'stats', 'Stats.html'));
// // });

// // // ניתוב לדף תמונות
// // app.get('/photos', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'photos', 'Photos.html'));
// // });

// //  app.post('/signup', (req, res) => {
// //   const { name, password, age } = req.body;

// //   if (!name || !password || !age) {
// //     res.send("כל השדות חייבים להיות מלאים כדי להירשם!");
// //     return;
// //   }

// //   sql.query("SELECT Name FROM Users WHERE Name = ?", [name], (err, results) => {
// //     if (err) {
// //       console.log("Error checking for existing user: ", err);
// //       res.send("אירעה שגיאה בבדיקת קיום המשתמש." );
// //       return;
// //     }

// //     if (results.length > 0) {
// //       res.send("שם המשתמש שהזנת כבר קיים במערכת");
// //       return;
// //     }

// //     const newUser = { name, password, age };
// //     sql.query("INSERT INTO Users SET ?", newUser, (err, mysqlres) => {
// //       if (err) {
// //         console.log("Error inserting user: ", err);
// //         res.send("אירעה שגיאה בהרשמה.");
// //         return;
// //       }

// //       console.log("User added:", name);
// //       res.sendFile(path.join(__dirname, 'login', 'Login.html'));    });
// //   });
// // });       
    
// // app.post('/login', (req, res) => {
// //   const { name, password } = req.body;

// //   if (!name || !password) {
// //     res.send("שם משתמש וסיסמה אינם יכולים להיות ריקים!" );
// //     return;
// //   }

// //   User.findByName(name, (err, user) => {
// //     if (err) {
// //       if (err.kind === "not_found") {
// //         res.send("לא נמצא שם משתמש");
// //       } else {
// //         res.send( "שגיאה בבדיקת המשתמש." );
// //       }
// //       return;
// //     }

// //     if (!user) {
// //       res.send("משתמש לא נמצא.");
// //       return;
// //     }

// //     if (user.password === password) {
// //       res.redirect('https://katzr.net/637f40'); 
// //     } else {
// //       res.send( "סיסמה שגויה!");
// //     }
// //   });
// // });

// import express from 'express';
// import path from 'path'; // תיקון: 'path' חייב להיות במירכאות בודדות/כפולות
// import { fileURLToPath } from 'url'; // חובה לייבא את זה כדי להשתמש ב-fileURLToPath
// const bodyParser = require('body-parser'); // נשאר כ-require אם db.js הוא CommonJS
// const sql = require("./db"); // נשאר כ-require אם db.js הוא CommonJS
// const fs = require("fs"); // נשאר כ-require אם אתה משתמש בו (לא נראה בשימוש בקוד הנוכחי)

// const app = express();
// const port = 8080;

// // הגדרת __dirname עבור ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// import { fileURLToPath } from 'url';

// // הגשת קבצים סטטיים:
// // מכיוון שאמרת שאין לך תיקיית 'public' וכל קבצי ה-HTML, CSS, JS שלך
// // נמצאים בתיקיות נפרדות תחת תיקיית הפרויקט הראשית,
// // הדרך הפשוטה ביותר להגיש את כל הקבצים הסטטיים היא להגיש מתיקיית השורש של הפרויקט.
// // זה פחות מומלץ מבחינה אבטחתית בפרויקט גדול, אבל יעבוד עבורך כרגע.
// // אם תרצה ארגון טוב יותר, עליך ליצור תיקיית 'public' ולשים שם את כל קבצי ה-CSS/JS/תמונות.
// app.use(express.static(__dirname)); // מגיש קבצים מתיקיית השורש של הקובץ הנוכחי

// // parse requests of content-type: application/json
// app.use(bodyParser.json());
// // parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));


// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });

// // ניתובים לדפי HTML (נשארו כפי שהם, כיוון שהם מצביעים נכון למבנה התיקיות שלך)
// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, 'home', 'Home.html'));
// });

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'login', 'Login.html'));
// });

// app.get('/info', (req, res) => {
//     res.sendFile(path.join(__dirname, 'info', 'info.html'));
// });

// app.get('/signup', (req, res) => {
//     res.sendFile(path.join(__dirname, 'signup', 'SignUp.html'));
// });

// app.get('/stats', (req, res) => {
//     res.sendFile(path.join(__dirname, 'stats', 'Stats.html'));
// });

// app.get('/photos', (req, res) => {
//     res.sendFile(path.join(__dirname, 'photos', 'Photos.html'));
// });

// // טיפול בהרשמה חדשה
// app.post('/signup', (req, res) => {
//     const { name, password, age } = req.body;

//     if (!name || !password || !age) {
//         res.send("כל השדות חייבים להיות מלאים כדי להירשם!");
//         return;
//     }

//     // וודא ש-sql.query מחזיר את התוצאות בצורה שמתאימה לבדיקת אורך results
//     sql.query("SELECT Name FROM Users WHERE Name = ?", [name], (err, results) => {
//         if (err) {
//             console.log("Error checking for existing user: ", err);
//             res.send("אירעה שגיאה בבדיקת קיום המשתמש.");
//             return;
//         }

//         if (results.length > 0) {
//             res.send("שם המשתמש שהזנת כבר קיים במערכת");
//             return;
//         }

//         const newUser = { name, password, age };
//         sql.query("INSERT INTO Users SET ?", newUser, (err, mysqlres) => {
//             if (err) {
//                 console.log("Error inserting user: ", err);
//                 res.send("אירעה שגיאה בהרשמה.");
//                 return;
//             }

//             console.log("User added:", name);
//             // עדיף לנתב מחדש ל-URL של דף ההתחברות, ולא לשלוח את הקובץ ישירות
//             res.redirect('/login');
//         });
//     });
// });

// // טיפול בהתחברות
// app.post('/login', (req, res) => {
//     const { name, password } = req.body;

//     if (!name || !password) {
//         res.send("שם משתמש וסיסמה אינם יכולים להיות ריקים!");
//         return;
//     }

//     // !!! חסר ייבוא או הגדרה של User !!!
//     // אתה צריך לוודא ש-User מוגדר ומכיל את הפונקציה findByName.
//     // לדוגמה, אם User הוא מודל שאתה מייבא:
//     // import User from './models/user.model.js'; // או const User = require('./models/user.model.js');

//     // אני מניח ש-User.findByName אמור להיות קריאה למסד הנתונים דרך sql.
//     // אם זו פונקציה מוגדרת במקום אחר, וודא שהיא מיובאת.
//     // אם לא, תצטרך לכתוב כאן את הלוגיקה של שליפת המשתמש מה-DB.
//     // לדוגמה (בהנחה ש-User.findByName היא פונקציה שאתה הגדרת):
//     User.findByName(name, (err, user) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.send("לא נמצא שם משתמש");
//             } else {
//                 res.send("שגיאה בבדיקת המשתמש.");
//             }
//             return;
//         }

//         if (!user) { // אם findByName לא מצא משתמש
//             res.send("משתמש לא נמצא.");
//             return;
//         }

//         // !!! אזהרת אבטחה חמורה: השוואת סיסמאות בטקסט רגיל !!!
//         // לעולם אל תשווה סיסמאות בטקסט רגיל.
//         // עליך להשתמש בהצפנה (hashing) כמו bcrypt.
//         if (user.password === password) {
//             // ניתוב מחדש לכתובת URL חוקית
//             res.redirect('https://katzr.net/637f40');
//         } else {
//             res.send("סיסמה שגויה!");
//         }
//     });
// });

import express from 'express';
import path from 'path'; // חובה לייבא את 'path' עם מירכאות
import { fileURLToPath } from 'url'; // חובה לייבא כדי להגדיר __dirname ב-ES Modules
const bodyParser = require('body-parser'); // נשאר require אם db.js הוא CommonJS
const sql = require("./db"); // נשאר require אם db.js הוא CommonJS

// אם אתה משתמש ב-bcrypt (מומלץ מאוד לאבטחת סיסמאות), תצטרך לייבא אותו:
// import bcrypt from 'bcrypt'; // npm install bcrypt

const app = express();
const port = 8080;

// הגדרת __dirname עבור ES Modules:
// ב-ES Modules (__dirname ו-__filename אינם גלובליים אוטומטית כמו ב-CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// !!! הסר את השורה הכפולה הזו: import { fileURLToPath } from 'url'; - היא כבר למעלה !!!

// הגשת קבצים סטטיים:
// הגדרת Express להגיש קבצים סטטיים מתיקיית השורש של הפרויקט.
// זה מאפשר לדפדפן לטעון קבצי CSS, JS, תמונות וכו' כאשר הם מקושרים ב-HTML.
// לדוגמה, אם ב-Login.html יש <link rel="stylesheet" href="LoginStyle.css">
// והקובץ LoginStyle.css נמצא בתיקיית 'login' יחד עם Login.html,
// אז הדפדפן יבקש /login/LoginStyle.css והשרת ימצא אותו ב-__dirname/login/LoginStyle.css.
// אזהרה: הגדרה זו חושפת את כל הקבצים בתיקיית השורש של הפרויקט (כולל קוד שרת)
// אם אינם מאורגנים בתיקייה ייעודית לקבצים ציבוריים (כמו 'public').
app.use(express.static(__dirname));

// הגדרת Body Parser לטיפול בנתוני בקשות HTTP (JSON ו-URL-encoded)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// הפעלת השרת והאזנה לפורט
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// --- ניתובים לדפי HTML (GET requests) ---
// אלו נראים תקינים בהתאם למבנה התיקיות שתיארת (תיקיות home, login וכו' תחת תיקיית הפרויקט הראשית)
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home', 'Home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'Login.html'));
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, 'info', 'info.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup', 'SignUp.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, 'stats', 'Stats.html'));
});

app.get('/photos', (req, res) => {
    res.sendFile(path.join(__dirname, 'photos', 'Photos.html'));
});

// --- טיפול בהרשמת משתמשים (POST /signup) ---
app.post('/signup', (req, res) => {
    const { name, password, age } = req.body;

    if (!name || !password || !age) {
        return res.send("כל השדות חייבים להיות מלאים כדי להירשם!");
    }

    // בדיקה אם שם המשתמש כבר קיים במסד הנתונים
    sql.query("SELECT Name FROM Users WHERE Name = ?", [name], (err, results) => {
        if (err) {
            console.error("Error checking for existing user: ", err); // השתמש ב-error לטעויות
            return res.send("אירעה שגיאה בבדיקת קיום המשתמש.");
        }

        if (results.length > 0) {
            return res.send("שם המשתמש שהזנת כבר קיים במערכת");
        }

        // אזהרת אבטחה: הסיסמה נשמרת בטקסט רגיל!
        // בפרודקשן, חובה להצפין סיסמאות באמצעות ספריית hashing כמו bcrypt.
        // לדוגמה:
        // bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
        //     if (hashErr) {
        //         console.error("Error hashing password: ", hashErr);
        //         return res.send("שגיאה בהצפנת הסיסמה.");
        //     }
        //     const newUser = { name, password: hashedPassword, age };
        //     // ... המשך עם ה-sql.query להכנסה ...
        // });

        const newUser = { name, password, age }; // כרגע שומרים בטקסט רגיל (לא מומלץ!)
        sql.query("INSERT INTO Users SET ?", newUser, (err, mysqlres) => {
            if (err) {
                console.error("Error inserting user: ", err);
                return res.send("אירעה שגיאה בהרשמה.");
            }

            console.log("User added:", name);
            // ניתוב מחדש לדף ההתחברות לאחר הרשמה מוצלחת
            res.redirect('/login');
        });
    });
});

// --- טיפול בהתחברות משתמשים (POST /login) ---
app.post('/login', (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.send("שם משתמש וסיסמה אינם יכולים להיות ריקים!");
    }

    // תיקון קריטי: User.findByName לא הוגדר בקוד שלך.
    // נחליף אותו בקריאה ישירה למסד הנתונים באמצעות sql.query.
    // אם User הוא מודל נפרד שהגדרת, וודא שאתה מייבא אותו (לדוגמה: import User from './models/user.model.js';)
    sql.query("SELECT * FROM Users WHERE Name = ?", [name], (err, results) => {
        if (err) {
            console.error("Error checking user for login: ", err);
            // אם השגיאה היא לא "לא נמצא", אלא שגיאת DB אחרת
            return res.send("שגיאה בבדיקת המשתמש.");
        }

        // אם לא נמצאו תוצאות, המשתמש לא קיים
        if (results.length === 0) {
            return res.send("לא נמצא שם משתמש.");
        }

        const user = results[0]; // מניחים ש-Name הוא PRIMARY KEY ולכן יש רק תוצאה אחת

        // אזהרת אבטחה: השוואת סיסמאות בטקסט רגיל!
        // חובה להשוות סיסמאות מוצפנות (לדוגמה, באמצעות bcrypt.compare(password, user.password)).
        if (user.password === password) { // השוואה לא מאובטחת
            // ניתוב מחדש לכתובת URL חוקית לאחר התחברות מוצלחת
            res.redirect('https://katzr.net/637f40'); // וודא שזו כתובת URL חוקית ונגישה
        } else {
            return res.send("סיסמה שגויה!");
        }
    });
});
