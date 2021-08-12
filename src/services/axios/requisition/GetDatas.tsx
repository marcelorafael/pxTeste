import api from '../api'

const GetDatas = async (data: string) => {
  try {
    const response = await api.get(data)

    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

export default GetDatas