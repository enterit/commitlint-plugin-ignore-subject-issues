## commitlint-plugin-ignore-subject-issues

The plugin tweaks
[`subject-case`](https://github.com/conventional-changelog/commitlint/blob/5fd8a69cc1255f493447fac68264481d3e2e2ceb/docs/reference-rules.md#subject-case)
rule of [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint/) to allow upper-case
text in issue IDs.

It is a bit more flexible than disabling the `subject-case` rule, as it only makes an exception for issue IDs. The rest of the subject text is still validated.

You can use the plugin in combination with
[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/5fd8a69cc1255f493447fac68264481d3e2e2ceb/%40commitlint/config-conventional)
config.

### Usage

Install the plugin:
```bash
npm install -g commitlint-plugin-ignore-subject-issues
```

Add `ignore-subject-issues` to the list of plugins, and configure `issuePrefixes`.

Sample config `commitlint.config.js`:
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['ignore-subject-issues'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['AAAA-'],
    }
  }
}
```

Verify. This commit message should pass validation:
```bash
echo 'feat: AAAA-1001 whatever changes' | commitlint
```

Without the plugin, you would get an error:

```
⧗   input: feat: AAAA-1001 whatever changes
✖   subject must not be sentence-case, start-case, pascal-case, upper-case [subject-case]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```
