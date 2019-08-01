var schemaForms = {
    zoho: {
        schema: {
            "type": "object",
            "title": "Comment",
            "properties": {
                "subject": {
                    "title": "Subject",
                    "type": "string",
                    "description": "subject of the ticket"
                },
                "message": {
                    "title": "Message",
                    "type": "string"
                },
                "required": [
                    "deviceId",
                    "user",
                    "password",
                    "token"
                ]
            }
        },
        form: [
            "subject",
            {
                type : "textarea",
                key : "message"
            },
        ]

    }
}