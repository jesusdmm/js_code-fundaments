const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new  Promise((resolve, reject) => {
        if(true) {
            setTimeout (() => {
                resolve("true");
            }, 2000)
        }   else {
            const error = new Error('Whooops');
            reject(error);
        }
    });
}


somethingWillHappen2()
    .then(response => console.log(response))    //aca resibo la resputas, pero no se si es un resolve o un reject
    .catch(err => console.error(err));