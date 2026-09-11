import stylisticPlugin from '@stylistic/eslint-plugin'
import { type Linter } from 'eslint'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import importSortPlugin from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const plugins = {
  '@stylistic': stylisticPlugin,
  '@typescript-eslint': tseslint.plugin,
  import: importPlugin,
  perfectionist: perfectionist,
  react: react,
  'react-refresh': reactRefresh,
  'simple-import-sort': importSortPlugin,
}

const rules: Linter.RulesRecord = {
  // Enforce consistency of spacing after the start of a comment
  '@stylistic/spaced-comment': 'error',
  // Prevent @ts-ignore, allow @ts-expect-error
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': false,
      'ts-ignore': 'allow-with-description',
    },
  ],
  // Prefer type only imports, and separate them from value imports for better readability
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    },
  ],
  // No dupe enums
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  // No explicit any, always prefer a more specific type
  '@typescript-eslint/no-explicit-any': 'error',
  // No floating promises, always handle them with await or .then/.catch
  '@typescript-eslint/no-floating-promises': 'error',
  // No for in loops
  '@typescript-eslint/no-for-in-array': 'error',
  // Don't over-define types for simple things like strings
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: true,
    },
  ],
  // Discourage non-null assertions
  '@typescript-eslint/no-non-null-assertion': 'warn',
  // No unused variables, unless prefixed with underscore
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      ignoreUsingDeclarations: false,
      reportUsedIgnorePattern: true,
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
  // Enforce the use of as const over literal type
  '@typescript-eslint/prefer-as-const': 'error',
  // Prefer for-of loop over the standard for loop
  '@typescript-eslint/prefer-for-of': 'warn',
  // Prefer the use of ?? over ||
  '@typescript-eslint/prefer-nullish-coalescing': 'warn',
  // Warn about async functions which have no await expression
  '@typescript-eslint/require-await': 'warn',
  // Enforce consistent use of curly braces in control statements
  curly: ['error', 'all'],
  // Enforce === and !==
  eqeqeq: ['error', 'always'],
  // Consistent type specifier style, prefer inline type specifiers for better readability
  // import { type Foo } from './foo' is more readable than import type { Foo } from './foo'
  'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
  // Enforces that imports must come before all other statements
  'import/first': 'error',
  // Enforce newline after imports
  'import/newline-after-import': 'error',
  // Enforce no commonjs imports
  'import/no-commonjs': 'error',
  // Enforce no duplicate imports
  'import/no-duplicates': 'error',
  // Enforce no variable declarations in case clauses
  'no-case-declarations': 'error',
  // Warn against console statements
  'no-console': 'warn',
  // Enforce no duplicates
  'no-dupe-else-if': 'error',
  'no-duplicate-case': 'error',
  // Never use eval
  'no-eval': 'error',
  // Never use implied eval
  'no-implied-eval': 'error',
  // Warn against variable declarations from shadowing variables declared in the outer scope
  'no-shadow': 'warn',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  // Gives control to tseslint for unused variables, as it can ignore variables prefixed with underscore
  'no-unused-vars': 'off',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  // Enforce use of let and const
  'no-var': 'error',
  'no-with': 'error',
  // Enforce new line when there is at least one property in an object
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        consistent: true,
        minProperties: 1,
        multiline: true,
      },
    },
  ],
  //
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: false,
    },
  ],
  // Enforce padding lines between statements
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      next: '*',
      prev: 'expression',
    },
    {
      blankLine: 'always',
      next: 'expression',
      prev: '*',
    },
    {
      blankLine: 'any',
      next: 'expression',
      prev: 'expression',
    },
  ],
  // Sort interfaces alphabetically
  'perfectionist/sort-interfaces': 'error',
  // Sort intersection types alphabetically
  'perfectionist/sort-intersection-types': 'error',
  // Sort object types alphabetically
  'perfectionist/sort-object-types': 'error',
  // Sort objects alphabetically
  'perfectionist/sort-objects': 'error',
  // Sort union types alphabetically
  'perfectionist/sort-union-types': 'error',
  // Enforce the use of const for variables that are never reassigned after declared
  'prefer-const': 'error',
  // Prefer destructuring props/state
  'react/destructuring-assignment': ['warn', 'always'],
  // Warn against missing display name
  'react/display-name': 'warn',
  // Enforce consistent function component style
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  // No boolean values in JSX
  'react/jsx-boolean-value': ['error', 'never'],
  // No unnecessary curly braces in JSX
  'react/jsx-curly-brace-presence': [
    'error',
    {
      children: 'never',
      props: 'never',
    },
  ],
  // Prefer fragments shorthand <>...</>
  'react/jsx-fragments': ['warn', 'syntax'],
  // No new lines in JSX
  'react/jsx-newline': [
    'error',
    {
      prevent: true,
    },
  ],
  // No accidental duplicate props
  'react/jsx-no-duplicate-props': 'error',
  // No useless fragments in JSX
  'react/jsx-no-useless-fragment': 'error',
  // Enforce consistent prop sorting in JSX
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: true,
      multiline: 'last',
      reservedFirst: true,
      shorthandFirst: true,
    },
  ],
  // Warn against use of array index as key
  'react/no-array-index-key': 'warn',
  // Enforce that children is not used as a prop
  'react/no-children-prop': 'error',
  // Warn against unstable nested component definitions
  'react/no-unstable-nested-components': [
    'warn',
    {
      allowAsProps: true,
    },
  ],
  // Enforce self-closing tags for components without children
  'react/self-closing-comp': 'error',
  // Exports must be sorted
  'simple-import-sort/exports': 'error',
  // Imports must be sorted
  'simple-import-sort/imports': 'error',
}

const config: Linter.Config[] = [
  {
    ignores: [
      '**/.open-next/**',
      '**/.next/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/dev-dist/**',
      '**/.vite/**',
      '**/*.json',
      'out/**',
      'next-env.d.ts',
    ],
    name: 'ignore',
  },
  ...tseslint.configs.strict.map((conf) => ({
    ...conf,
    files: ['**/*.{ts,tsx}'],
  })),
  ...tseslint.configs.stylistic.map((conf) => ({
    ...conf,
    files: ['**/*.{ts,tsx}'],
  })),
  ...tseslint.configs.recommendedTypeChecked.map((conf) => ({
    ...conf,
    files: ['**/*.{ts,tsx}'],
  })),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
      sourceType: 'module',
    },
    name: 'typescript',
    plugins,
    rules,
  },
  ...nextVitals,
  ...nextTs,
]

export default config
