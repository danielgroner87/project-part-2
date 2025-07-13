/*document.addEventListener("DOMContentLoaded", function () { //מתחיל את הפעולה ברגע שהאתר נטען
    const form = document.querySelector("form");// מכניס למשתנה את הסקר עצמו
    form.addEventListener("submit", function (e) {// פעולה שקורת בזמן השליחה
      e.preventDefault();// חשוב! מונע מהאירוע להשלח. אנחנו בצד לקוח. שליחה תגרום כל פעם לדף להתאפס מחדש

      const name = document.getElementById("signup-name").value;// שמירה במשתנים את הערכים שהכנסתי. חופש לפי תז
      const age = document.getElementById("signup-age").value;
      const password = document.getElementById("signup-password").value;

      // שמירה ב-localStorage
      localStorage.setItem("userName", name);// שומר במערכת את הערכים
      localStorage.setItem("userAge", age);// צד שמאל מהפסיק זה כביכול שם המשתנה וצד ימין זה הערך שיכנס
      localStorage.setItem("userPassword", password);

      alert("Registration successful! You can now log in.");
      window.location.href = "Login.html"; // פקודה אשר מעבירה לדף ההתחברות
    });
  });*/

  document.addEventListener("DOMContentLoaded", function () { //מגדיר איבנטליסנר כשהדף נטען לטופס הראשון ומגדיר לו את ברירת המחדל מחדש
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
// הגדרת ערכים למשתנים
    const name = document.getElementById("signup-name").value;
    const age = document.getElementById("signup-age").value;
    const password = document.getElementById("signup-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || []; //  שומר הרבה יוזרים כאובייקטים או כמערך ריק

    
    if (users.find(user => user.name === name)) { // בודק שהיוזר הזה לא קיים עדיין. פונקציית חץ משום שהיא לשורה אחת ואין צורך בריטרן וכל המנהלות
      alert("User already exists. Please choose a different name.");
      return; // עוצר את המשך ביצוע הפונקציה (לא מאפשר רישום).
    }

    users.push({ name, age, password }); //שומר את כל הנתונים
    localStorage.setItem("users", JSON.stringify(users)); // מחזיר את האובייקטים לסטרינגים שנשמרים במחשב. הלוקאל סטורג שומר את זה לשמירה מהירה על המחשב והוא יכול לשמור רק סטרינגים אז עושים לזה המרה לסטרינג
// אנחנו עושים סט אייטם כי זאת שיטה שלוקחת את המפתח של יוזרז ואת הסטרינגים שאנחנו לוקחים מהמשתמש עכשיו ושומרת אותם ביחד
    alert("Registration successful! You can now log in.");
    window.location.href = "Login.html";
  });
});

