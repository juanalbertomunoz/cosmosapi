

/**
 * @swagger
 * /saludo:
 *   get:
 *     summary: Retorna un saludo.
 *     description: Retorna un saludo en función del parámetro `nombre`.
 *     parameters:
 *       - in: query
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Saludo generado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 */
router.get('/saludo', (req, res) => {
    const { nombre } = req.query;
    const mensaje = `¡Hola, ${nombre}!`;
    res.json({ mensaje });
  });
  