import axios from 'axios';
export default function baseURL() {
    const api = axios.create({
        // baseurl =
        // run a code space on main
        // command: npm run start:prod
        // go to ports tab in terminal and make the 3000 port public under the visibility column
        baseURL: "https://fuzzy-spork-jj579vr4j46rcjjqg-3000.app.github.dev/",
        //replace with own uri
    });
    return api;
}