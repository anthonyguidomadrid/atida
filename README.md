# <h1 align="center">Atída challenge</h1>
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]. This project was developed as part of a selection process as part of a job application.

## Install

```sh
npm install
```

## Usage

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Endpoints Server

The project is using the Makeup API [http://makeup-api.herokuapp.com/](http://makeup-api.herokuapp.com/) and the endpoints used in this projects are the followings:

|  Method        | Path                 | Description |
| :------------- | :-----               |:------------|
|  Get           | http://makeup-api.herokuapp.com/api/v1/products.json                   | Get all products       |
|  Get           |   http://makeup-api.herokuapp.com/api/v1/products/:productId.json          | Get a product with its ID     |
|   Get          | http://makeup-api.herokuapp.com/api/v1/products.json?:queryType=:query     | Make a query with a specific parameter and data (see API documentation)    |
|   Get          | http://makeup-api.herokuapp.com/api/v1/products.json?:firstQueryType=:firstQuery&:secondQueryType=:secondQuery     | Make a query with 2 parameters and datas (see API documentation)    |

## Endpoints Client

The project use the home page as the product listing and each product can be accessed through its id.
| Path                 | Description |
| :-----               |:------------|
| /                   | Home page with the product listing |
|   /:productId         | Product page |

## Libraries

This project was developed with the help of the following libraries:
* Axios
* Bootstrap
* FontAwesome
* React Paginate

## Author
**Anthony Guido**

- Github: [@anthonyguidomadrid](https://github.com/anthonyguidomadrid/)
- LinkedIn: [@anthony-guido](https://www.linkedin.com/in/anthony-guido/)

## License

Copyright © 2021 [Anthony Guido](https://github.com/anthonyguidomadrid/).