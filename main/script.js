// function myFunction() {
//     let body = document.getElementsByTagName('body');
//     for(let i = 0; i < body.length; i++){
//       if ( body[i].style.backgroundColor != 'whitesmoke')
//       body[i].style.backgroundColor = 'whitesmoke';
//       else
//       body[i].style.backgroundColor = 'hsl(230, 17%, 14%)';
//     }
//     /*for the h3*/
//     let black = document.getElementsByTagName('h3')
//     for(let i = 0; i < black.length; i++){
//       if(black[i].style.color = 'white' )
//       black[i].style.color = 'black';
//       else  {
//       black[i].style.color = 'white';
//       }
//     }
//     /*for sec1*/
//     let part = document.getElementsByClassName("sec1");
//     for(let i = 0; i < part.length; i++){
//       if(part[i].style.backgroundColor != 'white' )
//       part[i].style.backgroundColor = 'white';
//       else
//       part[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
//     }
//      /* for the number in white*/
//     let fig = document.getElementsByClassName("numbs");
//     for(let i = 0; i < fig.length; i++){
//       if(fig[i].style.color = 'white' ){
//       fig[i].style.color = 'black';
//       }else if(  fig[i].style.color = 'black')  {
//       fig[i].style.color = 'white';
//       }
     
//     }
    
//       /* for sec 2*/
//     let trap= document.getElementsByClassName("sec2");
//     for(let i = 0; i < trap.length; i++){
//       if(trap[i].style.backgroundColor != 'white' )
//       trap[i].style.backgroundColor = 'white';
//       else
//       trap[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
//     }
    
//   }


let checkbox = document.getElementById('check');



checkbox.addEventListener('change', (e) =>{
    if (e.target.checked) {
        console.log(e);
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
    //for the text
  
  
  })