import express from "express";
import cors from "cors";
import { reqLogger } from "./middleware/logger.middleware.js";
import { globalErrorHandler } from "./middleware/error.middleware.js";
import { productRouter } from "./routes/product.routes.js";

const app = express();
const PORT = 3000;

// ⚙️ MIDDLEWARE WAJIB: Menggantikan fungsi manual parsing stream buffer bawaan Node.js
// Baris ini membuat Express otomatis membaca request body berformat JSON menjadi objek 'req.body'
app.use(cors()); //membuka set lintas domain
app.use(express.json()); //parshing json
app.use(reqLogger); //mencatat log aktivity

app.use("/product", productRouter)

// 3. JARING PENGAMAN AKHIR (Wajib ditaruh paling bawah setelah semua rute dideklarasikan)
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`⚡ [SERVER RUNNING]: Server POS Express berjalan di http://localhost:${PORT}`);
});