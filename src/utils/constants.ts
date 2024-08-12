export const BASE_URL = (): string => {
    return process.env.environment === "dev" ? "http://localhost:3000" : "https://thedonalds.vercel.app";
}