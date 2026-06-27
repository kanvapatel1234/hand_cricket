let bat=document.querySelectorAll(".bat")
let yourmove=document.querySelector("#yourmove")
let computermove=document.querySelector("#computermove")
let us1=document.querySelector("#us1")
let myres=document.querySelector("#myres")
//
let bowl=document.querySelectorAll(".bowl")
let ym=document.querySelector("#ym")
let cm=document.querySelector("#cm")
let cs1=document.querySelector("#cs1")
let comres=document.querySelector("#comres")
//
let result=document.querySelector("#result")
let pa=document.querySelector("#pa")

const arr=[1,2,4,6];
let us=0
let cs=0

bowl.forEach(button => {
    button.disabled = true;
});
bat.forEach((but)=>{
    but.onclick=()=>{

        let a=Math.floor(Math.random()*arr.length)
        if(arr[a]!==parseInt(but.innerText)){
        yourmove.innerText=`YOUR MOVE:${but.innerText}`;
        computermove.innerText=`COMPUTER MOVE:${arr[a]}`;
        us+=parseInt(but.innerText);
        us1.innerText=`YOUR SCORE:${us} `
       
        
        }
        else{
            myres.innerText="OOPS!! YOU ARE OUT"
            us1.innerText=`YOUR SCORE:${us}`
            bat.forEach(button => {
                button.disabled = true;
            });
            yourmove.innerText=` `;
            computermove.innerText=` `;
            bowl.forEach(button => {
                button.disabled = false;
            })
            
        }
    }
})

bowl.forEach((but)=>{
    but.onclick=()=>{

        let a=Math.floor(Math.random()*arr.length)
        if(arr[a]!==parseInt(but.innerText)){
        ym.innerText=`YOUR MOVE:${but.innerText}`;
        cm.innerText=`COMPUTER MOVE:${arr[a]}`;
        cs+=arr[a];
        cs1.innerText=`COMPUTER SCORE:${cs} /TARGET:${us+1}`

        if(cs>=us+1){
            comres.innerText=`COMPUTER WON`
            bowl.forEach(button => {
                button.disabled = true;
             })
        }

        }
       else{
           
            comres.innerText=`COMPUTER OUT AT ${cs} ,AND YOU WON THE MATCH`
            bat.forEach(button => {
                button.disabled = true;
            });
            ym.innerText=` `;
            cm.innerText=` `;
            bowl.forEach(button => {
               button.disabled = true;
            })
            if(cs===us){
                comres.innerText=`COMPUTER OUT AT ${cs},TIE`
                bowl.forEach(button => {
                    button.disabled = true;
                 })
            }

            
       }
             
    }
})

pa.onclick=()=>{
    window.location.reload();
}
