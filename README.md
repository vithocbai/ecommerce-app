# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            // Other configs...

            // Remove tseslint.configs.recommended and replace with this
            ...tseslint.configs.recommendedTypeChecked,
            // Alternatively, use this for stricter rules
            ...tseslint.configs.strictTypeChecked,
            // Optionally, add this for stylistic rules
            ...tseslint.configs.stylisticTypeChecked,

            // Other configs...
        ],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            // Other configs...
            // Enable lint rules for React
            reactX.configs["recommended-typescript"],
            // Enable lint rules for React DOM
            reactDom.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
]);
```

<!--
  Các bước khởi tạo
  npm create @latest my-app
  cd my-app
  npm install

  git init - git add . - git commit -m ....

  cài tailwin : npm install -D @tailwindcss/postcss
autoprefixer
  tạo // tailwind.config.js
        /** @type {import('tailwindcss').Config} */
        export default {
            content: ["./src/**/*.{js,jsx,ts,tsx}"],
            theme: {
                extend: {},
            },
            plugins: [],
        };

    // postcss.config.js
      export default {
          plugins: {
            "@tailwindcss/postcss": {},
            autoprefixer: {},
          },
      };

    ===== Phân biệt cách tạo React:FC và Props ====
        React:FC
        const CategoriesSection: React.FC = () => {
        return <div>Danh mục</div>;
        };
        export default CategoriesSection;
        => Dùng React.FC khi:
            Bạn muốn có type-check tự động cho children (React.FC mặc định có children).
            Component đơn giản, không có props phức tạp.
            Dự án nhỏ hoặc bạn muốn code ngắn gọn, nhất quán.
        
        Props
        type CategoriesSectionProps = {};
        const CategoriesSection = (props: CategoriesSectionProps) => {
        return <div>Danh mục</div>;
        };

    ==== Mẫu khởi tạo component phổ biến trong TypeScript ===
    | Trường hợp                          | Cách viết                                           Ghichú 
        | ------------------------------- | ---------------------------------------------------------- | ------------------------ |
        | Component đơn giản, không props | `const Comp = () => {}`                                    | Ngắn gọn, không cần kiểu |
        | Component có props              | `type Props = {...}` + `const Comp = (props: Props) => {}` | Chuẩ nhất               |
        | Component nhận `children`       | `const Layout: React.FC = ({ children }) => {}`            | Gọn khi cần `children`   |
        | Component generic               | `function Comp<T>(props: MyProps<T>) {}`                   | Không dùng `React.FC`    |
        | Component memo                  | `const Comp = React.memo((props: Props) => {})`            | Type tự suy luận         |



 -->
