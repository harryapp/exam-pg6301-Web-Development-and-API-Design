const prod = {
    url: {
        BASE_URL: "https://chat-app-exam22.herokuapp.com"
    }
};

const dev = {
    url: {
        BASE_URL: "http://localhost:3000"
    }
};

export const config = process.env.NODE_ENV === "production" ? prod : dev;