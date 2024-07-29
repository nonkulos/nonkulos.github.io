const handleFormSubmit = (e, statusElement, msg) => {
    const status = document.getElementById(statusElement);
    fetch("https://calendarapp-production-cb6a.up.railway.app/formSubmit", {method: "POST"})
        .then(function(res){
            if(res.ok){
                console.log("successfully posted data");
                status.classList.remove("failed");
                status.classList.add("success");
                status.innerHTML = msg;
                return;
            }
            status.classList.remove("success");
            status.classList.add("failed");
            status.innerHTML = "Failed to post data";
            throw new Error("failed to post data");
        })
        .catch(function(res){
            status.classList.remove("success");
            status.classList.add("failed");
            console.log("failed to post data");
            status.innerHTML = "Failed to post data";
        })
};

export default handleFormSubmit;