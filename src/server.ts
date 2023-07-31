import { app } from "./app";

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})