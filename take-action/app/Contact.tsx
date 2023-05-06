// imports react library, consiting of a javascript library for building interface 
import React from 'react'; 
// import style.css, similar to <link href="style.css" rel="stylesheet"/>
import './style.css'; 

// use as reference: https://www.youtube.com/watch?v=KpA6oEaCHtk&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=3 

// functional component "contact"
export const Contact = () => {
    return ( 
        <>
            <head> 
                <title> Contact Page </title>
                <link href="style.css" rel="stylesheet" /> 
            </head>

            <body> 
                <header> {/* top of the page */}

                </header>

                <main> {/* main content of the page located here */}
                    
                    {/* navigation tab */}
                    <div className = "nav"> 
                        <a href="#home" className="active">Home</a>
                        <a href="#opportunities" className="active">Opportunities</a>
                        <a href="#contact" className="active">Contact</a>
                        <a href="#about" className="active">About</a>
                    </div>

                    
                </main>

                <footer>  {/* bottom of the page */}

                </footer>
            </body>
        </>
    ); 
}

