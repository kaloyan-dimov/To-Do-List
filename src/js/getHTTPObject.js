export default () => {
    var xmlhttp; 
    
    if(window.XMLHttpRequest){ 
        xmlhttp = new XMLHttpRequest(); 
    } 
    else if (window.ActiveXObject){ 
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
        if (!xmlhttp){ 
            xmlhttp=new ActiveXObject("Msxml2.XMLHTTP"); 
        } 
        
    } 
    return xmlhttp;
}