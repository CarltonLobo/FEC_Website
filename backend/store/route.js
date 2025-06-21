import express from 'express';
import { postEntry } from './controller.js';


const router = express.Router();

// Route to create a new store entry
router.post('/create', postEntry);