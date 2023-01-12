# React Template

## JSON Server 사용법

### json-server install

- global 방식으로 설치

```
sudo yarn global add json-server
// or
sudo npm install --global json-server
```

### json-server run

- port는 임의로 변경해도 되지만 axios instance 설정도 변경해야함

```
json-server ./db.sjon --port {port_number}
```

### package.json script

- yarn을 통한 실행은 아래 스크립트를 사용

```
yarn run db
```

### db.json

```
{
    "token": {
        "access_token": "access_token",
        "userId: "user"
    }
}
```

### env

.env.example 파일을 복사해서 사용

```
cp .env.example .env.local
```

## PnP mode

## Typescript + Prettier + Eslint

## react-query sample

## RTK query sample
