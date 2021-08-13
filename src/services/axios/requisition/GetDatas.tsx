import api from '../api'

const GetDatas = async (data: string) => {
  try {
<<<<<<< HEAD
    const response = await api.get(data, { validateStatus: () => true })
=======
    const response = await api.get(data)
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84

    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

export default GetDatas