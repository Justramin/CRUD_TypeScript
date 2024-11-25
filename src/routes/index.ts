import express, { Request, Response } from 'express';
import EmployeeController from '../controllers/EmployeeController';

const router = express.Router();

// Define routes
router.get("/employee", async (req: Request, res: Response) => {
  await EmployeeController.getAllEmployee(req, res);
});

router.get("/employee/:id", async (req: Request, res: Response) => {
  await EmployeeController.getEmployee(req, res);
});

router.post("/employee", async (req: Request, res: Response) => {
  await EmployeeController.createEmployee(req, res);
});

router.put("/employee/:id", async (req: Request, res: Response) => {
  await EmployeeController.updateEmployee(req, res);
});

router.delete("/employee/:id", async (req: Request, res: Response) => {
  await EmployeeController.deleteEmployee(req, res);
});

export default router;
