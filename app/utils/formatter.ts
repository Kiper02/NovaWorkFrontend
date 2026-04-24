export class Formatter {
    public static formattedBalance = (value: number) => {
        return `${value.toLocaleString()} ₽`
    }

    public static formattedCurrentDate = () => {
        const formatter = Intl.DateTimeFormat('ru-RU', {weekday: 'long', day: 'numeric', month: 'long'})
        return formatter.format(new Date())
    }
}