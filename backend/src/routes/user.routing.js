const express = require('express');
const UserRouting = express.Router();
const {
    CommonMethodConstant,
    ControllerConstant,
} = require('../constants/api.constant');

const {
    userGetAll,
    userGetById,
    userCreate,
    userUpdate,
    userDelete,
} = require('../controllers/user.controller');
UserRouting.use(express.json());

/**
 * @swagger
 * /api/v1/user/get-all:
 *   get:
 *     tags:
 *       - User
 *     description: Get all Data
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/ResponseDto'
 */
UserRouting.get(CommonMethodConstant.GetAll, userGetAll);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   get:
 *     tags:
 *       - User
 *     description: Get data by Id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Primary key
 *         required: true
 *         schema:
 *             type: integer
 *     responses:
 *         200:
 *             description:  Return ResponseDto
 *             content:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/ResponseDto'
 *
 *
 */
UserRouting.get(CommonMethodConstant.GetById, userGetById);

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: Create new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       200:
 *         description: Returen ResponseDto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDto'
 *       500:
 *         description: Some server error
 */

UserRouting.post(CommonMethodConstant.Create, userCreate);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   put:
 *     summary: Update user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Primary key
 *         required: true
 *         schema:
 *             type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserRequest'
 *     responses:
 *       200:
 *         description: Return ResponseDto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDto'
 *       500:
 *         description: Some server error
 */
UserRouting.put(CommonMethodConstant.Update, userUpdate);

UserRouting.delete(CommonMethodConstant.Delete, userDelete);

module.exports = { UserRouting };
