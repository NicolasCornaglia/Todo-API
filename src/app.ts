// const express = require('express'); 
import express, {Request, Response, NextFunction} from 'express';
import todoRoutes from './routes/todos';
import {json} from 'body-parser';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({message: err.message})
}); // error handling middleware

app.listen(3000);