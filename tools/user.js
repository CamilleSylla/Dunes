import axios from "axios"


export async function getCurrentUser ( setUser ) {
    const userJWT = localStorage.getItem('dunes_token')
    if (userJWT) {
        let config = {
            headers: {
              Authorization: `Bearer ${userJWT}`,
            },
          };
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, config)
        setUser(data)
    }
}