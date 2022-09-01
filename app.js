const content = document.querySelector('.content');
   function makeGrid(row,col) {
    let getClass = 'box0';
    for(let i = 0 ; i<row*col; i++)
    {   
       
        if( i % row === 0) getClass='box'+(i/row).toString();
        let divCreate = document.createElement('div');
        divCreate.classList.add(getClass);
        divCreate.addEventListener('mouseenter',(event) => {
            event.target.style.backgroundColor = 'red';
        })
        content.appendChild(divCreate);

    }    
   }



const btn = document.querySelector('.btn');
btn.addEventListener('click',() => {
    makeGrid(prompt('take your row',''),prompt('take your coloum',''));
});

// const box = document.querySelector('box');
