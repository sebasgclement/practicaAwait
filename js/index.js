const $list = document.getElementById('list');
let endPoint = 'https://jsonplaceholder.typicode.com/users';
//Con función asíncrona
/* async function getData(){
    try {
        let res = await fetch(endPoint);
        if (!res.ok) throw new Error ('Ocurrió un error en la API');
        let json = await res.json();
        json.forEach(element =>{
            const $li = document.createElement('li');
            $li.textContent = `${element.name} - ${element.email}`;
            $list.appendChild($li);
        })
    } catch (err) {
        console.error(err);
    }
} */
//Con función de tipo flecha
    const getData= async () =>{
        try {
            let res = await fetch(endPoint);
            if (!res.ok) throw new Error ('Ocurrió un error en la API');
            let json = await res.json();
            json.forEach(element =>{
                const $li = document.createElement('li');
                $li.textContent = `${element.name} - ${element.email}`;
                $list.appendChild($li);
            })
        } catch (err) {
            console.error(err);
        }
    }
document.addEventListener('DOMContentLoaded', (e)=>{
    //Con Promise
    /* fetch(endPoint)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        json.forEach(element =>{
            const $li = document.createElement('li');
            $li.textContent = `${element.name} - ${element.email}`;
            $list.appendChild($li);
        })
    .catch(err => console.error(err));
    }); */
    getData();
})

