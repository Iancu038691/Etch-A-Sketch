const content = document.querySelector('.content');
   function makeGrid(row,col) {
    if(row>100 && col>100)return alert('too big');
    content.setAttribute('style',
    `grid-template-columns: repeat(${col}, 4fr);
    grid-template-rows: repeat(${row}, 4fr);`);
    
    for(let i = 0 ; i<row*col; i++)
    {   let  getDarker = 1;
        let divCreate = document.createElement('div');
        divCreate.classList.add('box');
        divCreate.addEventListener('mouseenter',(event) => {
            
            event.target.style.backgroundColor = `rgb(${255*getDarker},${255*getDarker},${getDarker*255})`;
            getDarker -=1/10;
        })
        content.appendChild(divCreate);
    }    
   }

function removeGrid()
   {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
   }

const btn = document.querySelector('.btn');
btn.addEventListener('click',() => {
    removeGrid();
    makeGrid(prompt('take your row',''),prompt('take your coloum',''));
});


