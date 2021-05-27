


// function validation(e)
// {
//     e.preventDefault();
//     var first = document.getElementById("first");
//     var last = document.getElementById("last");

//     // var gender= document.getElementsById("select-gender");
//     // var state= document.getElementsById("select-state");

//     var mobile = document.getElementById("number");
//     var email = document.getElementById("email");
   

//     console.log(first.value);
//     console.log(last.value);

//     console.log(mobile.value);
//     console.log(email.value);

//     // console.log(gender.value);
//     // console.log(state.value);

//     if( first.value.trim() ==""||last.value.trim() =="")
//     {
//         alert("Enter first/last name");
//         return ;
//     }



//     //   if(gender.value ==""|| state.value =="")
//     // {
//     //     alert("select state/gender");
//     //     return;
//     // }


//     console.log("in submit");
// }
// const form = document.getElementById('regform');


// form.addEventListener("submit", validation);


function validation()
{

    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var gender = document.getElementById("gender").value;
    var number = document.getElementById("number").value;
    var state = document.getElementById("state").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;

    //First Name validation
    console.log(first);
    console.log(last);
    console.log(gender);
    console.log(number);
    console.log(state);
    console.log(email);
    console.log(pass);
    console.log(conpass);
     if (first == "")
    {
     alert("Enter first name");
     return false;
     
    }
    if( (first.length <= 2 )|| (first.length >=20))
    {
        alert("Character length must be between 2 to 20");
        return false;
    }
    if(!isNaN(first))
    {
        alert("Only characters are allowed");
        return false;
    }


    //last Name validation
    if (last == "")
    {
     alert("Enter last name");
     return false;
     
    }
    if((last.length <= 2 ) || (last.length >=20))
    {
        alert("Character length must be between 2 to 20");
        return false;
    }
    if(!isNaN(last))
    {
        alert("Only characters are allowed");
        return false;
    }

    //Gender select box validation
    if (gender == "")
    {
     alert("Choose Gender");
     return false;
     
    }
    
    //Mobile Number validation
    if (number == "")
    {
     alert("Enter Mobile Number");
     return false;
     
    }
    if(isNaN(number))
    {
        alert("Only Digits allowed in Mobile Number field ");
        return false; 
    }
    if(number.length != 10)
    {
        alert("Mobile number must be of 10 digits");
        return false; 
    }


    // Select state validation

    if (state == "")
    {
     alert("Choose State");
     return false;
     
    }

    //Email Validation
    if (email == "")
    {
     alert("Enter Email Adress");
     return false;
    }
    if(email.indexOf('@') <= 0)
    {
     alert("Enter valid Email Adress");
     return false;
    }
    if((email.charAt(email.length-4)!= '.' && email.charAt(email.length-3)!= '.'))
    {
     alert("Enter valid Email Adress");
     return false;
    }

   //password and confirm password  Validation
    if (pass == "")
    {
     alert("Enter password");
     return false; 
    }
    if(pass.length <= 5)
    {
        alert("Password length must be more than 5 characters");
        return false;
    }
    if (conpass == "")
    {
     alert("Enter Confirm Password");
     return false;
    }
    if (pass!=conpass)
    {
        alert("Password and confirm password not matching");
        return false;  
    }
    
   
     
    }













