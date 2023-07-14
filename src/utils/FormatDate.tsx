const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month.toString().padStart(2, '0')}/${year.toString().slice(-2)}`; // Retorna no formato MM/YY
}

export default formatDate;