# React Template

- Package Manager: Yarn Berry (not PnP mode)
- Framework: React CRA Base (React 18+)
- Bundler: Vite
- Server State Management: React Query + axios
- Local State Management: useExternalStore(React 18+)
- Style: @emotion, twin.macro(tailwindcss)
- Mock Data: json-server
- Design System: Storybook (vite-builder)
- Test: Jest
- Convension: ESLint + Prettier

## 요약 및 사용 목적

신규 프로젝트 설치 시 기본적으로 사용할 기술 스택과 컨벤션을 통일하고,
코드 예제를 제공함으로써 기술의 사용 방법과 목적을 명확히 하기 위함

## 사용 방법

### Install

.yarnrc.yml에서 pnp 여부를 설정할 수 있으며, storybook 실행 문제로 인하여 `nodeLinker: node-modules` 방식을 사용 중

```bash
yarn install
```

### Environment

`package.json`을 참고하여 script 확인
실행 전 .env.example 파일을 복사하여 사용

```bash
cp .env.example .env.local
```

`env-cmd`를 기반으로 env file을 참조하고 있으니 필요에 따라 `package.json` script와 `.env.*` 파일을 추가하여 사용

env는 vite 기반이기 때문에 `REACT_APP_`이 아닌 `VITE_` 형식으로 선언

```
VITE_TEST_API_URL = http://localhost:4000
```

env를 호출하는 방식은 `process.env`이 아닌 `import.meta.env` 방식으로 사용

```ts
const api = import.meta.env.VITE_TEST_API_URL;
```

### json-server

global 방식으로 설치

```
sudo npm install -g json-server
```

`package.json`에서 `db` 명령어를 참고

```json
// package.json
"scripts": {
    "db": "json-server --watch db.json --routes routes.json --port 4000"
}
```

`--routes routes.json`의 사용 용도는 호출하려는 API 주소가 json-server에서 생성한 주소와 다를 경우 사용

```json
// "실제 호출하는 주소": "매칭할 db.json 주소"
{
  "/auth/signin": "/signin",
  "/auth/token": "/token"
}
```

`src/apis/instance/index.ts`에서 해당 json-server를 사용할 instance를 추가해주고 사용

```ts
// src/apis/instance/index.ts
export const localInstance = axios.create({
  baseURL: import.meta.env.VITE_TEST_API_URL,
});
```

[json-server](https://github.com/typicode/json-server) 링크를 통해 db.json 선언 방식이나 활용법을 확인

```
{
    "token": {
        "access_token": "access_token",
        "userId: "user"
    }
}
```

## 상세 설계

### 데이터의 호출 및 캐싱

- `apis`를 통해 API Access를 제어하고 데이터 원형에 대한 타입 선언과 인스턴스를 관리
- `services`는 호출된 데이터 원형에 대해 transform 하는 역할을 하고 transform 타입을 관리하고 query에 데이터를 넘겨주는 역할
- `queries`는 `services`를 통해 호출된 transform 데이터의 캐싱과 제어를 하는 역할

단계적으로 반드시 아래와 같은 구조를 거쳐야한다.
`apis(호출)` -> `services(변형)` -> `queries(캐싱 및 제어)`

### 로컬 전역 상태 관리

- 현재는 React 18에서 제공하는 `useExternalStore`를 사용
- 써드파티 라이브러리를 활용하지 않아도 되는 장점이 있으나 객체의 제어를 위해 필요한 모든 인터페이스를 직접 구현해야하는 단점이 있음
- jotai, recoil 등이 고려 대상에 있음

### 스타일 관리

- Design Token을 활용한 Theme Provider의 설계
- `tailwindcss`는 `tailwind.config.cjs`에 plugins를 확장하는 방안으로 사용 (아래 경로에 실제 파일 참고)

```js
plugins: [require('./src/styles/tailwindcss/typography')],
```

사용할 때는 property를 통해 직접 호출하거나 styled component 방식으로 사용할 수 있음

```html
<div tw="body-20-b p-5">test</div>
```

```js
import tw, { styled } from 'twin.macro';
const StyledText = styled.div`
  ${tw`body-20-b p-5`}
`;
```

- `emotion`은 각 용도에 따라 module 방식으로 구분해서 ThemeProvider에 확장
- `./src/styles/emotion` 참고
- 확장된 `theme`은 styled component에서 호출하여 사용

```js
const StyledContent = styled.div`
  ${({ theme }) => theme.typography.body_20_b}
`;
```

- `material UI`를 사용하는 경우의 케이스도 정리할 예정

### 라우터 및 컴포넌트 관리

아직 확정되지 않음

### ESLint, Prettier

PR 등을 통해 제안주는 형식을 내부적으로 논의하여 반영
