import { Router } from "express";
import * as productController from "../controllers/prod.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { productValidators } from "../middlewares/validators/prodValidators";
import { handleValidationErrors } from "../middlewares/validation.middleware";

const router = Router()

// OBTENER TODOS
router.get("/", productController.index);
// CREAR
router.post("/", ...productValidators,
handleValidationErrors, authMiddleware, productController.create); 
// OBTENER UNO
router.get("/:id", productController.show);
// BORRAR
router.delete("/:id", ...productValidators,
handleValidationErrors, authMiddleware,  productController.destroy);

export default router;
