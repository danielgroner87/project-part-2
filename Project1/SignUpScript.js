document.addEventListener("DOMContentLoaded", function () { //מתחיל את הפעולה ברגע שהאתר נטען
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
  });
