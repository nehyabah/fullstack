import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2U4NDllNDM5NGFkOTE2NjU1MzNkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDg0NTMyOCwiZXhwIjoxNjUxMTA0NTI4fQ.KRrQQAQ5bW0tkliqciIxuUmtiRWlMha6SlhphL8dX1U";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
