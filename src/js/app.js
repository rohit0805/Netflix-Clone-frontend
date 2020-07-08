import '../scss/style.scss';

var Controller=(function(){
    var flag=0,btn_element;
    var selector={
        placeholder:document.querySelector('.placeholder'),
        input_email:document.querySelector('.input_email'),
        alert:document.querySelector('.alert_msz'),
    };

    var ChangePosition=(e)=>{
        selector.placeholder.classList.add('change_top');
    };
    var RemovePosition=(e)=>{
        if(selector.input_email.value==0)
            selector.placeholder.classList.remove('change_top');
        flag=1;
        AlertMessage(e);
    };
    var AlertMessage=(e)=>{
        if(flag){
            selector.alert.style.display="block";
            selector.input_email.style.borderBottomColor="#ffa00a";
            var email=selector.input_email.value;
            var check=email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
            if(check){
                selector.alert.style.display="none";
            }
            else{
                if(email.length>=5){
                    selector.alert.innerHTML="Please enter a valid email address";
                }
                else{
                    selector.alert.innerHTML="Email is required";
                }
            }
        }
    };

    var SetupEventListener=()=>{
        //event for placeholder
        selector.input_email.addEventListener('focus',ChangePosition);
        selector.input_email.addEventListener('blur',RemovePosition);  
        //alert event
        selector.input_email.addEventListener('input',AlertMessage);
    };
    return {
        init:()=>{
            SetupEventListener();
        },
    }
})();

Controller.init();