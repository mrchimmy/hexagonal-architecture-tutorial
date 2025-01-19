// src/app/index.ts
import app from "../adapters/http/ExpressApp";
import dotenv from "dotenv";
dotenv.config({ path: 'src/app/config/.env' });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
