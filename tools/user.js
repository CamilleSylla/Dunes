import axios from "axios"


export async function getCurrentUser ( setUser ) {
    const userJWT = localStorage.getItem('dunes_token')
    const connectionTime = localStorage.setItem('dunes_session', new Date())
    if (userJWT) {
        let config = {
            headers: {
              Authorization: `Bearer ${userJWT}`,
            },
          };
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, config)
        data.jwt = userJWT
        console.log(data);
        setUser(data)
    }
}