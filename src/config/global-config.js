export default class GlobalConfig {
    static get API_URL() {
        if (process.env.NODE_ENV === 'development') {
            return 'http://localhost:3000/yosk';
        }
        if (process.env.NODE_ENV === 'production') {
            // ADD URL IN PROD IN FUTURE
            return '';
        }
    }
}