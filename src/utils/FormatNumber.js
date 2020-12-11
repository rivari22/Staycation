export default function FormatNumber(number) {
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number)
}