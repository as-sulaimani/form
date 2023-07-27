function formValidation() {
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const birthday = document.getElementById("birthday").value;
   const text = document.getElementById('text').value;

   // REGEX FOR EMAIL AND PHONE NUMBER
   const regexemail = /^[A-Z-a-z-0-9]+@([a-z]+\.)+[a-z]{2,3}$/;
   const regexphone = /(\+212|0)([\-_/]*)(\d[\-_/]*){9}/

   // CONDITION TO CHECK IS THE EMAIL VALID
   if (!regexemail.test(email)) {
       document.getElementById("er1").innerHTML = "Invalid email format";
       return;
   } else {
       console.log('your email is correct');
   }

   // CONDITION TO CHECK IS THE PHONE NUMBER VALID
   if (!regexphone.test(phone)) {
       document.getElementById("er2").innerHTML = "Invalid phone number";
       return;
   } else {
       console.log('your poune number is correct');
   }


   // CONDITION TO CHECK IS THE BIRTHDAY VALID
   if (!isValidBirthday(birthday)) {
      document.getElementById('er3').innerHTML = "Invalid birthday!"
       return;
   } else {
      console.log("Valid birthday!");

   }

   document.getElementById('eml').innerHTML = email
   document.getElementById('phn').innerHTML = phone
   document.getElementById('btd').innerHTML = birthday
   document.getElementById('txt').innerHTML = text

}

// FUNCTION TO CHECK IS THE BIRTHDAY VALID
function isValidBirthday(birthday) {
   // CONVERT the input string to create a Date
   const birthdayDate = new Date(birthday);

   // Check if the output was successful and the date is valid
   if (isNaN(birthdayDate.getTime())) {
       return false; // Invalid date
   }

   // Extract the year from the date
   const birthYear = birthdayDate.getFullYear();

   // Check if the year is between 2000 and 2024 (inclusive)
   return birthYear >= 2000 && birthYear <= 2024;
}


const btn = document.getElementById('submitBtn');

btn.addEventListener('click', function handleClick() {
  

   const email = document.getElementById("email");
   const phone = document.getElementById("phone");
   const birthday = document.getElementById("birthday");
   const text = document.getElementById('text');

   email.value = "";
   phone.value = "";
   birthday.value = "";
   text.value = "";

});
