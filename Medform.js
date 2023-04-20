    function formValidation(){
        if(document.myform.firstName.value == ""){
            alert('insert your first name please!');
            document.myform.firstName.focus();
            return false;

        } else if (document.myform.lastName.value == ""){
            alert('insert your last name please!');
            document.myform.lastName.focus();
            return false;

        } else if (document.myform.sex.value == "choose"){
            alert('select the appropriate sex');
            document.myform.sex.focus();
            return false;
            
        } else if(document.myform.date.value == ""){
            alert('your date of birth is needed!') ;
            document.myform.date.focus();
            return false;

        } else if(document.myform.mobile.value == "" || 
            isNaN(document.myform.mobile.value)){ 
            alert('your mobile number is needed!') ;
            document.myform.mobile.focus();
            return false;
        
        } else if(document.myform.email.value == ""){
            alert('your email id is needed!') ;
            document.myform.email.focus();
            return false;

        }  else if(document.myform.address.value == ""){
            alert('please input your address!') ;
            document.myform.address.focus();
            return false;

        }  else if(document.myform.city.value == ""){
            alert('which city do you reside in?') ;
            document.myform.city.focus();
            return false;

        }  else if(document.myform.state.value == ""){
            alert('which state do you reside in?') ;
            document.myform.state.focus();
            return false;

        } else if (document.myform.status.value == "yourStatus"){
            alert('select the appropriate marital status');
            document.myform.status.focus();
            return false;

        }  else if(document.myform.kinFirstName.value == ""){
            alert("what's the first name of your kin!") ;
            document.myform.kinFirstName.focus();
            return false;

        } else if(document.myform.kinLastName.value == ""){
            alert("what's the last name of your kin!") ;
            document.myform.kinLastName.focus();
            return false;

        } else if(document.myform.relationship.value == ""){
            alert("what's the relationship between you & your kin!") ;
            document.myform.relationship.focus();
            return false;

        } else if(document.myform.kinContact.value == "" || 
            isNaN(document.myform.kinContact.value)){
            alert("insert the mobile number of your kin!") ;
            document.myform.kinContact.focus();
            return false; 

        } else if(document.myform.medication.value == "choice"){
            alert('choose yes or no!') ;
            document.myform.medication.focus();
            return false;}

        else if(document.myform.medication.value == "yes"){
            if(document.myform.listDrugs.value == ""){
            alert('list out all the drugs your taking!');
            document.myform.listDrugs.focus();
            return false;
            }

        } else {
            return true;
        }

    }
