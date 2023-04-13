class App {

    

    constructor (){
        
    }


magicFunction (clickable,link){

        document.querySelector(clickable).addEventListener('click',eve=>{
                window.location.assign(link);
        });
}

urlRoute (type) {
    return (type=="eng_des") ? `DeveloperApply.html` :`CompanyStack.html`;
}

encrytedObjectAndSaveLocally (seleted,keyValue,type) {
    var urlDetails = localStorage;
    var encryted = (type === "object")? btoa(JSON.stringify(seleted)) : btoa(seleted) ; // convert to string then base64 encode or convert to string straith if its string
    urlDetails.setItem(keyValue,encryted); // save to localstorage
}

decrytedObjectAndSaveLocally (savedDetails , type) {
    var urlDetails = localStorage;
    var encryted =  urlDetails.getItem(savedDetails); // get fromlocalstorage
    var decryted = this.encryptedStringToObject (encryted,type); // convert from base64 then to object
    
    return decryted;
}

encryptedStringToObject (yourEncrytedString, type){
    return (type === "object") ? JSON.parse(atob(yourEncrytedString)) : atob(yourEncrytedString);
}

getSeletedStact (classtype){
    document.querySelector(`.${classtype}`).addEventListener("click", eve => {
        if (eve.target.matches('.pane-eng-des-selected, .pane-eng-des-selected *')) {
            eve.preventDefault();
            var seleted = {
                   type : `${eve.target.dataset.type}`,
                   kind : `${eve.target.dataset.kind}`,
                   name :`${eve.target.dataset.nameofit}`
            }  
            this.encrytedObjectAndSaveLocally(seleted,"seletedDetais","object");
            window.location.assign(`${this.urlRoute(seleted.type)}`);
        }
        
    });
}

changeViewContentDevsComp () {
    // get all docs ready
    var name = document.querySelector(".nameofit");
    var kind = document.querySelector(".kind");
    var image = document.querySelector(".img-placeholder");

    // get saved value from localstorage
    var saveObject = this.decrytedObjectAndSaveLocally("seletedDetais","object");

    if(saveObject.type === "comp"){
        name.textContent  = saveObject.name;
        kind.textContent  = (saveObject.kind === "eng") ? "Developers":"Designers" ;
        image.src = `../assets/images/logo/${saveObject.name}.png`;
    }else{
        name.textContent  = saveObject.name;
        kind.textContent  = (saveObject.kind === "eng") ? "Developers":"Designers" ;
        image.src = `../assets/images/logo/${saveObject.name}.png`;
    }
}

changeViewContentEmailConform () {
    // get all docs ready
    var email_text = document.querySelector(".confirm-email-text");
    var email_message = document.querySelector(".confirm-email-message");

    // get saved value from localstorage
    var saveObject = this.decrytedObjectAndSaveLocally("confirmationType","string");
    console.log(saveObject);
    email_text.textContent  = (saveObject === "reg") ? "Confirm Your Email":"Thank You!!!" ;
    var content = (saveObject === "reg") ? ` Please take a moment to verify your email address. We sent an email with a verification link to
    <a href="#" class="confirmation-email-address">joemicky689@gmail.com.</a> If you didn’t receive the
    email, check your spam folder,
    <a href="#" class="confirmation-email-resend">click here</a> to resend it.` : `Your Application has been received. We will send an email to <a href="#" class="confirmation-email-address">joemicky689@gmail.com.</a> 
    for further imformation. ` ;
    email_message.textContent ="";
    email_message.insertAdjacentHTML("beforeend", content)

}

stackSelectedFuncs(){

    var container_stack_clicks = document.querySelector(".container_stack_clicks").childElementCount;
    for(var i = 0 ; i < container_stack_clicks ; i++){
        console.log(66);
       this.getSeletedStact(`pane-eng-des-container_${i + 1}`);
       this.getSeletedStact(`pane-eng-des-container_${i + 6}`);
    }

}


fixCarousel (classtype){
    document.querySelector(`.${classtype}`).addEventListener("click", eve => {
        console.log(eve.target.children)
        if (eve.target.matches('.pane-eng-des-selected, .pane-eng-des-selected *')) {
            
            // eve.preventDefault();
            // var seleted = {
            //        type : `${eve.target.dataset.type}`,
            //        kind : `${eve.target.dataset.kind}`,
            //        name :`${eve.target.dataset.nameofit}`
            // }  
            // this.encrytedObjectAndSaveLocally(seleted,"seletedDetais","object");
            // window.location.assign(`${this.urlRoute(seleted.type)}`);
        }
        
    });
}

run () {
      
    var pageUrl = window.location.href.split("/");
    var currentPage =  pageUrl[pageUrl.length - 1];
    
    console.log(currentPage );

    // pushing new code
    if(currentPage == "index.html" || currentPage == "public" || currentPage == ""  ){

        this.magicFunction(".joincqt","Registration_Page.html");
        this.magicFunction(".joincqt_","Registration_Page.html");
        this.magicFunction(".joincqt_1","Registration_Page.html");
        this.magicFunction(".hiretalent","HireTeam.html");
        this.magicFunction(".hiretalent_","HireTeam.html");
        this.magicFunction(".hiretalent_1","HireTeam.html");

    }else if (currentPage.startsWith("about.html") || currentPage.startsWith("About.html")) {
        this.magicFunction(".joincqt","Registration_Page.html");
        this.magicFunction(".hiretalent","HireTeam.html");
        this.magicFunction(".hiretalent","HireTalentPageCompanyBioPage.html");
    }
    else if (currentPage == "HireTalentPageCompanyBioPage.html" ){
        this.magicFunction(".hiretalent","HireTeam.html");
        this.magicFunction(".joincqt","Registration_Page.html");
        this.magicFunction(".hiretalent_","HireTeam.html");
    }
    else if (currentPage == "For-engineers.html" || currentPage == "For-designers.html"  ){
        this.magicFunction(".joincqt","Registration_Page.html");
        this.magicFunction(".joincqt_","Registration_Page.html");
          this.magicFunction(".joincqt_1","Registration_Page.html");
         this.magicFunction(".hiretalent","HireTeam.html");
         this.getSeletedStact("pane-eng-des-container");
         this.stackSelectedFuncs();
        
    }
    else if (currentPage == "For-company.html"   ){
      
         this.getSeletedStact("pane-eng-des-container");
         this.getSeletedStact("pane-eng-des-container_");
         this.stackSelectedFuncs();

    }
    else if ( currentPage == "DeveloperApply.html" ){
        

         this.changeViewContentDevsComp();
    }
    else if (currentPage == "CompanyStack.html"  ){
        
         this.changeViewContentDevsComp();
    }
    else if (currentPage == "cqtEmailConfirmation.html" || currentPage == "Emailconfirmationpage.html?"  ){
            this.changeViewContentEmailConform();
    }
    else if (currentPage == "CareerApplication.html"  ){
      
        this.encrytedObjectAndSaveLocally("car","confirmationType","string");
    }
    else if (currentPage == "cqtRegistration.html"  ){
        this.encrytedObjectAndSaveLocally("reg","confirmationType","string");
    }   

    else if (currentPage == "cqtPress.html"){ 
        // this.magicFunction(".leader-speak-slide-pro","cqtPressVideoModal.html");
        this.fixCarousel('leader-speak-slide-pro');

    } else {

}
}

}



var ap = new App();
ap.run () ;





