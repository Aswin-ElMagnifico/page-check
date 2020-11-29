
function preFetch(files) {
    files.forEach( file => fetch(file));
}

export default preFetch;