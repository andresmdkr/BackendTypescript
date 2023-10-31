import app from "./app";

app.listen(app.get("port"));
console.log(`🟢 Server run on http://localhost:${ app.get("port")}`);
