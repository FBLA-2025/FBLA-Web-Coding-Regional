import axios from 'axios';
export default function baseURL() {
    const api = axios.create({
        // baseurl =
        // run a code space on main
        // command: npm run start:prod
        // go to ports tab in terminal and make the 3000 port public under the visibility column
        baseURL: "https://verbose-space-acorn-wr75xpv9r57w25r54-3000.app.github.dev/",
    });
    return api;
}