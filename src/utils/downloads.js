const documentsData = [
  {
    id: 'docta-devs-temario',
    name: 'Temario DoctaDevs',
    receiver: 'Pablich',
    created: '29/08/2020',
    path: 'https://firebasestorage.googleapis.com/v0/b/feco-ws.appspot.com/o/docta-devs-temario.pdf?alt=media&token=b08336ee-b4e9-43ec-aab6-2140cc510391'
  }
]

export const searchDocument = (id) => {
  return documentsData.find(doc => doc.id === id)
}
