# Framework Comparision

* jQuery
* Angular5
* Polymer3
* Vue2
* React (currently missing, not implemented yet)

# Starting

## Start JSON data provider

```
php -S 127.0.0.1:8090 -t server/public
```

The service is running at [http://127.0.0.1:8090/random-products.json.php](http://127.0.0.1:8090/random-products.json.php),
keep it running in a separate terminal session. The according client
implementation will make use of exactly that URL.

## Start client implementations

### jQuery

```
cd client/jquery
npm install
php -S 127.0.0.1:8089 -t .
```

Open [http://127.0.0.1:8089/](http://127.0.0.1:8089/)

### Angular5

```
cd client/angular/product-app
yarn install
yarn run start
```

Open [http://localhost:4200/](http://localhost:4200/)

### Polymer3

```
cd client/polymer/product-app
yarn install
yarn run start
```

Open [http://127.0.0.1:8081/](http://127.0.0.1:8081/)

### Vue2

```
cd client/vue/product-app
npm install
npm run serve
```

Open [http://localhost:8080/](http://localhost:8080/)

### React (not implemented yet)