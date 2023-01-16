
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'liasop0i',
  dataset: 'production',
  apiVersion: '2022-11-23', // use a UTC date string
  token: 'skydwlaTSu9uY9laOuKMZHy429UOFr0X4PX08eaoPknfHPHNXyOVDob4U5twFQ9IaVMJyIpHbVOKyPcQcc942a0no52sGnVUyIwcjh3pz0zbhD3mJzc0wrAi0K0f7sExNodpSZIUQqBmBsDY5EzT5KerIOQv3qr0Fy5Ew8Pjp6haz2oyCEQv', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client