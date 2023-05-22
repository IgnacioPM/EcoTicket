const OneWeekLaterDate = () => {
  const currentDate = new Date()
  const oneWeekLater = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
  const formattedDate = oneWeekLater.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  return formattedDate
}

export default OneWeekLaterDate
