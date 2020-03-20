import * as Yup from "yup";
var axios = require("axios").default;

const models = require("../../database/models/index");
var sender = require("../../utils/sendEmail");

class NotificateController {
  async index(req, res) {
    const notifyTo = await models.Notificate.findAll();

    if (notifyTo === null || notifyTo === undefined) {
      return res
        .status(404)
        .json({ error: "Nenhum pedido de notificação encontrado" });
    }
    return res.json({ notifyTo });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .min(5)
        .required(),
      currency: Yup.string()
        .min(3)
        .max(3)
        .required(),
      value: Yup.number().positive()
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "Algum campo não foi preenchido corretamente" });
    }

    const { email, currency, value } = req.body;

    const notificateExists = await models.Notificate.findAll({
      where: { email, currency, value }
    });

    // if (notificateExists) {
    //   return res.json(notificateExists);
    //   // return res.status(400).json({ error: "Notificação já registrada!" });
    // }

    const response = await models.Notificate.create({
      email,
      currency,
      value
    });

    return res.json(response);
  }
}

export default new NotificateController();
