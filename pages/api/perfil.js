// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "nome": "Lucas Campos",
    "bio": "Diretor",
    "theme": {
        "name": "black",
        "primary": "#ffffff",
        "secondary": "#2b2b2b",
        "background": "#202024"
    },
    "profile_pic": "https://monocard.com.br/wp-content/uploads/2021/06/d879262ee7a6773d93849f6f42287716_picture-300x300.jpg",
    "links": [
        {
            "id": 427,
            "key": 0,
            "title": "Linkedin",
            "description": "",
            "icon": "<i class=\\\"fab fa-linkedin\\\" aria-hidden=\\\"true\\\"></i>",
            "url": "https://monocard.com.br/link/427/",
            "target_url": "https://www.linkedin.com/in/lucasmscampos/",
            "template": "linkedin"
        },
        {
            "id": 424,
            "key": 1,
            "title": "E-mail",
            "description": "Comercial",
            "icon": "<i class=\\\"fas fa-envelope\\\" aria-hidden=\\\"true\\\"></i>",
            "url": "https://monocard.com.br/link/424/",
            "target_url": "mailto:Contato@monocard.com.br",
            "template": "e-mail"
        },
        {
            "id": 423,
            "key": 2,
            "title": "Whatsapp",
            "description": "Comercial.",
            "icon": "<i class=\\\"fab fa-whatsapp\\\" aria-hidden=\\\"true\\\"></i>",
            "url": "https://monocard.com.br/link/423/",
            "target_url": "https://wa.me/5531994184444",
            "template": "whatsapp"
        },
        {
            "id": 1874,
            "key": 3,
            "title": "Telefone",
            "description": "Telefone",
            "icon": "<i class=\\\"fas fa-phone\\\" aria-hidden=\\\"true\\\"></i>",
            "url": "https://monocard.com.br/link/1874/",
            "target_url": "tel:31994184444",
            "template": "telefone"
        }
    ],
    "empresa": {
        "name": "Revirtua",
        "profile_pic": "https://monocard.com.br/wp-content/uploads/2021/11/c50aec35f01771c96eb0a251c9fd9aae_picture-1-300x300.png"
    }
})
}
