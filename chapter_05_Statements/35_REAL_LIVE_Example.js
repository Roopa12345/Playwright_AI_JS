let isLoggedIn = true;
let userRole = "editor";
//app.vwo.com -> viewer, editor, admin
//viewer -> can only view
//editor -> can view and edit
//admin -> can view, edit and delete

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome Admin! You have full access.");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor! You can edit content.");
    }
    else if (userRole === "viewer") {
        console.log("Welcome Viewer! You can only view content.");
    } else {
        console.log("No idea which role you are!!");
    }
}
else {
    console.log("You are not logged in!!");
}

