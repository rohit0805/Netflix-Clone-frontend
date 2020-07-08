import '../scss/style.scss';

var Controller=(function(){
    var selector={
        placeholder:document.querySelector('.placeholder'),
        input_email:document.querySelector('.input_email')
    };
    var ChangePosition=(e)=>{
        selector.placeholder.classList.add('change_top');
    };
    var RemovePosition=(e)=>{
        selector.placeholder.classList.remove('change_top');
    }
    var SetupEventListener=()=>{
        //event for placeholder
        selector.input_email.addEventListener('focus',ChangePosition);
        selector.input_email.addEventListener('blur',RemovePosition);
    };
    return {
        init:()=>{
            SetupEventListener();
        },
    }
})();

Controller.init();