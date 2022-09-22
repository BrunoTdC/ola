
    let valido = true  

    function btn_1(){
         
       switch(valido){
        case true :
            
       for(let i = 0; i <= 16; i++){
        let animation = document.getElementById(`ambas${i}`)
        animation.classList.add('animation_btn')
        valido = false
       }
        break

        case false :

        for(let i = 0; i <= 16; i++){
         let animation = document.getElementById(`ambas${i}`)
         animation.classList.remove('animation_btn')
         valido = true
        }

        break
       } 
    }
    
    let valido2 = true  
    function btn_2(){
        
        switch(valido2){
         case true :
             
        for(let i = 0; i < 3; i++){
         let animation = document.getElementById(`online${i}`)
         animation.classList.add('animation_btn2')
         valido2 = false
        }
        break
 
         case false :
 
        for(let i = 0; i < 3; i++){
          let animation = document.getElementById(`online${i}`)
          animation.classList.remove('animation_btn2')
          
          valido2 = true
         }
 
         break
        } 
     }
     let valido3 = true  
     function btn_3(){
        
        switch(valido3){
         case true :
             
        for(let i = 0; i < 9; i++){
         let animation = document.getElementById(`presencial${i}`)
         animation.classList.add('animation_btn3')
         valido3 = false
        }
        break
 
         case false :
 
        for(let i = 0; i < 9; i++){
          let animation = document.getElementById(`presencial${i}`)
          animation.classList.remove('animation_btn3')
          valido3 = true
         }
 
         break
        } 
     }
