const PropChild2 =(Props)=>{
    return(
        //console.log(Props);
        //console.log(Props.sports);
        <div>
            
            <p>{Props.sports[0]}</p>
            <p>{Props.sports[1]}</p>
            <p>{Props.sports[2]}</p>
            <p>{Props.sports[3]}</p>
           
        </div>
        );
}