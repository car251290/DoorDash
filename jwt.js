const jwt = require('jsonwebtoken')

const accessKey = {
    "developer_id": "607a1820-5230-4b7f-8fbd-076f1b402a48",
    "key_id": "45c45632-bf32-4daa-9bd5-cb7f46825f8f",
    "signing_secret": "NuE8YkKuT0zz4JrtZSGAMitqB7d5qFEkQsO4pXuMKFE"
  }

const data = {
  aud: 'doordash',
  iss: accessKey.developer_id,
  kid: accessKey.key_id,
  exp: Math.floor(Date.now() / 1000 + 60),
  iat: Math.floor(Date.now() / 1000),
}

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } }

const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
)

console.log(token)