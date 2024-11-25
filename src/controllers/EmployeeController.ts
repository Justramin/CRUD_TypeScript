import  express, { Request, Response } from "express";
import { EmployeeModel } from "../db/employee";



class EmployeeController {
    // Get all employees
    getAllEmployee = async (req: Request, res: Response): Promise<Response> => {
        try {
            const employees = await EmployeeModel.find();
            return res.status(200).json({ data: employees });
        } catch (error) {
            return res.sendStatus(400);
        }
    };

    // Get single employee by ID
    getEmployee = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const employee = await EmployeeModel.findById(id);
            return res.status(200).json({ data: employee });
        } catch (error) {
            return res.sendStatus(400);
        }
    };

    // Create employee
    createEmployee = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { name, email, mobile, dob, doj } = req.body;
            const employee = new EmployeeModel({
                name,
                email,
                mobile,
                dob,
                doj,
            });
            await employee.save();
            return res.status(201).json({ message: "Employee Created", data: employee });
        } catch (error) {
            return res.sendStatus(400);
        }
    };

    // Update employee
    updateEmployee = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const { name, email, mobile, dob, doj } = req.body;

            const employee = await EmployeeModel.findById(id);
            if (employee) {
                employee.name = name;
                employee.email = email;
                employee.mobile = mobile;
                employee.dob = dob;
                employee.doj = doj;

                await employee.save();
                return res.status(200).json({ message: "Employee Updated", data: employee });
            }
            return res.sendStatus(400);
        } catch (error) {
            return res.sendStatus(400);
        }
    };

    // Delete employee
    deleteEmployee = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            await EmployeeModel.findByIdAndDelete({ _id: id });
            return res.status(200).json({ message: "Employee Deleted" });
        } catch (error) {
            return res.sendStatus(400);
        }
    };
}

export default new EmployeeController();