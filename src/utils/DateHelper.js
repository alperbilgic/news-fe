export const getDate = (date) => {
    const newDate = new Date(date * 1000)
    const year = newDate.getFullYear().toString().length === 1 ? "0" + newDate.getFullYear() : newDate.getFullYear()
    const tempMonth = newDate.getMonth() + 1
    const month = tempMonth.toString().length === 1 ? "0" + tempMonth : tempMonth
    const day = newDate.getDate().toString().length === 1 ? "0" + newDate.getDate() : newDate.getDate()
    const hours = newDate.getHours().toString().length === 1 ? "0" + newDate.getHours() : newDate.getHours()
    const minutes = newDate.getMinutes().toString().length === 1 ? "0" + newDate.getMinutes() : newDate.getMinutes()
    this.time = hours + ":" + minutes
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes
}
