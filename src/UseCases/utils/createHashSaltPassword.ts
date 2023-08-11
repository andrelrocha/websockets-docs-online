import { randomBytes, scryptSync } from "crypto";

function createHashSaltPassword(password: string) {
    const salt = randomBytes(16).toString("hex");

    const hashedPassword = scryptSync(password, salt, 64).toString("hex");

    return { hashedPassword, salt };
}

export { createHashSaltPassword };