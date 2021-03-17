

const openNav = () => {

    var showhide = document.getElementById("mysidenav");
    if (showhide.style.width = "0px") {
        showhide.style.width = "300px";
        document.getElementById("close").style.display="block";
        document.getElementsByTagName("body")[0].style.position="fixed";
    }
}

const closeNav=()=>{
    var showhide = document.getElementById("mysidenav");
    if (showhide.style.width = "300px") {
        showhide.style.width = "0px";
        document.getElementById("close").style.display="none";
        document.getElementsByTagName("body")[0].style.position="";
    }
}
