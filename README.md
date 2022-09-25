## Project Setup
yarn or npm install <br/>
npm i -g sequelize-cli <br />
npx sequelize-cli db:create <br />
npx sequelize-cli db:migrate <br/>
npx sequelize-cli db:seed:all

## Run
run this command line in 2 terminal <br/>
yarn ts <br/>
yarn dev

## Desain Database
![desain database](./Desain Database.png)

## API Spec
### Get All Products
{{protocol}}://{{host}}/products
### Get Product by id
{{protocol}}://{{host}}/products/search?id={{product_id}}
### Get Products by category
{{protocol}}://{{host}}/products/search?category={{category_id}}
### Get All Category
{{protocol}}://{{host}}/categories
#### Register
{{protocol}}://{{host}}/auth/register
#### Login
{{protocol}}://{{host}}/auth/login
payload auth = {
    "name" : {{yourname}},
    "tel_num" : {{your_telpNumber}},
    "referal" : {{referal_code}}, // allow null
}
