const csvConverter = (students) => {
    const items = students
    const replacer = (key, value) => value === null ? '' : value
    const header = Object.keys(items[0])
    const csv = [
      header.join(','),
      ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    ].join('\r\n')
    
    console.log(csv)
}