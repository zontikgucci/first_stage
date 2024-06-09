export const formatNumberIntl = number => {
  return new Intl.NumberFormat('ru-RU').format(number);
}