const documentsData = [
  {
    id: 'docta-devs-temario',
    name: 'Temario DoctaDevs',
    receiver: 'Pablich',
    created: '29/08/2020',
    path: 'documents/doctadevs.pdf'
  }
]

export const searchDocument = (id) => {
  return documentsData.find(doc => doc.id === id)
}
