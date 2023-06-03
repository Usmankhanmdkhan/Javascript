

function changebtn()
{
    const btn=document.querySelector(`button`);
    if(btn.innerText.includes(`on`))
    {
    btn.innerText=`turn off`;
    }

    else {
        btn.innerText=`turn on`
    }
    
}