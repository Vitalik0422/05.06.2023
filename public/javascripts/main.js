const orderForm = document.querySelector('.order')
const checkboxes = document.querySelectorAll('[name=type]')
const btnMinus = document.querySelector('.btnMinus')
const btnPlus = document.querySelector('.btnPlus')
const inpAmount = document.querySelector('.amount')

inpAmount.value = 0;


orderForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    addProduct(formData);
})

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () =>{
        checkboxes.forEach(cb => {
            if(cb !== checkbox){
               cb.checked = false;
            }
        })
    })
    
});

btnMinus.addEventListener('click', () => {
    inpAmount.value--;
    if(inpAmount.value >= 0){
        return;
    }
    else{
        inpAmount.value =0;
    }
})

btnPlus.addEventListener('click', () => {
    inpAmount.value++;
})


inpAmount.addEventListener('change', (ev) => {
    if(ev.target.value >= 0){
        console.log(ev.target.value);
        return;
    }
    else {
        ev.target.value = 0;
    }
})


const addProduct = async (formData) => {
    console.log('done js');
    const result = await axios.post('/add', formData)
}

/// ajax




