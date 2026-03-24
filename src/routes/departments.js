import { Router } from 'express';
import { list, getOne, create, update } from '../controllers/departmentController.js';
import { protect, superAdminOnly } from '../middleware/auth.js';

const router = Router();

router.get('/', list);
router.get('/:id', protect, getOne);
router.post('/', protect, superAdminOnly, create);
router.patch('/:id', protect, superAdminOnly, update);

export default router;
