#### Command to compile scss file to a css file

```bash
npx sass /path/to/sass/sass-file.scss /path/to/css/css-file.css
```

For e.g.:

```bash
npx sass ./sass/main.scss ./css/main.css
```

To generate minified version of CSS file fom SCSS, you need enable following style flag in the command:

```bash
npx sass /path/to/sass/sass-file.scss /path/to/css/css-file.min.css --style=compressed
```

For e.g.:

```bash
npx sass ./sass/main.scss ./css/main.min.css --style=compressed
```

To run the above commands from npm script, following script can be added to the script section of package.json:

```json
"build-css": "sass ./sass/main.scss ./css/main.min.css --style=compressed"
```

Then, the scss compilation can be done using following command:

```bash
npm run build-css
```