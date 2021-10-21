import react from "react";
import Card from "./Card";

function About(){
   
    return(

        <>
        <Card
        id="1"
        imgsrc ="https://wallpapercave.com/wp/wp3644722.jpg"
        sname="A Netflix Series"
        title=" Power Rangers"
        link ="https://www.netflix.com/in/title/80144309"

        />

        <Card
        id="2"
            imgsrc="https://wallpapercave.com/wp/ldvgbB8.jpg"
            sname="A Netflix Series"
            title=" Shaun The Sheep"
            link="https://www.netflix.com/in/title/70155567"
        />

        <Card
        id="3"
            imgsrc="https://wallpapercave.com/wp/wp2424242.jpg"
            sname="A Netflix Series"
            title="Supa Strikas"
            link="https://help.netflix.com/en/contactus"
        />

        </>
    )


}

export default About;