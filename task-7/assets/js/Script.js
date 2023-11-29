 

   function validate()
   {
  
        let a = f1();
        let b = f2();
        let c = f3();
        let d = f4();
        let e = f5();
        let f = f6();
        let g = f7();
        let h = f8();
        let i = f9();
        let j = f10();
        let dmodel = document.getElementById("modelForm");
        let dmodelForm = dmodel.value;
        if(a && b && c && d && e && f && g && h && i && j)
        {
             dmodel.style.display ="block";
        }
    }
    
        // first name start
        function f1(){
            let fname = document.getElementById("firstName")
            const fn = fname.value;
            var Er1 = document.getElementById("er1");
            if(fn === "")
            {
                fname.style.borderColor = "red";
                Er1.innerHTML = "please enter your name";
            }else if((fn.charAt(0) >= 'A' && fn.charAt(0) <= 'Z') &&  check(fn)){
                fname.style.borderColor = "green" ;
                Er1.innerHTML = "" ;
                 console.log("hi")
                 return true;
                 
            }else{
                
                Er1.innerHTML = "first name must be Capital & numbers are not valid"
                fname.style.borderColor = "red"
            }
            function check(name)
            {
                let regEx = /^[a-zA-Z]+$/;
                let n = regEx.test(name);
                return n;
            }
         }

        // first name End


        // second name start 
        function f2()
        {
            let sname = document.getElementById("secondName")
            const sn = sname.value; 
            var Er2 = document.getElementById("er2");
            if(sn === "")
            {
                sname.style.borderColor = "red"
                Er2.innerHTML = "please enter your Second name"
                Er2.style.display = "block"
    
            }else if((sn.charAt(0) >= 'A' && sn.charAt(0) <= 'Z') && check(sn)){
                sname.style.borderColor = "green" ;
                Er2.innerHTML =" ";
                return true;
            }else{ 
                Er2.innerHTML = "first name must be Capital & numbers are not valid"
                sname.style.borderColor = "red";
            }

            function check(name)
            {
                let regEx = /^[a-z A-z]+$/ ;
                let rs = regEx.test(name)
                return rs;
            }
        }
        // second name End 


        //email start
        function f3()
        {
            let email = document.getElementById("em")
            const Email = email.value;
            let Er3 =document.getElementById("er3")
    
            if(Email === "")
            {
                email.style.borderColor = "red"
                Er3.innerHTML = "please enter your email"
            
            }else if(check(Email)){
                em.style.borderColor = "green" ;
                Er3.innerHTML = "" ;
                return true;
            }else{
                em.style.borderColor = "red" ;
                Er3.innerHTML ="Give proper mail"
            }

            function check(name){
              let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
                let rs = regex.test(name);
                return rs;
            }
 
        }
        //email End
        

        //password start
         var r ;
        function f4(){
            let password = document.getElementById ("pw")
            const Password = password.value;
            let Er4 =document.getElementById("er4")
    
            if(Password.trim() === "")
            {
                password.style.borderColor = "red"
                Er4.innerHTML = "please enter your password"
                
            }else if(checkpw(Password)){
                password.style.borderColor = "green" ;
                Er4.innerHTML = "";
                r = Password ;
                return true;
            }else{
                password.style.borderColor = "red" ;
                Er4.innerHTML ="password contain atleast 8 characters & one lower & upper case letters & one digit"
            }

            function checkpw(name)
            {
                let passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                let rs = passwordRegex.test(name);
                return rs;
            }
        } 
        //password End

      
        //confirm password start
        function f5(){
            let cpassword = document.getElementById("cpw")
            const Cpassword = cpassword.value;
            let Er5 = document.getElementById("er5")
    
            if(Cpassword.trim() === "")
            {
                cpassword.style.borderColor = "red" ;
                Er5.innerHTML = "please enter your Confirm Password" ;
            }else if(Cpassword === r){
                cpassword.style.borderColor = "green" ;
                Er5.innerHTML = "";
                return true;
            }else{
                cpassword.style.borderColor = "red" ;
                Er5.innerHTML ="invalid Confirm password"
            }

        }
        //confirm password End


        //  date of birth start
        function f6(){
            let DOB = document.getElementById("dob")
            const Dob = DOB.value;
            let Er6 =document.getElementById("er6")
    
            
            if(Dob === "")
            {
                DOB.style.borderColor = "red"
                Er6.innerHTML = "please enter your Date of Birth";
            }else{
                DOB.style.borderColor = "green"
                Er6.innerHTML = "";
                return true;
            }
        }
        // date of birth End


        // Number start
        function f7(){
            let numb = document.getElementById("num")
            const Num = numb.value;
            let Er7 =document.getElementById("er7")
    
            if(Num === "")
            {
                numb.style.borderColor = "red";    
                Er7.innerHTML = "please enter your Phone Number" ;
            }else if(check(Num))
            {
                numb.style.borderColor = "green";    
                Er7.innerHTML = "" ;   
                return true;
            }else{
                numb.style.borderColor = "red";    
                Er7.innerHTML = "invalid Phone Number" ;
            }
            function check(number){
                let phoneRegex = /^[6-9]\d{9}$/;
                let rs = phoneRegex.test(number);
                return rs;
            }
        }
        //Number End
     

        //gender start
        function f8() {
            var getValue = document.querySelector('input[name="fav"]:checked');
            let Er8 = document.getElementById("er8")
            if(getValue === null)
            {
                Er8.innerHTML = "Please Select your Gender"
            }else{
                Er8.innerHTML = "" ;
                return true;
            }
    
        }
        //gender End


        //country start
       function f9(){
            let country = document.getElementById("cou")
            const country1 = country.value;
            let Er9 = document.getElementById("er9")

            if(country1 == "")
            {
                country.style.borderColor = "red"
                Er9.innerHTML = "Please Select your country";
            }else{
                country.style.borderColor = "green"
                Er9.innerHTML = "";
                return true;
            }
        
       }
       //country End
       

       //check box Start
       function f10(){
        let check1 = document.getElementById("Check")
        const dcheck = check1.value
        let Er10 = document.getElementById("er10")

        if(!check1.checked)
        {
            
            Er10.innerHTML = "We need your Response";
        }else{
            Er10.innerHTML ="" ;
            return true;
        }

       }
    
       
    


   



  







 
 