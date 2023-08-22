export function getCurrentDate(separator='/'){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}${separator}${month}${separator}${year}`;
    
}

const getTime = (separator=":") => {
    const date = new Date();
    const hour = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();


    return `${hour}${separator}${minutes}${separator}${seconds}`;
}

export {getTime};