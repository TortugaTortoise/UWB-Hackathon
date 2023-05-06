// imports react library, consiting of a javascript library for building interface 
import React from 'react'; 
// import style.css, similar to <link href="style.css" rel="stylesheet"/>
import './style.css'; 
import './contact.css'; 


// use as reference: https://www.youtube.com/watch?v=KpA6oEaCHtk&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=3 

// functional component "contact"
export const Contact = () => {
    return ( 
        <>
            <head> 
                <title> Contact Page </title>
            </head>

            <body> 
                <header> {/* top of the page */}
                    {/* navigation tab, holds the links to the otehr pages*/}
                    <div className = "nav"> 
                        <link href="/page" className="active">Home</link>

                        {/* opportunties will have a speific link, when over it will have a 
                        drop down box showing two options */}
                        <div className="active">
                            <button className="" >Opportunities</button>
                            <div className="dropdown-content"> 
                                <link href="/createOpportunities">Create</link>
                                <link href="/findOpportunities">Find</link>
                            </div>

                        </div>

                        <link href="/contact" className="active">Contact</link>
                        <link href="/about" className="active">About</link>
                    </div>
                </header>

                <main> {/* main content of the page located here */}
                    <div className="contact_info">

                        <p> </p>



                    /</div>
                </main>

                <footer>  {/* bottom of the page */}

                </footer>
            </body>
        </>
    ); 
}

