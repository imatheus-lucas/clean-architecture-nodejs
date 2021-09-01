import { AnySchema } from "yup";
import { NextFunction, Request, Response } from "express";

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  };
export default validate;
