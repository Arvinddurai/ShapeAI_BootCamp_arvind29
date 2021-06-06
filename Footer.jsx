import React from "react"

function Footer(){
    var date = new Date();
    return(
        <footer>
            <h1></h1>
            <p>
                copyright@{date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}
            </p>
        </footer>

    );
}

export default Footer;