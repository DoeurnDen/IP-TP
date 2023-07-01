var auth = {
    async getMe() {
        const res = await fetch(`http://localhost:3001/me` , {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
                Origin: "http://127.0.0.1:3000/",
            }
        });

        const result = await res.json();
        if (result?.success == false) return false
        return result
    }
}

export default auth;