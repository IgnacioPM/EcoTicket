const GetCurrentDate = () => {
  const currentDate = new Date()

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  return formattedDate
}

export default GetCurrentDate
